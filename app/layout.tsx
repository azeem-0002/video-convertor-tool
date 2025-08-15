import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YouTube to MP3 Converter - Free Online YouTube Downloader",
  description:
    "Convert YouTube videos to MP3 or MP4 instantly. Free, fast, and secure YouTube downloader with high-quality 320kbps audio. No registration required.",
  keywords: "youtube to mp3, youtube downloader, youtube converter, mp3 converter, video downloader",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
