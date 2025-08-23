import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "YouTube to MP3 Converter - Fast & Free | YT2MP3CNV",
  description:
    "Convert YouTube videos to high-quality 320kbps MP3 or MP4 instantly. Free, no ads, and works on all devices including iPhone, Android, PC, and Mac.",
  keywords:
    "YouTube to MP3, YouTube MP3 converter, MP3 downloader, YT to MP3, online MP3 converter, free MP3 download, convert YouTube audio, fast MP3 conversion, YouTube songs to MP3, download music from YouTube, YouTube audio converter, YT2MP3CNV",
  authors: [{ name: "Yt2Mp3Cnv" }],
  robots: "index, follow",
  verification: {
    google: "2oF1wYXzTWUwmwCDX3OVriiAA29mxyXFGKb2grDo_bw", // ✅ Search Console verification
  },
  // openGraph: {
  //   title: "YouTube to MP3 Converter - Free & High Quality",
  //   description:
  //     "Instantly convert YouTube videos to MP3 or MP4 with no ads. Download high-quality audio or video on any device.",
  //   type: "website",
  //   url: "https://yt2mp3cnv.com",
  //   siteName: "YT2MP3CNV",
  //   images: [
  //     {
  //       url: "https://yt2mp3cnv.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "YouTube to MP3 Converter preview",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "YouTube to MP3 Converter - Free & High Quality",
  //   description:
  //     "Instantly convert YouTube videos to MP3 or MP4 with no ads. Download high-quality audio or video on any device.",
  //   images: ["https://yt2mp3cnv.com/twitter-image.jpg"],
  // },
  alternates: {
    canonical: "https://yt2mp3cnv.com",
  },
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
