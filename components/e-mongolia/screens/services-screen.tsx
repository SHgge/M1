"use client"

import Image from "next/image"

export function ServicesScreen() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="relative min-h-full w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2e8b88f5-b9a0-4ce8-b373-db5680477872-agvxVLIlcSJ5n6LSoBoYt0YZNTTNFW.jpg"
          alt="E-Mongolia Services Screen"
          width={430}
          height={1400}
          className="w-full object-contain"
          priority
        />
      </div>
    </div>
  )
}
