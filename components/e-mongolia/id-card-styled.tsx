"use client"

interface IDCardStyledProps {
  familyName?: string
  surname?: string
  givenName?: string
  sex?: string
  dateOfBirth?: string
  civilId?: string
  photoUrl?: string
  onClick?: () => void
}

export function IDCardStyled({
  familyName = "Боржигон",
  surname = "Алтантуяа",
  givenName = "МӨНГӨНШАГАЙ",
  sex = "Эрэгтэй",
  dateOfBirth = "2004/03/05",
  civilId = "632119006489",
  photoUrl,
  onClick
}: IDCardStyledProps) {
  return (
    <div 
      className="bg-[#f5ebe0] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
      style={{ fontFamily: "system-ui" }}
    >
      <div className="p-4 relative">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-32 h-32 text-amber-700">
            <circle cx="50" cy="30" r="20" fill="currentColor" />
            <path d="M30 60 Q50 80 70 60 Q50 100 30 60" fill="currentColor" />
          </svg>
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          {/* Mongolian Flag */}
          <div className="w-12 h-8 flex-shrink-0 rounded overflow-hidden shadow-sm">
            <div className="flex h-full">
              <div className="w-1/3 bg-[#c4272f] flex items-center justify-center">
                <svg viewBox="0 0 20 40" className="w-2 h-5 text-[#f9cf02]">
                  <circle cx="10" cy="6" r="4" fill="currentColor" />
                  <circle cx="10" cy="16" r="3" fill="currentColor" />
                  <rect x="8" y="20" width="4" height="12" fill="currentColor" />
                  <circle cx="10" cy="36" r="4" fill="currentColor" />
                </svg>
              </div>
              <div className="w-1/3 bg-[#015197]"></div>
              <div className="w-1/3 bg-[#c4272f]"></div>
            </div>
          </div>
          
          {/* Title */}
          <div className="flex-1">
            <h2 className="text-[#015197] font-normal text-xs leading-tight">
              МОНГОЛ УЛСЫН ИРГЭНИЙ ҮНЭМЛЭХ
            </h2>
            <p className="text-[#015197] text-[8px] leading-tight font-normal">
              CITIZEN IDENTITY CARD OF MONGOLIA
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-3">
          {/* Left - Fields */}
          <div className="flex-1 space-y-1.5 text-[9px]">
            <div>
              <span className="text-[#c9a227] font-normal">Овог </span>
              <span className="text-gray-500 text-[8px] font-normal">Family name</span>
              <p className="text-gray-800 font-normal">{familyName}</p>
            </div>
            <div>
              <span className="text-[#c9a227] font-normal">Эцэг/ эх /-ийн нэр </span>
              <span className="text-gray-500 text-[8px] font-normal">Surname</span>
              <p className="text-gray-800 font-normal">{surname}</p>
            </div>
            <div>
              <span className="text-[#c9a227] font-normal">Нэр </span>
              <span className="text-gray-500 text-[8px] font-normal">Given name</span>
              <p className="text-gray-800 font-normal">{givenName}</p>
            </div>
            <div>
              <span className="text-[#c9a227] font-normal">Хүйс </span>
              <span className="text-gray-500 text-[8px] font-normal">Sex</span>
              <p className="text-gray-800 font-normal">{sex}</p>
            </div>
            <div>
              <span className="text-[#c9a227] font-normal">Төрсөн он, сар өдөр</span>
              <p className="text-gray-500 text-[8px] font-normal">Date of birth</p>
              <p className="text-gray-800 font-normal">{dateOfBirth}</p>
            </div>
          </div>

          {/* Right - Photo and Barcode */}
          <div className="flex flex-col items-center gap-2">
            {/* National Emblem */}
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white/50">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-gray-400">
                <circle cx="20" cy="12" r="6" fill="currentColor" />
                <path d="M10 25 Q20 35 30 25 Q20 45 10 25" fill="currentColor" />
              </svg>
            </div>

            {/* Barcode */}
            <div className="w-8 h-16 flex flex-col items-center justify-center border-2 border-[#015197] rounded-full p-1">
              <div className="space-y-0.5 w-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1 bg-[#015197] w-full" style={{ opacity: i % 2 === 0 ? 1 : 0.6 }} />
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="w-14 h-16 bg-[#e8c9a0] rounded overflow-hidden flex items-center justify-center">
              {photoUrl ? (
                <img src={photoUrl} alt="Photo" className="w-full h-full object-cover" />
              ) : (
                <svg viewBox="0 0 40 50" className="w-10 h-12 text-[#d4a574]">
                  <circle cx="20" cy="15" r="10" fill="currentColor" />
                  <ellipse cx="20" cy="45" rx="15" ry="12" fill="currentColor" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Bottom - Civil ID */}
        <div className="mt-2 flex items-end justify-between">
          <div className="text-[9px]">
            <span className="text-[#c9a227] font-normal">Иргэний бүртгэлийн дугаар </span>
            <span className="text-gray-500 text-[8px] font-normal">Civil Identification number</span>
            <p className="text-gray-800 font-normal text-sm">{civilId}</p>
          </div>
          
          {/* Mongolia Map */}
          <div className="w-12 h-6">
            <svg viewBox="0 0 100 50" className="w-full h-full text-[#4a7c59]">
              <path 
                d="M10 25 Q20 10 40 15 Q60 5 80 20 Q95 25 90 35 Q70 45 50 40 Q30 50 15 35 Q5 30 10 25" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
