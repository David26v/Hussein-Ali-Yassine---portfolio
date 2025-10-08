import Link from 'next/link';

export const metadata = {
  title: 'Contact Hussein Ali Yassine | Strategic Business Consultant',
  description:
    'Reach out to Hussein Ali Yassine for FMCG strategy, operational excellence consulting, or keynote speaking engagements. Schedule a consultation today.',
  keywords: [
    'contact business consultant',
    'Hussein Ali Yassine contact',
    'FMCG strategy advisor Australia',
    'operational excellence consultant',
    'book business speaker',
  ],
  alternates: {
    canonical: 'https://husseinali-yassine.com/contact', // ✅ Fixed: no trailing spaces
  },
  openGraph: {
    title: 'Contact Hussein Ali Yassine',
    description: 'Professional inquiries for consulting, advisory, and speaking engagements.',
    url: 'https://husseinali-yassine.com/contact',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'website',
  },
};

const Contact = () => {
  // Note: Medium & Twitter profiles appear inactive (404/private). Only show LinkedIn.
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hussein-ali-yassine',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    // Removed Medium & Twitter due to 404/private errors
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Professional Inquiries Only
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Let’s Build Something Remarkable
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to transform your business strategy, operations, or growth trajectory? I’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Form — Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-no-repeat bg-[right_1.2rem_center] bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%236b7280%22%3e%3cpath d=%22M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4l1.29 1.3L15.3 9.3z%22/%3e%3c/svg%3e')]"
                  >
                    <option value="">Select a topic</option>
                    <option value="consulting">Consulting Inquiry</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Tell me about your goals, challenges, or project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info — Visually Rich */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold mb-5 text-gray-900">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                  I work with executives and leadership teams who are serious about growth, operational discipline, and sustainable competitive advantage.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:contact@husseinali-yassine.com"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      contact@husseinali-yassine.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-700">Within 1–2 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Speaking Engagements</h3>
                <p className="text-gray-700 mb-4">
                  Available for keynotes, panels, and workshops on FMCG strategy, revenue growth, and operational transformation.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Please include event date, audience profile, and preferred topics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Connect Professionally</h3>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 group transition-colors"
                    >
                      <span className="mr-3 text-blue-500 group-hover:text-blue-700 transition-colors">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Note: Professional presence maintained on LinkedIn only.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-xl">
                <p className="text-emerald-800">
                  <strong>Confidentiality assured.</strong> All inquiries are treated with the highest level of discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;