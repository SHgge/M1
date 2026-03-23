"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/e-mongolia/splash-screen"
import { MobileShell } from "@/components/e-mongolia/mobile-shell"

export default function EMongoliaApp() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-svh items-center justify-center bg-slate-200 p-0 sm:p-4">
      {/* Mobile: full screen, Tablet/Desktop: phone frame */}
      <div className="relative w-full h-svh sm:h-[844px] sm:max-w-[430px] overflow-hidden sm:rounded-[40px] bg-[#F1F5FF] sm:shadow-2xl">
        {showSplash ? (
          <SplashScreen />
        ) : (
          <MobileShell />
        )}
      </div>
    </div>
  )
}
