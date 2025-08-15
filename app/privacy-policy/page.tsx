import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Effective Date: August 15, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold text-gray-800">1. Introduction</h3>
            <p>
              At YouTube to MP3 Converter, your privacy matters. This policy explains in simple terms what information we
              collect (and don't), how we use it, and what control you have. It applies to everyone who visits or uses our
              website.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">
              2. Personal Information We Do Not Collect
            </h3>
            <p>
              We do not collect any personally identifiable information (PII) — no names, emails, phone numbers, or
              accounts. You can browse and use our site without handing over personal details.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">
              3. Automatically Collected Non-Personal Information
            </h3>
            <p>We may collect anonymous info such as:</p>
            <ul className="list-disc pl-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type (mobile, desktop, tablet)</li>
              <li>Referrer page</li>
              <li>Pages visited & timestamps</li>
            </ul>
            <p>Used for:</p>
            <ul className="list-disc pl-6">
              <li>Monitoring performance</li>
              <li>Fixing bugs & preventing abuse</li>
              <li>Improving site speed and stability</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">4. Cookies</h3>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6">
              <li>Help the site load faster</li>
              <li>Understand visitor interaction (analytics)</li>
              <li>Serve relevant ads</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">
              5. Third-Party Services
            </h3>
            <p>We use trusted third-party services like:</p>
            <ul className="list-disc pl-6">
              <li>Google Analytics</li>
              <li>Google AdSense</li>
              <li>Cloudflare</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">6. External Links</h3>
            <p>
              External websites have their own privacy policies. Always check them separately.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">7. Children's Privacy</h3>
            <p>
              We do not knowingly collect data from children under 13. Contact us if you believe otherwise.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">8. GDPR & CCPA Rights</h3>
            <ul className="list-disc pl-6">
              <li>Access your data</li>
              <li>Request deletion</li>
              <li>Opt out of personalized ads</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">9. Data Security</h3>
            <ul className="list-disc pl-6">
              <li>Regular updates & patches</li>
              <li>Encryption where applicable</li>
              <li>Monitoring for suspicious activity</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800">10. Changes</h3>
            <p>We may update this policy. The latest version will always be here.</p>

            <h3 className="text-2xl font-semibold text-gray-800">11. Contact Us</h3>
            <p>Email: <a href="mailto:yt2mp3official@gmail.com" className="text-blue-600">yt2mp3official@gmail.com</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
