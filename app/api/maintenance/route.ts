import { type NextRequest, NextResponse } from "next/server"
import { notifyCommittee } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, location, priority, attachments } = body

    // Validate request data
    if (!title || !description || !location || !priority) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would save this to a database
    // For demonstration purposes, we'll just log the request
    console.log("Maintenance request received:", {
      title,
      description,
      location,
      priority,
      attachments: attachments?.length || 0,
    })

    // Notify the committee about the new maintenance request
    // This uses the COMMITTEE_EMAIL environment variable via the email service
    await notifyCommittee({
      subject: `New Maintenance Request: ${title}`,
      body: `
        A new maintenance request has been submitted:
        
        Title: ${title}
        Location: ${location}
        Priority: ${priority}
        Description: ${description}
        
        Please log in to the admin portal to review this request.
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Maintenance request submitted successfully",
      requestId: `REQ-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`,
    })
  } catch (error) {
    console.error("Error processing maintenance request:", error)
    return NextResponse.json({ error: "Failed to process maintenance request" }, { status: 500 })
  }
}
