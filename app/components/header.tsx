import Link from "next/link"
import { Youtube } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Youtube className="w-8 h-8 text-red-600" />
            <span className="text-gray-900">YouTube to MP3</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/privacy-policy" className="text-gray-700 hover:text-red-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-700 hover:text-red-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/api-access" className="text-gray-700 hover:text-red-600 transition-colors">
              API Access
            </Link>
             <Link
              href="https://freevideodownloader.co"
              target="_blank"
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition-colors"
            >
              Free Video Downloader
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
