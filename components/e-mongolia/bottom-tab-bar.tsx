"use client"

import { Home, FileText, QrCode, Package, User } from "lucide-react"
import type { TabType } from "./mobile-shell"

interface BottomTabBarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export function BottomTabBar({ activeTab, onTabChange }: BottomTabBarProps) {
  const tabs = [
    { id: "home" as TabType, label: "Нүүр", icon: Home },
    { id: "services" as TabType, label: "Үйлчилгээ", icon: FileText },
    { id: "qr" as TabType, label: "", icon: QrCode },
    { id: "extra" as TabType, label: "Нэмэлт", icon: Package },
    { id: "profile" as TabType, label: "Профайл", icon: User },
  ]

  return (
    <div className="relative shrink-0 bg-white px-2 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]" style={{ fontFamily: "system-ui" }}>
      <div className="flex items-end justify-around">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const isQR = tab.id === "qr"
          const Icon = tab.icon

          if (isQR) {
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative -mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white shadow-lg transition-transform active:scale-95"
                aria-label="QR код"
              >
                <Icon className="h-7 w-7" />
              </button>
            )
          }

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex min-w-[60px] flex-col items-center gap-1 py-1 transition-colors ${
                isActive ? "text-[#2563EB]" : "text-[#94A3B8]"
              }`}
              aria-label={tab.label}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-normal">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
