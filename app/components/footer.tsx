import Link from "next/link"
import { Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Youtube className="w-8 h-8 text-red-600" />
              <span>YouTube to MP3</span>
            </div>
            <p className="text-gray-400">
              Fast, free, and secure YouTube to MP3/MP4 converter. No registration required.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/api-access" className="text-gray-400 hover:text-white transition-colors">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="https://freevideodownloader.co" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              Free Video Downloader
            </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>YouTube to MP3</li>
              <li>YouTube to MP4</li>
              <li>High Quality Downloads</li>
              <li>No Registration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <p className="text-gray-400">Email: yt2mp3official@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 YouTube to MP3 Converter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
