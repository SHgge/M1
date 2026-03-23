"use client"

import { useState } from "react"
import Image from "next/image"
import { HomeScreen } from "./screens/home-screen"
import { ServicesScreen } from "./screens/services-screen"
import { QRScreen } from "./screens/qr-screen"
import { ExtraScreen } from "./screens/extra-screen"
import { ProfileScreen } from "./screens/profile-screen"
import { BottomTabBar } from "./bottom-tab-bar"
import { IDCardProvider } from "./id-card-context"

export type TabType = "home" | "services" | "qr" | "extra" | "profile"

function MobileShellContent() {
  const [activeTab, setActiveTab] = useState<TabType>("home")
  const [previousTab, setPreviousTab] = useState<TabType>("home")

  const handleTabChange = (tab: TabType) => {
    if (tab === "qr") {
      setPreviousTab(activeTab)
    }
    setActiveTab(tab)
  }

  const handleBackFromQR = () => {
    setActiveTab(previousTab)
  }

  const showHeader = activeTab !== "profile" && activeTab !== "qr"

  return (
    <div className="animate-in fade-in duration-800 relative flex h-full flex-col">
      {/* Header - Hidden on Profile and QR tabs */}
      {showHeader && (
        <div className="relative h-[60px] w-full shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27284e34-5434-45a3-ad75-b7b51a873299-mUJR3TwMfM6mXxTbEOsyQBbG5xDbVq.jpg"
            alt="E-Mongolia Header"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out ${
            activeTab === "home" ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {activeTab === "home" && <HomeScreen />}
        </div>
        
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out ${
            activeTab === "services" ? "translate-x-0" : activeTab === "home" ? "translate-x-full" : "-translate-x-full"
          }`}
        >
          {activeTab === "services" && <ServicesScreen />}
        </div>
        
        <div
          className={`absolute inset-0 transition-all duration-300 ease-out ${
            activeTab === "qr" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {activeTab === "qr" && <QRScreen onBack={handleBackFromQR} />}
        </div>
        
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out ${
            activeTab === "extra" ? "translate-x-0" : activeTab === "profile" ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          {activeTab === "extra" && <ExtraScreen />}
        </div>
        
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out ${
            activeTab === "profile" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {activeTab === "profile" && <ProfileScreen />}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}

export function MobileShell() {
  return (
    <IDCardProvider>
      <MobileShellContent />
    </IDCardProvider>
  )
}
