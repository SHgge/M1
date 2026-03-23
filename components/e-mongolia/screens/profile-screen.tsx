"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronRight, User } from "lucide-react"
import { IDBottomSheet } from "../id-bottom-sheet"
import { IDCardPreview } from "../id-card-preview"
import { useIDCard } from "../id-card-context"

// Original profile background image
const profileBackgroundImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07ebc16b-f103-438a-968a-bfd7ea72b58f-JwlYdof6WCpZ7uefu7PHBJoQSpSlpa.jpg"

export function ProfileScreen() {
  const [showIDSheet, setShowIDSheet] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { data, updateData } = useIDCard()

  // Single card only
  const cards = [1]

  return (
    <>
      <div className="h-full overflow-y-auto">
        <div className="relative min-h-full w-full">
          {/* Background Image */}
          <Image
            src={profileBackgroundImage}
            alt="Profile Background"
            width={500}
            height={1200}
            className="w-full object-contain"
            priority
          />

          {/* Profile Header - Overlay positioned exactly on background header area */}
          <div
            className="absolute left-0 right-0"
            style={{ top: "3.7%", paddingLeft: "4%", paddingRight: "4%" }}
          >
            <div className="flex items-center bg-white/95 rounded-2xl p-3 shadow-sm">
              {/* Profile Photo */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#E8F4FC] flex items-center justify-center flex-shrink-0">
                {data.photo ? (
                  <img
                    src={data.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6 text-[#94A3B8]" />
                )}
              </div>

              {/* Name and Email */}
              <div className="ml-3 flex-1 min-w-0">
                <input
                  type="text"
                  value={data.profileName}
                  onChange={(e) => updateData({ profileName: e.target.value })}
                  placeholder="О.Нэр"
                  className="text-[#2563EB] font-normal text-base bg-transparent outline-none w-full placeholder:text-[#2563EB]/50"
                  style={{ fontFamily: "system-ui" }}
                />
                <p className="text-[#64748B] text-xs truncate font-normal" style={{ fontFamily: "system-ui" }}>
                  487607909676@e-mongolia.mn
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-[#94A3B8] flex-shrink-0" />
            </div>
          </div>

          {/* ID Card - centered and responsive */}
          <div className="absolute left-0 right-0 flex justify-center px-4" style={{ top: "14%" }}>
            <div className="w-full max-w-[350px]">
              <IDCardPreview onClick={() => setShowIDSheet(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* ID Bottom Sheet */}
      <IDBottomSheet isOpen={showIDSheet} onClose={() => setShowIDSheet(false)} />
    </>
  )
}
