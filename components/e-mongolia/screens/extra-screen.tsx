"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Edit3, Trash2, Camera, X, ChevronRight } from "lucide-react"
import { useIDCard } from "../id-card-context"

export function ExtraScreen() {
  const [showEditSheet, setShowEditSheet] = useState(false)
  const { data, updateData, setPhoto, clearData } = useIDCard()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClearData = () => {
    if (confirm("Бүх мэдээллийг устгах уу?")) {
      clearData()
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="h-full overflow-y-auto bg-[#F1F5FF]" style={{ fontFamily: "system-ui" }}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
      />

      <div className="p-4">
        {/* Title */}
        <h1 className="text-lg font-normal text-slate-800 mb-4">Нэмэлт</h1>

        {/* ID Card Actions */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <p className="px-4 pt-4 pb-2 text-xs text-slate-500 font-normal">Иргэний үнэмлэх</p>
          
          {/* Edit ID Card */}
          <button
            onClick={() => setShowEditSheet(true)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                <Edit3 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <span className="text-sm font-normal text-slate-800">Мэдээлэл оруулах</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          {/* Clear ID Card Data */}
          <button
            onClick={handleClearData}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors border-t border-slate-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-sm font-normal text-slate-800">Мэдээлэл устгах</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Other sections placeholder */}
        <div className="mt-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3b025b57-0803-4589-aa0d-de179392fd4b-j5YUtJ1kwgaH7s1luMphmBFlryfvjA.jpg"
            alt="E-Mongolia Extra Services"
            width={430}
            height={600}
            className="w-full object-contain rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* Edit Sheet */}
      {showEditSheet && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setShowEditSheet(false)}
          />

          {/* Bottom Sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col" style={{ maxHeight: "80vh", height: "80vh" }}>
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2 shrink-0">
              <div className="h-1 w-10 rounded-full bg-slate-300" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-3 border-b border-slate-100 shrink-0">
              <h2 className="text-base font-normal text-slate-800">Мэдээлэл оруулах</h2>
              <button
                onClick={() => setShowEditSheet(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Content - scrollable */}
            <div className="flex-1 overflow-y-auto px-4">
              {/* Photo Upload */}
              <div className="flex flex-col items-center gap-3 py-4">
                <div 
                  className="relative w-20 h-24 rounded-lg overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {data.photo ? (
                    <img src={data.photo} alt="ID Photo" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                      <Camera className="w-6 h-6" />
                      <span className="text-[10px] mt-1">Зураг</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs text-[#2563EB] font-normal"
                >
                  Зураг солих
                </button>
              </div>

              {/* Profile Name Field */}
              <div className="space-y-3 pb-3">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1 font-normal">О.Нэр (Профайл нэр)</label>
                  <input
                    type="text"
                    value={data.profileName}
                    onChange={(e) => updateData({ profileName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                    placeholder="О.Нэр"
                  />
                </div>
              </div>

              {/* Front Side Fields */}
              <div className="space-y-3">
                <p className="text-xs text-slate-500 font-normal">Урд тал</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-normal">Овог</label>
                    <input
                      type="text"
                      value={data.familyName}
                      onChange={(e) => updateData({ familyName: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                      placeholder="Овог"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-normal">Эцэг/эх/-ийн нэр</label>
                    <input
                      type="text"
                      value={data.surname}
                      onChange={(e) => updateData({ surname: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                      placeholder="Эцэг/эх/-ийн нэр"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1 font-normal">Нэр</label>
                  <input
                    type="text"
                    value={data.givenName}
                    onChange={(e) => updateData({ givenName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                    placeholder="Нэр"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-normal">Хүйс</label>
                    <input
                      type="text"
                      value={data.sex}
                      onChange={(e) => updateData({ sex: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                      placeholder="Эрэгтэй/Эмэгтэй"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-normal">Төрсөн огноо</label>
                    <input
                      type="text"
                      value={data.dateOfBirth}
                      onChange={(e) => updateData({ dateOfBirth: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                      placeholder="YYYY/MM/DD"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1 font-normal">Иргэний бүртгэлийн дугаар</label>
                  <input
                    type="text"
                    value={data.civilId}
                    onChange={(e) => updateData({ civilId: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                    placeholder="Бүртгэлийн дугаар"
                  />
                </div>
              </div>

              {/* Back Side Fields */}
              <div className="space-y-3 pt-4 mt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-normal">Ар тал</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-normal">Олгосон огноо</label>
                    <input
                      type="text"
                      value={data.issuedDate}
                      onChange={(e) => updateData({ issuedDate: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                      placeholder="YYYY/MM/DD"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-normal">Хүчинтэй хугацаа</label>
                    <input
                      type="text"
                      value={data.expiryDate}
                      onChange={(e) => updateData({ expiryDate: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                      placeholder="YYYY/MM/DD"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1 font-normal">Хаяг</label>
                  <input
                    type="text"
                    value={data.address}
                    onChange={(e) => updateData({ address: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-[#2563EB] font-normal"
                    placeholder="Хаяг"
                  />
                </div>
              </div>
            </div>

            {/* Save Button - Fixed at bottom */}
            <div className="shrink-0 px-4 py-4 border-t border-slate-100 bg-white">
              <button
                onClick={() => setShowEditSheet(false)}
                className="w-full rounded-2xl bg-[#2563EB] py-4 text-base font-normal text-white shadow-md transition-all active:scale-[0.98]"
              >
                Хадгалах
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
