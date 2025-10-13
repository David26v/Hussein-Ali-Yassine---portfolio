import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Mike Yassine | Hussein Ali Yassine</h3>
            <p className="text-gray-400 mb-4">
              Business Management Consultant & Marketing Strategist based in Beirut, Lebanon. 
              Former Marketing Director at Spirit Advertising with 12+ years of expertise in 
              strategic planning, operational excellence, digital transformation, and business 
              development across the Middle East region.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Specializing in: Business Strategy | Marketing Leadership | Operational Excellence | 
              Market Entry | Crisis Management | B2B Sales | Brand Development
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Business Consulting</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Marketing Strategy</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Operational Excellence</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Market Entry Strategy</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Brand Development</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">B2B Sales Enablement</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Hussein Yassine</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Case Studies & Projects</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Business Insights Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact & Consultation</Link></li>
            </ul>
            
            <h4 className="font-semibold mb-4 mt-6">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.linkedin.com/in/hussein-ali-yassine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a 
                  href="https://about.me/husseinaliyassine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About.me Profile
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mike@husseinaliyassine.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/themikeyassine/" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  instagram Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations & Expertise */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h5 className="font-semibold mb-2 text-sm">Location</h5>
              <p className="text-gray-400 text-sm">
                Beirut, Lebanon | Serving Middle East & GCC Markets
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-sm">Industries</h5>
              <p className="text-gray-400 text-sm">
                FMCG, Retail, F&B, Technology, Manufacturing, B2B Services
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-sm">Experience</h5>
              <p className="text-gray-400 text-sm">
                12+ Years | Former Spirit Advertising Marketing Director
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & SEO Footer Text */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-400 text-sm mb-3">
              <strong>Mike Yassine (Hussein Ali Yassine)</strong> - Business Consultant Beirut | 
              Marketing Director Lebanon | Strategic Planning Expert | Operational Excellence Consultant | 
              Digital Transformation Advisor | Middle East Business Strategy
            </p>
            <p className="text-gray-500 text-xs">
              Providing business consulting, marketing strategy, and operational excellence services 
              across Lebanon, Saudi Arabia, UAE, Qatar, Jordan, and the wider Middle East region. 
              Specializing in market entry, brand development, crisis management, and revenue growth strategies.
            </p>
          </div>
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} Hussein Ali Yassine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
