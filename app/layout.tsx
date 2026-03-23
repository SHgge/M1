import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'E-Mongolia - Цахим Үндэстэн',
  description: 'E-Mongolia Mobile App Demo - Төрийн үйлчилгээ, мэдээллийг нэг дороос',
  generator: 'v0.app',
  icons: {
    icon: '/e-mongolia-icon.png',
    apple: '/e-mongolia-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
