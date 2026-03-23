"use client"

import { useState, useEffect } from "react"
import { IDCard } from "./id-card"

interface IDBottomSheetProps {
  isOpen: boolean
  onClose: () => void
}

export function IDBottomSheet({ isOpen, onClose }: IDBottomSheetProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Reset state when sheet closes
  useEffect(() => {
    if (!isOpen) {
      setIsFlipped(false)
    }
  }, [isOpen])

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-40 bg-black/40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: "70%" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1 w-10 rounded-full bg-slate-300" />
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 pb-8" style={{ maxHeight: "calc(70vh - 60px)", fontFamily: "system-ui" }}>
          {/* Flip hint */}
          <p className="text-center text-xs text-slate-400 mb-3 font-normal">Картыг эргүүлэхийн тулд дарна уу</p>

          {/* ID Card with Flip - Click to flip */}
          <IDCard
            isFlipped={isFlipped}
            onCardClick={handleCardClick}
          />

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <button 
              className="w-full rounded-2xl bg-[#2563EB] py-4 text-base font-normal text-white shadow-md transition-all active:scale-[0.98]"
            >
              Лавлагаа авах
            </button>
            <button 
              className="w-full rounded-2xl bg-[#EFF6FF] py-4 text-base font-normal text-[#2563EB] transition-all active:scale-[0.98]"
            >
              Дахин захиалах
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
