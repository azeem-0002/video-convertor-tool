import Header from "../components/header";
import Footer from "../components/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Terms of Service
            </h1>
            <p className="text-gray-500 mb-10">Effective Date: August 5, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                Welcome to YouTube to MP3 Converter/Downloader. By accessing or
                using our website and services, you must agree to be bound by
                these Terms of Use ("Terms"). If you disagree with any part of
                these Terms, please stop using our services immediately.
              </p>
              <p>
                By using our services, you confirm that you accept and will
                comply with these Terms and all applicable laws and
                regulations. These Terms apply to all visitors, users, and
                others accessing or using the service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                2. Your Responsibilities
              </h2>
              <p>
                You alone are responsible for any content that you want to
                upload, convert, or download through our service. You must:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Have all necessary rights and permissions to use any content
                  that you want to upload or convert.
                </li>
                <li>
                  Not use the service for illegal, unauthorized, or infringing
                  activities, including copyright violations.
                </li>
                <li>
                  Comply with all relevant local, national, and international
                  laws related to your use of the service.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                3. Prohibited Conduct
              </h2>
              <p>You must agree not to:</p>
              <ul className="list-disc pl-6">
                <li>
                  Upload or distribute unlawful, harmful, threatening, abusive,
                  defamatory, obscene, or otherwise objectionable content that
                  is prohibited.
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or disrupt
                  the service.
                </li>
                <li>
                  Use the service in ways that could damage, disable, or impair
                  our website or interfere with other users' access.
                </li>
                <li>
                  Violate others' intellectual property or privacy rights.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                4. Intellectual Property Rights
              </h2>
              <p>
                All materials on this website—including text, graphics, logos,
                software, and code—are owned or licensed by YouTube to MP3
                Converter/Downloader and protected by copyright and other laws.
              </p>
              <p>You may:</p>
              <ul className="list-disc pl-6">
                <li>
                  View and download content from the website for personal or
                  non-commercial use only.
                </li>
              </ul>
              <p>You may not:</p>
              <ul className="list-disc pl-6">
                <li>
                  Copy, reproduce, distribute, publish, display, modify, create
                  derivative works from, or sell any materials without prior
                  written consent of the authority.
                </li>
              </ul>
              <p>For content you upload:</p>
              <p>
                In order to retain ownership and grant us a limited,
                non-exclusive, royalty-free license to use, you have to
                reproduce and distribute it solely to provide the conversion
                services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                5. Content Accuracy and Service Availability
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  We strive to maintain uninterrupted service but do not
                  guarantee error-free or continuous access.
                </li>
                <li>
                  We do not assure or guarantee the accuracy, reliability, or
                  legality of any content that is converted or downloaded.
                  Using the service is at your own risk.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                6. Copyright Infringement and DMCA Compliance
              </h2>
              <p>
                We respect intellectual property rights. If you believe that
                your copyrighted work has been used without authorization,
                please contact us immediately at{" "}
                <span className="font-medium">
                  legal@youtubetomp3.com
                </span>{" "}
                with:
              </p>
              <ul className="list-disc pl-6">
                <li>A description of the copyrighted work.</li>
                <li>URLs where the infringing content is located.</li>
                <li>Your contact information.</li>
                <li>
                  A statement that you have a good-faith belief of unauthorized
                  use.
                </li>
                <li>
                  A statement under penalty of perjury that the information is
                  accurate.
                </li>
              </ul>
              <p>
                We will review and take appropriate action, which may include
                removing or disabling access to the infringing content.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                7. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Our service is provided "as is" and "as available," without
                  warranties of any kind.
                </li>
                <li>
                  We are not liable for any damages or losses arising from your
                  use or inability to use the service, including indirect or
                  consequential damages.
                </li>
                <li>
                  We do not guarantee the legality or safety of content that is
                  converted or downloaded.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                8. Third-Party Links
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Our site may link to third-party websites or services. We do
                  not control these sites and are not responsible for their
                  content, privacy practices, or actions.
                </li>
                <li>
                  Using third-party services or following links is at your own
                  risk.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                9. Changes to Terms
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  We may update these Terms at any time without prior notice.
                  Changes take effect immediately upon posting.
                </li>
                <li>
                  Continuing to use the service after changes means you accept
                  the revised Terms.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                10. Governing Law and Dispute Resolution
              </h2>
              <ul className="list-disc pl-6">
                <li>These Terms are governed by the laws of Pakistan.</li>
                <li>
                  Any disputes arising from your use of the service fall under
                  the exclusive jurisdiction of courts located in Pakistan.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                11. Contact Us
              </h2>
              <p>
                For questions or concerns, contact us at{" "}
                <span className="font-medium">
                  yt2mp3official@gmail.com
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
