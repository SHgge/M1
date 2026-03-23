"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

const STORAGE_KEY = "e-mongolia-id-card-data"

export interface IDCardData {
  photo: string | null
  familyName: string
  surname: string
  givenName: string
  sex: string
  dateOfBirth: string
  civilId: string
  // Back side fields
  issuedDate: string
  expiryDate: string
  address: string
  // Profile header
  profileName: string
}

interface IDCardContextType {
  data: IDCardData
  updateData: (newData: Partial<IDCardData>) => void
  setPhoto: (photo: string | null) => void
  clearData: () => void
}

const defaultData: IDCardData = {
  photo: null,
  familyName: "",
  surname: "",
  givenName: "",
  sex: "",
  dateOfBirth: "",
  civilId: "",
  // Back side fields
  issuedDate: "",
  expiryDate: "",
  address: "",
  // Profile header
  profileName: "",
}

const IDCardContext = createContext<IDCardContextType | undefined>(undefined)

export function IDCardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IDCardData>(defaultData)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (savedData) {
        const parsed = JSON.parse(savedData)
        setData(parsed)
      }
    } catch (error) {
      console.error("Failed to load ID card data:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } catch (error) {
        console.error("Failed to save ID card data:", error)
      }
    }
  }, [data, isLoaded])

  const updateData = (newData: Partial<IDCardData>) => {
    setData((prev) => ({ ...prev, ...newData }))
  }

  const setPhoto = (photo: string | null) => {
    setData((prev) => ({ ...prev, photo }))
  }

  const clearData = () => {
    setData(defaultData)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <IDCardContext.Provider value={{ data, updateData, setPhoto, clearData }}>
      {children}
    </IDCardContext.Provider>
  )
}

export function useIDCard() {
  const context = useContext(IDCardContext)
  if (!context) {
    throw new Error("useIDCard must be used within an IDCardProvider")
  }
  return context
}
