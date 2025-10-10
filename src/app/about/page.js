'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Image Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hussein-headshot.jpeg"
                alt="Mike Yassine - Hussein Ali Yassine"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg">Mike Yassine (Hussein Ali Yassine)</p>
          </div>
        </div>
      )}

      {/* Hero with Profile Image */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 opacity-95"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Profile Image - Clickable FB Style */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl opacity-60"></div>
                <button
                  onClick={() => setShowModal(true)}
                  className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  <Image
                    src="/images/hussein-headshot.jpeg"
                    alt="Mike Yassine - Hussein Ali Yassine"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
                {/* Camera Icon Indicator */}
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/30">
              👔 Business Management & Marketing Leadership
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              About Mike Yassine
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-2">
              <strong className="text-white">Hussein Ali Yassine</strong>
            </p>
            <p className="text-lg text-teal-200 max-w-3xl mx-auto">
              Business Consultant | Marketing Strategist | Former Spirit Advertising Marketing Director
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600 font-medium">Years in Beirut</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Professional Background */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Background</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  <strong>Mike Yassine (Hussein Ali Yassine)</strong> is a seasoned business management consultant with over 12 years of experience 
                  operating in the dynamic markets of <strong>Beirut, Lebanon</strong> and the broader MENA region. His career has been 
                  defined by a commitment to strategic thinking, operational excellence, and driving measurable business outcomes.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Previously serving as <strong className="text-blue-600">Marketing Director at Spirit Advertising</strong>, Hussein developed deep expertise 
                  in brand strategy, market positioning, and creative campaign execution. His work bridged the gap between 
                  creative vision and commercial reality, delivering campaigns that resonated with diverse audiences across 
                  multiple markets in Lebanon and the Middle East.
                </p>
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/business-about.png"
                    alt="Hussein Ali Yassine - Business Consultant"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Excellence Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/images/about/collaborative-approach.png"
                    alt="Hussein Ali Yassine - Beirut Business Leadership"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Management Excellence</h2>
                <p className="text-blue-100 leading-relaxed mb-4 text-lg">
                  Based in <strong className="text-white">Beirut</strong> for over a decade, Hussein has navigated one of the world's most challenging 
                  and resilient business environments. This experience has sharpened his ability to develop 
                  adaptive strategies, manage complexity, and deliver results under pressure.
                </p>
                <p className="text-blue-100 leading-relaxed text-lg">
                  His consulting approach combines analytical rigor with practical implementation, helping 
                  organizations align their marketing, operations, and growth strategies for sustainable success 
                  across Lebanon, GCC markets, and the wider Middle East region.
                </p>
              </div>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Core Philosophy</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Effective business management isn't about following formulas—it's about understanding context, 
                adapting to market realities, and building strategies that work in the real world. <strong>Mike Yassine's</strong> 
                approach is grounded in practical wisdom gained from years of hands-on leadership in one of 
                the region's most dynamic markets.
              </p>
              <div className="inline-block bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl text-left">
                <p className="text-blue-900 font-semibold italic text-lg">
                  "Success comes from understanding local market dynamics while applying global best practices. 
                  It's about being adaptable, resilient, and focused on measurable results."
                </p>
                <p className="text-blue-700 mt-2">— Hussein Ali Yassine</p>
              </div>
            </div>
          </div>

          {/* Areas of Expertise - Beautiful Grid */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive business consulting services developed through 12+ years in Beirut and across the Middle East
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Business Strategy & Management',
                  desc: 'Strategic planning, operational management, business model optimization, and organizational development for growing businesses across Lebanon and MENA.',
                  color: 'blue'
                },
                {
                  icon: '📱',
                  title: 'Marketing & Brand Development',
                  desc: 'Brand strategy, market positioning, campaign development, creative direction, and integrated marketing from Spirit Advertising expertise.',
                  color: 'green'
                },
                {
                  icon: '🌍',
                  title: 'MENA Market Expertise',
                  desc: 'Deep understanding of Lebanese and regional market dynamics, cultural nuances, business practices, and GCC market entry strategies.',
                  color: 'orange'
                },
                {
                  icon: '⚙️',
                  title: 'Operational Excellence',
                  desc: 'Process optimization, cost reduction, efficiency improvement, performance management, and quality systems implementation.',
                  color: 'indigo'
                },
                {
                  icon: '💼',
                  title: 'Crisis Management',
                  desc: 'Brand resilience, business continuity planning, crisis communication, and navigating economic volatility in emerging markets.',
                  color: 'red'
                },
                {
                  icon: '📊',
                  title: 'Digital Transformation',
                  desc: 'Digital strategy, e-commerce development, marketing automation, technology adoption, and digital marketing excellence.',
                  color: 'cyan'
                },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Professional Journey
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    12+
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Beirut, Lebanon</h3>
                  <p className="text-gray-600">Over 12 years of business management and consulting experience in one of the Middle East's most dynamic markets</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    🎯
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Spirit Advertising</h3>
                  <p className="text-gray-600">Marketing Director leading strategic campaigns, brand development, and creative excellence across multiple industries</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    50+
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Consulting Projects</h3>
                  <p className="text-gray-600">Successful delivery of business strategy, marketing, and operational projects across Lebanon, GCC, and MENA region</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA - Beautiful Gradient */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700"></div>
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}></div>
            
            <div className="relative z-10 p-10 md:p-16 text-center text-white">
              <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how strategic management and marketing expertise from Beirut can drive your growth across Lebanon and the Middle East
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}