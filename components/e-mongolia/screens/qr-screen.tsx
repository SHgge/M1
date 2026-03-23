"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"

interface QRScreenProps {
  onBack: () => void
}

export function QRScreen({ onBack }: QRScreenProps) {
  return (
    <div className="relative flex h-full flex-col bg-[#F1F5FF]">
      {/* Header with Logo */}
      <div className="relative h-[60px] w-full shrink-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27284e34-5434-45a3-ad75-b7b51a873299-mUJR3TwMfM6mXxTbEOsyQBbG5xDbVq.jpg"
          alt="E-Mongolia Header"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* QR Permission Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/891707b3-cf11-4f34-a03d-f4f325f90cdf-Xj0h5LLXAFzfN4SDLIqyru5YAjGMt5.jpg"
          alt="QR Camera Permission"
          width={430}
          height={500}
          className="object-contain"
          priority
        />
      </div>
      
      <div className="pb-8 flex justify-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#2563EB] shadow-md transition-transform active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Буцах</span>
        </button>
      </div>
    </div>
  )
}
