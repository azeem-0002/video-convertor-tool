"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download, Music, Video, Loader2, CheckCircle, AlertCircle,
  ChevronDown,  // ✅ Added for FAQ accordion
  ChevronUp     // ✅ Added for FAQ accordion
} from "lucide-react"
import Image from "next/image"
import Header from "./components/header"
import Footer from "./components/footer"
import Head from "next/head"

interface ConversionResult {
  title: string
  thumbnail: string
  author: string
  mp3: string
  mp4: string
}

const faqs = [
  {
    question: "Which process is adopted to convert a YouTube video to MP3 on my phone?",
    answer:
      " You can convert or change  a YouTube video to MP3 on your phone using our browser-based tool. in which you have to Just paste the video link, choose MP3 as your format and download directly to your Android or iPhone in which no app installs needed. It works with single videos, playlists, and even YouTube Shorts.",
  },
  {
    question: "By whom can we download YouTube music in high quality?",
    answer:
      "For the best sound you have to choose 320kbps MP3 while converting it because  this bitrate keeps the full richness of the original audio, avoiding the flat, compressed sound you get from low-quality converters. Our tool lets you adjust quality before downloading so you control file size and clarity..",
  },
  {
    question: "Can I save audio from YouTube without downloading the video?",
    answer:
      "Yes without any tension you can extract just the audio by selecting MP3 as your format as This is considered as ideal for music, podcasts, or lectures when you don’t need the full video file. It is used to protect the  storage space that makes playback faster on any device.",
  },
  {
    question: "Give the process of possibilities to convert YouTube playlists to MP3 in one go?",
    answer:
      "Our playlist has  features that  lets you convert an entire YouTube playlist to MP3 with one click. It’s perfect for turning albums, podcast series or study materials into offline files you can listen to anytime that is purely for the sake of easiness.",
    },
  {
    question: "Does your YouTube to MP3 converter work on iPhone and iPad?",
    answer:
      "Yes — the tool works directly in Safari or any mobile browser on iOS. You don’t need to install anything; just paste your link, choose your format, and download. Files can be saved to your device or shared to cloud storage.",
  },
  {
    question: "How do I download audio from a YouTube Shorts video?",
    answer:
      " Paste the YouTube Shorts link into the converter, select MP3, and hit download. You’ll get just the audio from the short clip that is considered as great for saving sound bites, remixes, or quick voice snippets.",
  },
  {
    question: "Can I use this YouTube converter without seeing ads?",
    answer:
      "Absolutely. The converter runs without pop-ups or banner ads. You can focus on getting your file without clicking through unnecessary pages or dealing with interruptions.",
  },
  {
    question: "Is there a limit on video length when converting to MP3?",
    answer:
      "You can convert videos up to two hours long. This makes it easy to save full DJ sets, webinars, or long interviews without splitting them into multiple parts.",
  },
  {
    question: "By whom I make sure the MP3 download keeps the original sound quality?",
    answer:
      "You have to choose the highest available bitrate before downloading that is fixed at 320kbps is the sweet spot for preserving depth and clarity. Our tool processes the file without adding compression artifacts, so the sound stays true to the source.",
  },
  {
    question: "Can I download YouTube audio directly to my computer?",
    answer:
      "Yes — paste the YouTube link into the converter from any desktop browser, pick MP3, and save the file straight to your PC or Mac.You can also choose MP4 if you want the full video.",
  },
];

