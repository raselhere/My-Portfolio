import { profileData } from "@/data/profile-data"
import { ExternalLink, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rasel Ahmed Raju</h3>
            <p className="text-gray-300 mb-4">
              Web Developer & AI Engineer specializing in creating innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href={profileData.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Kaggle"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={profileData.socialLinks[4].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors">
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Linkedin className="h-5 w-5 mr-2" />
                <a
                  href={profileData.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Github className="h-5 w-5 mr-2" />
                <a
                  href={profileData.socialLinks[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Facebook className="h-5 w-5 mr-2" />
                <a
                  href={profileData.socialLinks[3].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Instagram className="h-5 w-5 mr-2" />
                <a
                  href={profileData.socialLinks[4].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Rasel Ahmed Raju. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
