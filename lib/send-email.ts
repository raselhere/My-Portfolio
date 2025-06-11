"use server"

import type { EmailData } from "@/types"
import emailjs from '@emailjs/browser'

export async function sendEmail(data: EmailData) {
  try {
    // EmailJS configuration
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

    // Template parameters for EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Rasel Ahmed Raju',
      to_email: 'raselraju.queries@gmail.com',
      reply_to: data.email,
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' }
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email. Please try again later.")
  }
}
