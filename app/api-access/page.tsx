import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Key, Zap, Shield } from "lucide-react"
import Head from "next/head"

export default function ApiAccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RLH717E08C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RLH717E08C');
            `,
          }}
        />
      </Head>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">API Access</h1>
          <p className="text-xl text-gray-600">Integrate YouTube to MP3/MP4 conversion into your applications</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Fast Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Lightning-fast video processing with optimized servers worldwide for minimal latency.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Secure & Reliable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee and robust error handling.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                Easy Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Simple REST API with comprehensive documentation and code examples in multiple languages.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoint</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">POST https://api.freevideodownloader.co/api/youtube</code>
              </div>

              <h4 className="font-semibold mb-2">Headers</h4>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  Content-Type: application/json
                  <br />
                  x-api-key: YOUR_API_KEY
                </code>
              </div>

              <h4 className="font-semibold mb-2">Request Body</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <code className="text-sm">
                  {`{
  "url": "https://youtu.be/BwUDJ3M2XOY"
}`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Format</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-lg text-sm">
                <code>
                  {`{
  "success": true,
  "statusCode": 200,
  "data": {
    "title": "Video Title",
    "thumbnail": "https://...",
    "author": "Channel Name",
    "mp3": "https://download-url.mp3",
    "mp4": "https://download-url.mp4"
  }
}`}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-red-600" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Get Your API Key</h4>
                <p className="text-gray-600">
                  Contact us at{" "}
                  <a href="mailto:yt2mp3official@gmail.com" className="text-red-600 hover:underline">
                    yt2mp3official@gmail.com
                  </a>{" "}
                  to request your API key.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Rate Limits</h4>
                <div className="flex gap-2 mb-2">
                  <Badge variant="outline">Free Tier: 100 requests/day</Badge>
                  <Badge variant="outline">Pro Tier: 10,000 requests/day</Badge>
                  <Badge variant="outline">Enterprise: Unlimited</Badge>
                </div>
                <p className="text-gray-600">Rate limits are applied per API key. Contact us for higher limits.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Supported Formats</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• YouTube videos (youtube.com, youtu.be)</li>
                  <li>• YouTube Shorts</li>
                  <li>• YouTube playlists (individual videos)</li>
                  <li>• Output formats: MP3 (320kbps), MP4 (various qualities)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Error Handling</h4>
                <p className="text-gray-600">
                  The API returns appropriate HTTP status codes and error messages. Always check the{" "}
                  <code className="bg-gray-100 px-1 rounded">success</code> field in the response.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact our team to get your API key and start integrating YouTube conversion into your application.
          </p>
          <a
            href="mailto:yt2mp3official@gmail.com"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Request API Access
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
