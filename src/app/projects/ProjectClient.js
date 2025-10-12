import React from 'react'
import Card from '@/components/Card'
import { projects } from '@/data/ProjectData';

const ProjectClient = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              📊 Portfolio & Case Studies
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            Business Consulting Projects & Marketing Case Studies
          </h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              <strong className="text-emerald-100">Mike Yassine (Hussein Ali Yassine)</strong>, Distinguished Business Management Consultant and former Marketing Director at Spirit Advertising in Beirut, Lebanon, brings over 12 years of proven expertise in strategic business consulting, marketing leadership, and operational excellence.
            </p>
            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed">
              Based in Beirut with extensive Middle East market knowledge, Hussein Yassine has partnered with organizations across industries to deliver measurable business results through strategic planning, marketing innovation, and business transformation across Lebanon and the MENA region.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-emerald-100 text-sm md:text-base">Successful Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-emerald-100 text-sm md:text-base">Industries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">12+</div>
              <div className="text-emerald-100 text-sm md:text-base">Years in Beirut</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-md">
              🎯 Portfolio Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Featured Projects & Case Studies
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore how Mike Yassine has helped businesses in Lebanon and across the Middle East achieve transformative growth through strategic consulting, marketing excellence, and business management expertise. Each project represents a partnership built on trust, innovation, and measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={project.id} className="group transform transition-all duration-300 hover:-translate-y-2">
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  link={project.link}
                />
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Want to learn more about these transformative projects?
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section - Redesigned */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-bold mb-6 shadow-md">
              💼 Comprehensive Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Business Consulting & Marketing Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hussein Ali Yassine combines business management acumen with marketing leadership experience from Spirit Advertising to deliver comprehensive consulting solutions that drive sustainable growth across Lebanese and Middle East markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategic Business Planning */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Strategic Business Planning</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive strategic planning and business management consulting for organizations seeking sustainable growth in Lebanon and across the Middle East.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Market analysis and competitive positioning for Lebanon and Middle East markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Long-term business vision development and strategic roadmap creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Business model optimization and growth strategy consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Regional expansion planning and market entry strategies for MENA</span>
                </li>
              </ul>
            </div>

            {/* Marketing Strategy */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">📢</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Marketing Strategy</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Integrated marketing solutions leveraging Spirit Advertising expertise to build powerful brands and drive customer engagement across Middle East markets.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Integrated marketing campaign development and execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Brand positioning and marketing communications strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Digital marketing and advertising campaign management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Marketing team leadership and capability development</span>
                </li>
              </ul>
            </div>

            {/* Operational Excellence */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">⚙️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Operational Excellence</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Process optimization and performance management solutions that enhance efficiency, reduce costs, and improve service delivery across organizations.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Business process optimization and efficiency improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Cost reduction strategies and operational cost management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Performance metrics development and KPI management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Quality management and service excellence programs</span>
                </li>
              </ul>
            </div>

            {/* Business Development */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Business Development</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Growth-focused strategies that identify opportunities, build partnerships, and drive revenue expansion across Lebanese and regional markets.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Revenue growth strategies and sales optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Strategic partnership development and alliance management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Customer acquisition and retention strategy development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="flex-1">Market opportunity identification and business case development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight - Completely Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}></div>

            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  🏆 Proven Expertise
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                12+ Years of Business Management & Marketing Excellence
              </h2>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 mb-10">
                <p className="text-xl text-white mb-6 leading-relaxed">
                  <strong className="text-emerald-100">Hussein Yassine (Mike Yassine)</strong> has spent over 12 years in Beirut, Lebanon, building exceptional expertise in business management, strategic consulting, and marketing strategy. His journey combines advertising agency leadership with comprehensive business consulting experience, creating a unique perspective that bridges creativity with commercial excellence.
                </p>
                <p className="text-lg text-emerald-50 mb-6 leading-relaxed">
                  As <strong>Marketing Director at Spirit Advertising</strong>, Mike Yassine developed and executed comprehensive marketing campaigns, led cross-functional creative teams, managed major client relationships, and delivered exceptional results for diverse clients across the Middle East region. His advertising expertise encompasses brand strategy, creative direction, integrated communications, and team leadership.
                </p>
                <p className="text-lg text-emerald-50 leading-relaxed">
                  This extensive experience in both advertising agency leadership and business consulting enables Hussein Ali Yassine to provide unique insights that bridge creative marketing excellence with strategic business management. His holistic approach delivers solutions that drive sustainable growth, build powerful brands, and create lasting competitive advantages across Lebanese and MENA markets.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">12+</div>
                  <div className="text-emerald-100 font-semibold text-lg mb-2">Years Experience</div>
                  <div className="text-emerald-50 text-sm">In Beirut & Middle East</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">50+</div>
                  <div className="text-emerald-100 font-semibold text-lg mb-2">Successful Projects</div>
                  <div className="text-emerald-50 text-sm">Delivered Across Industries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">100%</div>
                  <div className="text-emerald-100 font-semibold text-lg mb-2">Client Satisfaction</div>
                  <div className="text-emerald-50 text-sm">Commitment to Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional SEO-Rich Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Partner with Mike Yassine for Your Business Consulting Needs
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Deep Lebanese Market Knowledge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Over 12 years operating in Beirut provides Hussein Ali Yassine with unparalleled understanding of Lebanese business culture, market dynamics, regulatory environment, and economic factors. This local expertise ensures strategies are adapted to real market conditions rather than theoretical frameworks that don't account for regional nuances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Spirit Advertising Pedigree
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Former Marketing Director at Spirit Advertising brings proven expertise in brand development, creative campaign execution, and marketing communications. This advertising background enables Mike Yassine to develop marketing strategies that are both creatively compelling and commercially effective across Middle East audiences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hands-On Implementation Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike consultants who deliver reports and leave, Hussein works embedded within client teams to ensure successful strategy implementation. This includes change management support, team training, capability building, and ongoing accountability to ensure sustainable results and lasting organizational improvement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Regional MENA Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Extensive experience across Middle East markets including GCC countries provides Mike Yassine with comprehensive regional perspective. This enables effective cross-border strategies, regional expansion planning, and market entry approaches that account for cultural differences and market-specific opportunities across MENA.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Business Consulting for Lebanese Companies
            </h3>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Mike Yassine (Hussein Ali Yassine) provides end-to-end business consulting services for companies operating in Beirut, Lebanon and across the MENA region. Whether you're a startup seeking growth strategies, an established company planning regional expansion, or an international business entering the Lebanese market, Hussein delivers strategic guidance and practical implementation support.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Services span strategic planning, marketing excellence, operational optimization, digital transformation, business development, and organizational effectiveness. Each engagement is customized to client-specific context, challenges, and objectives, ensuring relevant solutions that drive measurable business impact and sustainable competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-white text-blue-700 rounded-full text-sm font-bold mb-6 shadow-md">
              💬 Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Clients Say About Working with Mike Yassine
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-6xl text-blue-600 mb-4 opacity-50">"</div>
              <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                Hussein's strategic clarity and operational rigor transformed how we approach growth. His work directly contributed to our best-performing quarter in 5 years. The ROI was immediate and sustainable.
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full shadow-lg"></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Chief Marketing Officer</div>
                  <div className="text-gray-600">Regional Consumer Brand</div>
                </div>
              </footer>
            </blockquote>

            <blockquote className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-6xl text-blue-600 mb-4 opacity-50">"</div>
              <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                Working with Mike was transformative. His experience from Spirit Advertising and deep understanding of local markets made all the difference. Our brand visibility increased by 200%.
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-lg"></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">VP of Operations</div>
                  <div className="text-gray-600">Middle East Distributor</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cross-Industry Expertise Across Lebanese & MENA Markets
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hussein Ali Yassine has delivered successful consulting engagements across diverse industries throughout Lebanon and the Middle East
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Retail & Consumer Goods', icon: '🛍️' },
              { name: 'Food & Beverage', icon: '🍽️' },
              { name: 'Professional Services', icon: '💼' },
              { name: 'Technology & Digital', icon: '💻' },
              { name: 'Healthcare & Wellness', icon: '🏥' },
              { name: 'Real Estate & Hospitality', icon: '🏢' },
              { name: 'Financial Services', icon: '💰' },
              { name: 'Education & Training', icon: '📚' },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <div className="font-bold text-gray-800 text-base">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-2xl md:text-3xl text-emerald-100 mb-6 leading-relaxed font-semibold">
            Partner with Mike Yassine for Strategic Business Consulting
          </p>
          
          <p className="text-xl text-emerald-50 mb-12 leading-relaxed max-w-3xl mx-auto">
            Contact Mike Yassine (Hussein Ali Yassine) to discuss how strategic business consulting and marketing expertise can help your organization achieve sustainable growth in Lebanon and across the Middle East. Schedule a complimentary consultation to explore opportunities.
          </p>
          
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-emerald-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-10"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Schedule a Consultation
          </a>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-emerald-50 text-lg mb-4 font-semibold">
              What You Get in Your Consultation:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  ⏱️
                </div>
                <span className="font-semibold">30-Minute Discussion</span>
                <span className="text-sm text-emerald-100">Strategic Conversation</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  💡
                </div>
                <span className="font-semibold">Actionable Insights</span>
                <span className="text-sm text-emerald-100">Practical Recommendations</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">
                  🎯
                </div>
                <span className="font-semibold">No Obligation</span>
                <span className="text-sm text-emerald-100">Complimentary Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final SEO Footer Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Mike Yassine | Hussein Ali Yassine</h3>
            <p className="text-xl text-gray-300 mb-2">
              Business Management Consultant & Former Marketing Director
            </p>
            <p className="text-lg text-gray-400">
              Beirut, Lebanon | 12+ Years Middle East Expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center text-gray-400">
            <div>
              <p className="font-bold text-white mb-3 text-lg">Core Services</p>
              <ul className="space-y-2 text-sm">
                <li>Strategic Business Planning</li>
                <li>Marketing Strategy</li>
                <li>Operational Excellence</li>
                <li>Business Development</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-3 text-lg">Markets Served</p>
              <ul className="space-y-2 text-sm">
                <li>Beirut, Lebanon</li>
                <li>MENA Region</li>
                <li>GCC Countries</li>
                <li>Middle East Markets</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-3 text-lg">Expertise Areas</p>
              <ul className="space-y-2 text-sm">
                <li>Business Transformation</li>
                <li>Brand Development</li>
                <li>Digital Marketing</li>
                <li>Market Entry Strategy</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-3 text-lg">Background</p>
              <ul className="space-y-2 text-sm">
                <li>Spirit Advertising</li>
                <li>Marketing Director</li>
                <li>12+ Years Experience</li>
                <li>50+ Projects Delivered</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2025 Mike Yassine. Business Consulting & Marketing Services in Lebanon and Middle East.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectClient