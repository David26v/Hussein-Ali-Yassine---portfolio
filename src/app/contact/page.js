import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Mike Yassine | Business Consultant Beirut Lebanon | Hussein Ali Yassine',
  description:
    'Contact Mike Yassine (Hussein Ali Yassine) for business consulting, marketing strategy, and operational excellence services in Beirut, Lebanon and Middle East. Former Spirit Advertising Marketing Director with 12+ years expertise. Schedule a consultation today.',
  keywords: [
    'contact Mike Yassine',
    'Hussein Ali Yassine contact',
    'Hussein Yassine Beirut',
    'business consultant Beirut contact',
    'marketing director Lebanon',
    'Spirit Advertising consultant',
    'business strategy Lebanon',
    'operational excellence consultant Middle East',
    'marketing consultant Beirut',
    'business consulting services Lebanon',
    'strategic planning advisor Middle East',
    'digital transformation consultant Beirut',
  ],
  alternates: {
    canonical: 'https://www.husseinaliyassine.com/contact',
  },
  openGraph: {
    title: 'Contact Mike Yassine - Business Consultant | Hussein Ali Yassine',
    description:
      'Get in touch with Hussein Ali Yassine for business consulting, marketing strategy, and operational excellence services across Lebanon and Middle East.',
    url: 'https://www.husseinaliyassine.com/contact',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'website',
  },
};


const Contact = () => {
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Business Consulting & Strategic Advisory
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Contact Mike Yassine for Business Consulting in Lebanon
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-4">
            <strong>Hussein Ali Yassine</strong> - Business Management Consultant & Former Marketing Director at Spirit Advertising, Beirut
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business strategy, marketing operations, or growth trajectory across the Middle East region? Let's discuss how 12+ years of expertise can help your organization achieve sustainable results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                  <Image 
                    src="/images/hussein-headshot.jpeg" 
                    alt="Mike Yassine - Hussein Ali Yassine Business Consultant Beirut" 
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Schedule a Consultation</h2>
              <p className="text-gray-600 mb-6 text-center">
                Get expert guidance on business strategy, marketing excellence, and operational transformation in Lebanon and the Middle East.
              </p>
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
                    placeholder="Your Name"
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
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                    How Can We Help? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="">Select a service</option>
                    <option value="business-consulting">Business Strategy Consulting</option>
                    <option value="marketing-strategy">Marketing Strategy & Campaigns</option>
                    <option value="operational-excellence">Operational Excellence & Optimization</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="market-entry">Market Entry Strategy (GCC/MENA)</option>
                    <option value="crisis-management">Crisis Management & Brand Recovery</option>
                    <option value="b2b-sales">B2B Sales Enablement</option>
                    <option value="speaking">Speaking Engagement / Workshop</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Tell us about your business challenges, goals, or project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Consultation Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Main Contact Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold mb-5 text-gray-900">Get in Touch with Hussein Yassine</h2>
                <p className="text-gray-700 mb-6">
                  Based in Beirut, Lebanon, <strong>Mike Yassine</strong> works with business leaders, executives, and organizations across the Middle East who are committed to operational excellence, strategic growth, and sustainable competitive advantage.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:contact@husseinali-yassine.com"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      contact@husseinali-yassine.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Beirut, Lebanon</p>
                    <p className="text-sm text-gray-600">Serving Lebanon, GCC, and Middle East markets</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-700">Within 1–2 business days</p>
                  </div>
                </div>
              </div>

              {/* Expertise Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Consulting Services</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Business Strategy & Management Consulting
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Marketing Strategy & Campaign Development
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Operational Excellence & Process Optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Digital Transformation & Technology Strategy
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    GCC Market Entry & Regional Expansion
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    B2B Sales Enablement & Revenue Growth
                  </li>
                </ul>
              </div>

              {/* Speaking Engagements */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Speaking & Workshops</h3>
                <p className="text-gray-700 mb-4">
                  Available for keynotes, panel discussions, and executive workshops on business strategy, marketing excellence, operational transformation, and navigating Middle East markets.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Topics include:</strong> FMCG Strategy, Marketing Leadership, Crisis Management, GCC Market Entry, Digital Transformation, B2B Sales Excellence
                </p>
              </div>

              {/* Social Links */}
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
                      Connect on {link.name}
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Follow Hussein Ali Yassine for insights on business strategy, marketing innovation, and Middle East market trends.
                </p>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-xl">
                <p className="text-emerald-800 text-sm">
                  <strong>Complete Confidentiality.</strong> All business inquiries and consultations are handled with strict confidentiality and professional discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Choose Mike Yassine as Your Business Consultant in Lebanon?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With over 12 years of experience in Beirut and across the Middle East, Hussein Ali Yassine brings proven expertise from Spirit Advertising and numerous successful consulting engagements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Deep Local Expertise</h3>
              <p className="text-gray-700 text-sm">
                12+ years working in Beirut, Lebanon with intimate knowledge of Middle East markets, Lebanese business culture, and regional dynamics across GCC countries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-700 text-sm">
                Former Marketing Director at Spirit Advertising with successful projects spanning FMCG, retail, F&B, technology, and B2B sectors across Lebanon and the Middle East.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Results-Driven Approach</h3>
              <p className="text-gray-700 text-sm">
                Strategic frameworks tailored to Middle East markets delivering measurable ROI, operational improvements, and sustainable competitive advantage for clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;