export default function HomePage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [error, setError] = useState("")

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleConvert = async () => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL")
      return
    }

    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      setError("Please enter a valid YouTube URL")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (data.success) {
        setResult(data.data)
      } else {
        setError(data.error || "Conversion failed. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = (downloadUrl: string, filename: string) => {
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = filename
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://yt2mp3cnv.com/#website",
                "url": "https://yt2mp3cnv.com/",
                "name": "YT2MP3 Converter",
                "description": "Convert YouTube videos to MP3 or MP4 instantly. Free, fast, safe, and works on all devices.",
                "publisher": {
                  "@type": "Organization",
                  "name": "YT2MP3 Converter",
                  "url": "https://yt2mp3cnv.com/"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://yt2mp3cnv.com/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://yt2mp3cnv.com/"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://yt2mp3cnv.com/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which process is adopted to convert a YouTube video to MP3 on my phone?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can convert or change a YouTube video to MP3 on your phone using our browser-based tool. in which you have to Just paste the video link, choose MP3 as your format and download directly to your Android or iPhone in which no app installs needed. It works with single videos, playlists, and even YouTube Shorts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "By whom can we download YouTube music in high quality?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For the best sound you have to choose 320kbps MP3 while converting it because this bitrate keeps the full richness of the original audio, avoiding the flat, compressed sound you get from low-quality converters. Our tool lets you adjust quality before downloading so you control file size and clarity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I save audio from YouTube without downloading the video?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes without any tension you can extract just the audio by selecting MP3 as your format as This is considered as ideal for music, podcasts, or lectures when you don’t need the full video file. It is used to protect the storage space that makes playback faster on any device."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Give the process of possibilities to convert YouTube playlists to MP3 in one go?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our playlist has features that lets you convert an entire YouTube playlist to MP3 with one click. It’s perfect for turning albums, podcast series or study materials into offline files you can listen to anytime that is purely for the sake of ease."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does your YouTube to MP3 converter work on iPhone and iPad?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — the tool works directly in Safari or any mobile browser on iOS. You don’t need to install anything; just paste your link, choose your format, and download. Files can be saved to your device or shared to cloud storage."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I download audio from a YouTube Shorts video?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Paste the YouTube Shorts link into the converter, select MP3, and hit download. You’ll get just the audio from the short clip that is considered as great for saving sound bites, remixes, or quick voice snippets."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use this YouTube converter without seeing ads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The converter runs without pop-ups or banner ads. You can focus on getting your file without clicking through unnecessary pages or dealing with interruptions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is there a limit on video length when converting to MP3?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can convert videos up to two hours long. This makes it easy to save full DJ sets, webinars, or long interviews without splitting them into multiple parts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "By whom do I make sure the MP3 download keeps the original sound quality?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You have to choose the highest available bitrate before downloading, which is fixed at 320kbps is the sweet spot for preserving depth and clarity. Our tool processes the file without adding compression artifacts, so the sound stays true to the source."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I download YouTube audio directly to my computer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — paste the YouTube link into the converter from any desktop browser, pick MP3, and save the file straight to your PC or Mac.You can also choose MP4 if you want the full video."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Convert YouTube Videos to MP3 Instantly
            </h1>
            <p className="text-xl text-gray-600 mb-2">100% Free & No Registration Required</p>
            <p className="text-lg text-gray-500">
              Download high-quality 320kbps MP3 audio or MP4 videos from YouTube, playlists, and Shorts
            </p>
          </div>

          {/* Converter Tool */}
          <Card className="mb-12 shadow-lg border-2 border-red-100">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input
                  type="url"
                  placeholder="Paste YouTube URL here (youtube.com or youtu.be)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-red-500"
                  disabled={loading}
                />
                <Button
                  onClick={handleConvert}
                  disabled={loading || !url.trim()}
                  className="h-12 px-8 bg-red-600 hover:bg-red-700 text-white font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Convert
                    </>
                  )}
                </Button>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {result && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">Conversion Complete!</span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={result.thumbnail || "/placeholder.svg"}
                        alt={result.title || "YouTube video thumbnail"}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{result.title}</h3>
                      <p className="text-gray-600 mb-4">By {result.author}</p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={() => handleDownload(result.mp3, `${result.title}.mp3`)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Music className="w-4 h-4 mr-2" />
                          Download MP3
                        </Button>
                        <Button
                          onClick={() => handleDownload(result.mp4, `${result.title}.mp4`)}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Download MP4
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">YouTube to MP3/MP4</h3>
              <p className="text-sm text-gray-600">Extract audio or download full videos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Music className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">320kbps HD Quality</h3>
              <p className="text-sm text-gray-600">Superior to y2mate, ytmp3 and other converters</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm text-gray-600">No watermarks, viruses, or hidden fees</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">All Devices</h3>
              <p className="text-sm text-gray-600">Works on PC, Mac, Android, and iPhone</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Paste YouTube URL</h3>
              <p className="text-gray-600">Works with youtube.com, youtu.be and YouTube Shorts links</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Choose Format</h3>
              <p className="text-gray-600">Select MP3 (audio) or MP4 (video)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-gray-600">Save files to any device</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
            <div className="prose prose-lg max-w-none text-justify">
              <h2 className="text-3xl font-bold mb-8">
                Download & Conversion Guide — what you can do
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you’ve ever searched for ways to{" "}
                <a
                  href="https://freevideodownloader.co/youtube-video-downloader"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  download YouTube videos
                </a>{" "}
                or convert YouTube to audio, you’ve probably noticed most tools are either slow,
                ad-heavy or sketchy. This one’s different. It’s a full-featured YouTube audio
                downloader, MP3 juice download alternative and video to MP3 converter rolled into
                a single, browser-based tool. No installs. No accounts. No hidden catches.
                Think of it as a modern SaveFrom-style solution, but faster and with cleaner results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                You can use it like a YouTube audio extractor to save live
                concerts, DJ sets, podcasts or lectures as crystal clear audio.
                Or treat it like a ClipConverter replacement to quickly grab
                entire videos. Want only the music? Switch formats instantly
                with the MP4 to MP3 converter or convert video to MP3 to keep
                file sizes small without losing sound quality. For pure
                listening, it doubles as a free MP3 music download service —
                perfect for building an offline library of trending singles,
                rare live tracks or custom playlists.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                It’s not just for music lovers. Students use it to capture
                lectures for easy replay. Creators use it to store voiceovers
                and background music. Travelers download playlists for the road.
                And because it supports both YouTube to audio conversions and
                high-definition MP4, you can choose the exact format you need —
                whether that’s sound only for your phone or full video for a
                bigger screen.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The workflow stays very simple: paste your video link , choose
                MP3 or MP4 and click the download button. Behind the scenes, the
                tool processes your video file in seconds and delivers a clean,
                ready to use result — no compression artifacts, no watermarks
                and no waiting around. It works on PC, Mac, Android and iOS, so
                you can download MP3 from YouTube on any device you have handy.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike some free MP3 converters that crush audio quality to save
                space, ours preserves the depth and clarity you expect from
                high-bitrate files. That’s why it’s a favorite for anyone who
                wants the convenience of downloading YouTube music without
                sacrificing how it sounds. Whether you’re pulling a soundtrack
                from a film review, saving an interview or turning an entire
                album into portable tracks, it’s built for speed, safety and
                consistent quality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-0">
                You can also think of it as your personal YouTube sound
                downloader — ideal for grabbing instrumental versions, remixes
                or any background audio you want to loop while working. The
                versatility means you are not locked into one format or one type
                of content. From rare archives to fresh uploads, from MP3 to
                MP4, this tool adapts to your needs and keeps the process
                frustration free.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed mb-0">
                No matter how you use it. as a YouTube to MP3 downloader, a
                video to audio converter or a download YouTube music shortcut.
                The goal stays the same: give you fast results you can trust,
                with files that sound just as good offline as they did when you
                found them.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                {/* Toggle Button */}
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Expanded Answer */}
                {openFAQ === index && (
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
