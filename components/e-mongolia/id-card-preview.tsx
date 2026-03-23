"use client"

import { useIDCard } from "./id-card-context"

interface IDCardPreviewProps {
  onClick?: () => void
}

// Original ID card image
const idCardFrontImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a92a56d0-b9aa-47c1-bab8-f619892847ce-hML7Uv9bpjjCSBetURZuIZdBBlNo9r.jpg"

export function IDCardPreview({ onClick }: IDCardPreviewProps) {
  const { data } = useIDCard()

  return (
    <div
      className="relative w-full cursor-pointer rounded-xl overflow-hidden shadow-lg"
      onClick={onClick}
      style={{ aspectRatio: "1.586/1" }}
    >
      {/* Background Image */}
      <img
        src={idCardFrontImage}
        alt="ID Card"
        className="absolute inset-0 w-full h-full object-cover"
        crossOrigin="anonymous"
        draggable={false}
      />

      {/* Overlay for data display */}
      <div className="absolute inset-0 pointer-events-none" style={{ fontFamily: "sans-serif", fontSize: "clamp(10px, 3vw, 13px)" }}>
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
          {data.photo && (
            <img
              src={data.photo}
              alt="ID Photo"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Family name */}
        <p
          className="absolute text-[#1a365d] font-normal truncate"
          style={{
            left: "28%",
            top: "25%",
            width: "35%",
            fontSize: "clamp(10px, 3vw, 13px)",
            fontFamily: "sans-serif",
            lineHeight: "1"
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
            fontSize: "clamp(10px, 3vw, 13px)",
            fontFamily: "sans-serif",
            lineHeight: "1"
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
            fontSize: "clamp(10px, 3vw, 13px)",
            fontFamily: "sans-serif",
            lineHeight: "1"
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
            fontSize: "clamp(10px, 3vw, 13px)",
            fontFamily: "sans-serif",
            lineHeight: "1"
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
            fontSize: "clamp(10px, 3vw, 13px)",
            fontFamily: "sans-serif",
            lineHeight: "1"
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
            fontSize: "clamp(10px, 3vw, 13px)",
            fontFamily: "sans-serif",
            lineHeight: "1"
          }}
        >
          {data.civilId}
        </p>
      </div>
    </div>
  )
}
