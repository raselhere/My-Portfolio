"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { profileData } from "@/data/profile-data"
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "@/lib/send-email"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import AnimateInView from "./animate-in-view"

const Contact = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendEmail(formData)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
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

                  <div className="flex items-start group">
                    <div className="h-6 w-6 text-primary mr-4 mt-0.5 flex justify-center transition-transform duration-300 group-hover:scale-110">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">GitHub</h4>
                      <a
                        href={profileData.socialLinks[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        {profileData.socialLinks[1].username}
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
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full transition-all duration-300 hover:scale-[1.02] gradient-bg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
