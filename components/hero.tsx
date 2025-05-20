import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import AnimateInView from "./animate-in-view"

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <AnimateInView animation="fade-right" className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">Hi, I&apos;m Rasel</span>
              <span className="block mt-2 gradient-text">Web Developer & AI Engineer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Specializing in Full Stack Development and Machine Learning AI Models with a passion for creating innovative digital
              solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full transition-all duration-300 hover:scale-105 gradient-bg"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full transition-all duration-300 hover:bg-primary/10 gradient-border"
              >
                <Link href="#experience">View Experience</Link>
              </Button>
            </div>
          </AnimateInView>
          <AnimateInView animation="fade-left" delay={200} className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] gradient-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rasel%20Ahmed%20Raju-n7r0hysrD1mPaQYZGIodSesvtDnLX4.jpeg"
                alt="Rasel Ahmed Raju"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimateInView>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

export default Hero
