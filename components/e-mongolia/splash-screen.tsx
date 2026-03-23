"use client"

import Image from "next/image"

export function SplashScreen() {
  return (
    <div className="animate-in fade-in duration-500 absolute inset-0 flex items-center justify-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0793ea9f-1a85-4c52-a5c5-6ebeb10febce-fVTZGpKXbKflKmj81UUrSqVHYMbMzO.jpg"
        alt="E-Mongolia Splash"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
