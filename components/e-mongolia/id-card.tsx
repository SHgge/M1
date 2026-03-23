"use client"

import { useIDCard } from "./id-card-context"

interface IDCardProps {
  isFlipped: boolean
  onCardClick: () => void
}

// Original ID card images
const idCardFrontImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a92a56d0-b9aa-47c1-bab8-f619892847ce-hML7Uv9bpjjCSBetURZuIZdBBlNo9r.jpg"
const idCardBackImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0E391TD1We4WI9TwFJDrtk7QcmIKQh.png"

export function IDCard({ isFlipped, onCardClick }: IDCardProps) {
  const { data } = useIDCard()

  return (
    <div className="perspective-1000 relative mx-auto w-full" style={{ aspectRatio: "1.586/1" }}>
      <div
        onClick={onCardClick}
        className="relative h-full w-full transition-transform duration-500 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-xl shadow-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Background Image */}
          <img
            src={idCardFrontImage}
            alt="ID Card Front"
            className="absolute inset-0 w-full h-full object-cover"
            crossOrigin="anonymous"
          />

          {/* Overlay for text display (read-only) */}
          <div className="absolute inset-0 pointer-events-none" style={{ fontFamily: "sans-serif", fontSize: "clamp(8px, 3vw, 10px)" }}>
            {/* Photo area - responsive sizing */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: "2.2%",
                top: "25%",
                width: "23.6%",
                height: "55%",
                borderRadius: "2px"
              }}
            >
              {data.photo ? (
                <img
                  src={data.photo}
                  alt="ID Photo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#d4a574]/30">
                  <span className="text-[clamp(6px,1.8vw,8px)] text-[#1a365d]/50 text-center">Зураг</span>
                </div>
              )}
            </div>

            {/* Family name */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "28%",
                top: "25%",
                width: "35%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.familyName}
            </p>

            {/* Surname */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "28%",
                top: "38%",
                width: "35%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.surname}
            </p>

            {/* Given name */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "28%",
                top: "50%",
                width: "35%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.givenName}
            </p>

            {/* Sex */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "28%",
                top: "62%",
                width: "20%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.sex}
            </p>

            {/* Date of birth */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "28%",
                top: "78%",
                width: "25%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.dateOfBirth}
            </p>

            {/* Civil ID */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "28%",
                top: "90%",
                width: "40%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.civilId}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-xl shadow-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Background Image */}
          <img
            src={idCardBackImage}
            alt="ID Card Back"
            className="absolute inset-0 w-full h-full object-cover"
            crossOrigin="anonymous"
          />

          {/* Overlay for back side display (read-only) */}
          <div className="absolute inset-0 pointer-events-none" style={{ fontFamily: "sans-serif", fontSize: "clamp(8px, 3vw, 10px)" }}>
            {/* Issued Date */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "34%",
                top: "32%",
                width: "30%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.issuedDate}
            </p>

            {/* Expiry Date */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "34%",
                top: "43%",
                width: "30%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.expiryDate}
            </p>

            {/* Address */}
            <p
              className="absolute text-[#1a365d] font-normal truncate"
              style={{
                left: "32%",
                top: "56%",
                width: "50%",
                fontFamily: "sans-serif",
                fontSize: "clamp(8px, 3vw, 10px)",
                lineHeight: "1.2"
              }}
            >
              {data.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
