export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Cruz Financial Services</h1>
        <a
          href="mailto:inez@cruisefinancialservices.com"
          className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Contact Us
        </a>
      </header>

      {/* Hero Section with Logo Image Background Fix */}
      <section className="relative text-center py-24 px-6 text-white overflow-hidden">
        {/* Background image (more reliable rendering method) */}
        <img
          src="/logo.png"
          alt="Cruz Financial Services Logo Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            Trusted Tax & Financial Services You Can Rely On
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            We help individuals and small businesses stay organized, compliant, and financially confident. Personalized support with professional care.
          </p>
          <div className="mt-6">
            <a
              href="mailto:inez@cruisefinancialservices.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Services</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl">
            <h4 className="font-bold mb-2">Tax Preparation Support</h4>
            <p className="text-sm text-gray-600">
              Help with organizing and preparing your tax documents accurately.
            </p>
          </div>
          <div className="p-6 border rounded-xl">
            <h4 className="font-bold mb-2">Bookkeeping Assistance</h4>
            <p className="text-sm text-gray-600">
              Keep your finances organized and ready for reporting.
            </p>
          </div>
          <div className="p-6 border rounded-xl">
            <h4 className="font-bold mb-2">Business Setup Guidance</h4>
            <p className="text-sm text-gray-600">
              Help getting your business structure and systems in place.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">About</h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          Cruz Financial Services is dedicated to helping clients stay financially organized
          and confident. We focus on clarity, reliability, and personalized support for every client.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="text-gray-600 mb-6">
          Ready to get started? Reach out today.
        </p>
        <a
          href="mailto:inez@cruisefinancialservices.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Cruz Financial Services. All rights reserved.
      </footer>
    </div>
  );
}
