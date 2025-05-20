"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimateInViewProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "none"
}

export default function AnimateInView({
  children,
  className,
  delay = 0,
  duration = 500,
  once = true,
  animation = "fade-up",
}: AnimateInViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once])

  const getAnimationClasses = () => {
    if (animation === "none") return ""

    const baseClasses = "transition-all"
    const durationClass = `duration-${duration}`
    const delayClass = delay > 0 ? `delay-${delay}` : ""

    const animationClasses = {
      "fade-up": "translate-y-8 opacity-0",
      "fade-down": "translate-y-[-2rem] opacity-0",
      "fade-left": "translate-x-[-2rem] opacity-0",
      "fade-right": "translate-x-8 opacity-0",
      "zoom-in": "scale-95 opacity-0",
    }

    return `${baseClasses} ${durationClass} ${delayClass} ${isVisible ? "" : animationClasses[animation]}`
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
