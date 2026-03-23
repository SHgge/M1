"use client"

import Image from "next/image"

export function HomeScreen() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="relative min-h-full w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60dd7a95-8e37-406b-b183-eb65b9640702-LcODFiuzXbFG3Xkc7qFMgqn8TeRekG.jpg"
          alt="E-Mongolia Home Screen"
          width={430}
          height={1200}
          className="w-full object-contain"
          priority
        />
      </div>
    </div>
  )
}
