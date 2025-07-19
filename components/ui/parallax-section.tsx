"use client"

import React, { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  backgroundImage?: string
  backgroundPosition?: string
  backgroundSize?: string
}

export function ParallaxSection({
  children,
  className = "",
  backgroundImage,
  backgroundPosition = "center",
  backgroundSize = "cover",
}: ParallaxSectionProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundPosition,
        backgroundSize,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}