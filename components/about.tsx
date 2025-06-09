import { Card, CardContent } from "@/components/ui/card"
import { profileData } from "@/data/profile-data"
import { ExternalLink, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import AnimateInView from "./animate-in-view"

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateInView animation="fade-right" className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">{profileData.about}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="transition-all duration-300 hover:shadow-lg gradient-border">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center group">
                        <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
                          <Mail className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                          <a
                            href={`mailto:${profileData.email}`}
                            className="text-sm text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                          >
                            {profileData.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center group">
                        <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                          <a
                            href={`tel:${profileData.phone}`}
                            className="text-sm text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                          >
                            {profileData.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center group">
                        <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{profileData.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg gradient-border">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">Social Profiles</h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={profileData.socialLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href={profileData.socialLinks[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                        aria-label="GitHub"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href={profileData.socialLinks[2].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                        aria-label="Kaggle"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                      <a
                        href={profileData.socialLinks[3].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a
                        href={profileData.socialLinks[4].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView animation="fade-left" delay={200} className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md h-[500px] rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] gradient-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender%206.jpg-ZkpS4s8euRRk9M7RTT0PJNC1q0HdAM.jpeg"
                alt="Rasel Ahmed Raju"
                fill
                className="object-cover"
              />
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

export default About
