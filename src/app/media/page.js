import Link from 'next/link';
import { mediaItems, colorClasses } from '@/data/mediaData';

export const metadata = {
  title: 'Media & Press | Mike Yassine - Hussein Ali Yassine | Business Consultant Beirut Lebanon',
  description:
    'Featured media appearances, interviews, and speaking engagements by Mike Yassine (Hussein Ali Yassine). Business consultant and former Spirit Advertising Marketing Director sharing expertise on business strategy, marketing excellence, operational transformation, and Middle East market insights from Beirut, Lebanon.',
  keywords: [
    'Mike Yassine media',
    'Hussein Ali Yassine press',
    'Hussein Yassine interviews',
    'business consultant Beirut media',
    'marketing director Lebanon press',
    'Spirit Advertising expert',
    'business strategy speaker Lebanon',
    'operational excellence expert Middle East',
    'FMCG consultant interviews',
    'marketing strategy keynote speaker',
    'Beirut business consultant media',
    'Lebanon business expert',
    'Middle East consulting expert',
  ],
  alternates: { canonical: 'https://www.husseinaliyassine.com/media' },
  openGraph: {
    title: 'Media & Press | Mike Yassine - Hussein Ali Yassine',
    description:
      'Thought leadership in business strategy, marketing excellence, and operational transformation from Beirut, Lebanon. Featured in publications and conferences across the Middle East.',
    url: 'https://www.husseinaliyassine.com/media',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Press | Mike Yassine - Hussein Ali Yassine',
    description:
      'Expert insights on business growth, marketing leadership, and operational strategy from Beirut-based consultant Hussein Ali Yassine.',
  },
};

const Media = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 opacity-95"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <nav className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-blue-200">
                <li>
                  <Link href="/" className="hover:text-white transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <span>→</span>
                <li className="text-white font-medium">Media</li>
              </ol>
            </nav>

            <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/30">
              🎯 Thought Leadership & Media Presence
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Media & Press Coverage
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
              Featured interviews, keynote speeches, and expert commentary by <strong className="text-white">Mike Yassine (Hussein Ali Yassine)</strong>
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
              12+ years of expertise from Beirut, Lebanon • Former Marketing Director at Spirit Advertising
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Media Features</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Keynote Speeches</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">12+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600 font-medium">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Media List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured Media Appearances
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore Hussein Yassine's contributions to business publications, conferences, and media outlets across Lebanon and the Middle East
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                itemScope
                itemType="https://schema.org/NewsArticle"
              >
                <div className={`bg-gradient-to-r ${colorClasses[item.color]} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-8xl opacity-10 transform rotate-12">
                    {item.icon}
                  </div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold leading-tight" itemProp="headline">
                    {item.title}
                  </h3>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <time dateTime={new Date(item.date).toISOString()} itemProp="datePublished">
                      {item.date}
                    </time>
                    <span className="mx-2">•</span>
                    <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                      <span itemProp="name">{item.publication}</span>
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6" itemProp="description">
                    {item.description}
                  </p>
                  
                  <Link
                    href={`/media/${item.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 group-hover:gap-3 gap-2 transition-all"
                    aria-label={`Read more about ${item.title}`}
                  >
                    <span>View Full Coverage</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Topics */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Speaking & Media Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mike Yassine provides expert commentary and thought leadership based on 12+ years of experience in Beirut and across the Middle East
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Business Strategy', desc: 'Strategic planning, competitive positioning, market analysis, business model innovation, and growth strategies for Middle East markets.' },
              { icon: '📱', title: 'Marketing Excellence', desc: 'Integrated marketing campaigns, brand development, digital marketing, advertising strategy, and marketing leadership from Spirit Advertising experience.' },
              { icon: '⚙️', title: 'Operational Transformation', desc: 'Process optimization, cost reduction, efficiency improvement, performance management, and operational excellence frameworks.' },
              { icon: '🌍', title: 'GCC Market Entry', desc: 'Market entry strategies, competitive analysis, localization, distribution channels, and expansion planning for Saudi Arabia, UAE, Qatar markets.' },
              { icon: '🛡️', title: 'Crisis Management', desc: 'Brand resilience, business continuity, crisis communication, value repositioning, and navigating economic volatility in emerging markets.' },
              { icon: '💼', title: 'B2B Sales & Revenue', desc: 'Sales enablement, CRM optimization, consultative selling, revenue growth strategies, and B2B relationship management in MENA markets.' },
            ].map((topic, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{topic.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Media Inquiries & Speaking Engagements
          </h2>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">Hussein Ali Yassine</strong> is available for interviews, podcast features, panel discussions, keynote speaking, and expert commentary on business consulting, marketing strategy, operational excellence, and Middle East market dynamics.
          </p>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto">
            Topics include: Business Strategy • Marketing Leadership • Crisis Management • Digital Transformation • Operational Excellence • Market Entry • B2B Sales Enablement
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact for Media Opportunities
          </Link>
        </div>
      </section>

      {/* SEO Footer Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block p-3 bg-blue-600/20 rounded-2xl mb-6">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              About Mike Yassine - Business Consultant & Marketing Expert
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-white">Mike Yassine (Hussein Ali Yassine)</strong> is a business management consultant and marketing strategist based in Beirut, Lebanon with over 12 years of professional experience. As former Marketing Director at Spirit Advertising, Hussein Yassine has developed and executed comprehensive marketing campaigns, business strategies, and operational transformations for clients across Lebanon, GCC countries, and the wider Middle East region. His expertise spans business consulting, strategic planning, marketing excellence, operational optimization, digital transformation, crisis management, market entry strategies, and B2B sales enablement. Hussein Ali Yassine regularly shares insights through media interviews, conference keynotes, workshops, and expert commentary on business growth, FMCG strategy, marketing leadership, and navigating Middle Eastern markets.
            </p>
          </div>
        </div>
      </section>
    </div>
);

export default Media;
