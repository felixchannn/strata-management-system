"use server"

// This is a utility service for sending emails using the committee email address
// It demonstrates how to use the environment variable securely

export async function sendEmail(options: {
  to: string
  subject: string
  body: string
  replyTo?: string
}) {
  // Get the committee email from environment variables
  const committeeEmail = process.env.COMMITTEE_EMAIL

  if (!committeeEmail) {
    console.error("Committee email environment variable is not set")
    throw new Error("Configuration error: Committee email not set")
  }

  try {
    // In a real application, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration purposes, we'll just log the email details
    console.log(`
      From: ${committeeEmail}
      To: ${options.to}
      Subject: ${options.subject}
      Reply-To: ${options.replyTo || committeeEmail}
      Body: ${options.body}
    `)

    // For demonstration purposes, we'll simulate a successful email send
    await new Promise((resolve) => setTimeout(resolve, 500))

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send email. Please try again later.")
  }
}

// Function to send notification emails to committee members
export async function notifyCommittee(options: {
  subject: string
  body: string
  from?: string
}) {
  const committeeEmail = process.env.COMMITTEE_EMAIL

  if (!committeeEmail) {
    console.error("Committee email environment variable is not set")
    throw new Error("Configuration error: Committee email not set")
  }

  try {
    // In a real application, this would send an email to all committee members
    console.log(`
      Notification to Committee:
      To: ${committeeEmail}
      Subject: ${options.subject}
      From: ${options.from || "System"}
      Body: ${options.body}
    `)

    // For demonstration purposes, we'll simulate a successful notification
    await new Promise((resolve) => setTimeout(resolve, 500))

    return { success: true }
  } catch (error) {
    console.error("Failed to notify committee:", error)
    throw new Error("Failed to send notification. Please try again later.")
  }
}
