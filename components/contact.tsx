"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { profileData } from "@/data/profile-data"
import emailjs from '@emailjs/browser'
import { CheckCircle2, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import AnimateInView from "./animate-in-view"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Reset success state when user starts typing again
    if (isSuccess) {
      setIsSuccess(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      // EmailJS configuration with your actual credentials
      const serviceId = 'service_mxe1pim'
      const templateId = 'portfolio_contact'
      const publicKey = 'd8HtsgrrQNWIbWhKj'

      // Initialize EmailJS
      emailjs.init(publicKey)

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Rasel Ahmed Raju',
        to_email: 'raselraju.queries@gmail.com',
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      // Check for successful response
      if (response.status === 200 || response.text === 'OK') {
        // Set success state immediately
        setIsSuccess(true)
        
        // Show success toast
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
        })
        
        // Keep form filled for 1.5 seconds to show success state
        setTimeout(() => {
          // Auto-clear the form after 1.5 seconds
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          // Reset success state after form is cleared
          setTimeout(() => {
            setIsSuccess(false)
          }, 500)
        }, 1500)
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setIsSuccess(false)
      
      // Error handling
      if (error instanceof Error) {
        if (error.message.includes('Invalid')) {
          toast.error("Invalid EmailJS configuration. Please check your credentials.", {
            duration: 8000,
          })
        } else if (error.message.includes('rate limit')) {
          toast.error("Too many requests. Please wait a moment and try again.", {
            duration: 8000,
          })
        } else {
          toast.error(`Failed to send message: ${error.message}`, {
            duration: 8000,
          })
        }
      } else {
        toast.error("Failed to send message. Please try again later.", {
          duration: 5000,
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateInView animation="fade-right">
            <Card className="h-full transition-all duration-300 hover:shadow-lg gradient-border">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Feel free to reach out through any of the following channels:
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start group">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-700 dark:text-gray-300">{profileData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="h-6 w-6 text-primary mr-4 mt-0.5 flex justify-center transition-transform duration-300 group-hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                      <a
                        href={profileData.socialLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        {profileData.socialLinks[0].username}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender-gBpAh7KwftqMwurk0lh9vjuUIqReJa.jpeg"
                    alt="Rasel Ahmed Raju"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimateInView>

          <AnimateInView animation="fade-left" delay={200}>
            <Card className="transition-all duration-300 hover:shadow-lg gradient-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:border-primary focus:ring-primary"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:border-primary focus:ring-primary"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {/* Send Message Button with all the requested features */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full transition-all duration-500 ${
                      isSuccess 
                        ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg transform scale-105' 
                        : isSubmitting 
                        ? 'gradient-bg opacity-75 cursor-not-allowed' 
                        : 'gradient-bg hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 text-white" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

export default Contact
