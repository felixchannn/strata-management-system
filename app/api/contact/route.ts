import { type NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email using the email service
    // This uses the COMMITTEE_EMAIL environment variable
    await sendEmail({
      to: process.env.COMMITTEE_EMAIL!, // Using the environment variable
      subject: `Contact Form: ${subject}`,
      body: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      replyTo: email,
    })

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
