"use server"

import { redirect } from "next/navigation"

// Using the environment variable for the committee email
// This ensures the email address is not hardcoded and can be changed without code modifications
export async function submitContactForm(formData: FormData) {
  // Get the committee email from environment variables
  const committeeEmail = process.env.COMMITTEE_EMAIL

  if (!committeeEmail) {
    console.error("Committee email environment variable is not set")
    throw new Error("Configuration error: Committee email not set")
  }

  // Extract form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate form data
  if (!name || !email || !subject || !message) {
    throw new Error("All fields are required")
  }

  try {
    // In a real application, you would send an email here
    // For example, using a service like Nodemailer, SendGrid, etc.
    console.log(`Sending email to ${committeeEmail}`)
    console.log(`From: ${name} (${email})`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)

    // For demonstration purposes, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to a thank you page or back to the contact page with a success message
    redirect("/contact/thank-you")
  } catch (error) {
    console.error("Failed to send contact form:", error)
    throw new Error("Failed to send your message. Please try again later.")
  }
}
