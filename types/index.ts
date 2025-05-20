export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ProfileData {
  name: string
  title: string
  email: string
  phone: string
  location: string
  about: string
  socialLinks: {
    platform: string
    url: string
    username: string
  }[]
}

export interface ExperienceData {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export interface EducationData {
  degree: string
  institution: string
  period: string
  description: string
  achievements?: string[]
}

export interface SkillCategory {
  category: string
  description: string
  skills: {
    name: string
    level: number
  }[]
}

export interface ProjectData {
  title: string
  description: string
  technologies: string[]
  image?: string
  github?: string
  demo?: string
}

export interface CertificateData {
  title: string
  issuer: string
  date: string
  description: string
  url?: string
}
