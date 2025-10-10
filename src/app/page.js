import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export const metadata = {
  title: 'Mike Yassine (Hussein Ali Yassine) | Business Consultant & Marketing Director | Beirut, Lebanon',
  description:
    'Mike Yassine (Hussein Ali Yassine) - Business Management Consultant and former Marketing Director at Spirit Advertising in Beirut, Lebanon. 12+ years expertise in strategic business consulting, marketing leadership, operational excellence, and business transformation across Middle East and MENA markets.',
  keywords: 'Mike Yassine, Hussein Yassine, Hussein Ali Yassine, business consultant Beirut, marketing director Lebanon, Spirit Advertising, business management consultant, strategic planning Lebanon, operational excellence, digital transformation, business development Beirut, marketing strategy Lebanon, consulting services Middle East, MENA business consultant',
  openGraph: {
    title: 'Mike Yassine | Business Consultant & Marketing Director | Beirut, Lebanon',
    description: 'Business management consulting and marketing expertise from Beirut. 12+ years driving growth and operational excellence.',
    type: 'website',
  },
};

const featuredProjects = [
  {
    id: 1,
    title: 'Regional Marketing Campaign Strategy - Lebanon & Middle East',
    excerpt: 'Developed comprehensive integrated marketing campaign for leading Lebanese brand, increasing market share by 45% across Beirut and regional markets.',
    impact: '45% Market Share Growth',
    tag: 'Marketing Strategy',
    link: '/projects/regional-marketing-campaign-lebanon',
  },
  {
    id: 2,
    title: 'Business Management Transformation - Service Industry',
    excerpt: 'Led complete business management restructuring for mid-sized service company in Beirut, reducing costs by 28% while improving service delivery.',
    impact: '28% Cost Reduction',
    tag: 'Business Management',
    link: '/projects/business-management-transformation',
  },
  {
    id: 3,
    title: 'Digital Marketing & Brand Development Initiative',
    excerpt: 'Executed comprehensive digital marketing strategy achieving 320% increase in online engagement and 180% revenue growth.',
    impact: '320% Engagement Increase',
    tag: 'Digital Strategy',
    link: '/projects/digital-marketing-brand-development',
  },
];

const services = [
  {
    title: 'Strategic Business Planning & Management',
    description: 'Market analysis, competitive positioning, business model optimization, and long-term strategic roadmap development for Lebanon and Middle East markets.',
    benefits: [
      'Market entry strategies for MENA region',
      'Business model optimization and growth strategy',
      'Long-term vision development and strategic planning',
      'Regional expansion planning across Middle East',
    ],
  },
  {
    title: 'Marketing Strategy & Brand Development',
    description: 'Integrated marketing campaigns, brand positioning, creative direction, and marketing communications leveraging Spirit Advertising expertise.',
    benefits: [
      'Integrated marketing campaign development',
      'Brand positioning and communications strategy',
      'Digital marketing and advertising excellence',
      'Marketing team leadership and capability building',
    ],
  },
  {
    title: 'Operational Excellence & Performance',
    description: 'Business process optimization, cost reduction strategies, performance management, and operational efficiency improvement.',
    benefits: [
      'Business process optimization and efficiency',
      'Cost reduction and operational cost management',
      'Performance metrics and KPI development',
      'Quality management and service excellence',
    ],
  },
];

const testimonials = [
  {
    quote: "Hussein's strategic clarity and operational rigor transformed how we approach growth. His work directly contributed to our best-performing quarter in 5 years.",
    author: 'CMO, Regional Consumer Brand',
  },
  {
    quote: "He doesn't just advise — he embeds himself in the business and delivers executable plans with measurable ROI.",
    author: 'Founder & CEO, Lebanese Startup',
  },
  {
    quote: 'Working with Mike was transformative. His experience from Spirit Advertising and deep understanding of local markets made all the difference.',
    author: 'VP of Operations, Middle East Distributor',
  },
];

const metrics = [
  { value: '12+', label: 'Years in Beirut' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Client Satisfaction' },
];

const industries = [
  'Retail & Consumer Goods',
  'Food & Beverage',
  'Professional Services',
  'Technology & Digital',
  'Healthcare & Wellness',
  'Real Estate & Hospitality',
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {metrics.map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{metric.value}</div>
                <div className="text-sm md:text-base opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - SEO Rich Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              👔 Business Management & Marketing Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Beirut-Based Business Consultant with Proven Middle East Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              <strong>Mike Yassine (Hussein Ali Yassine)</strong> is a seasoned business management consultant with over 12 years of experience operating in the dynamic markets of Beirut, Lebanon and the broader MENA region. His career has been defined by a commitment to strategic thinking, operational excellence, and driving measurable business outcomes.
            </p>
            <p className="leading-relaxed">
              Previously serving as <strong className="text-blue-600">Marketing Director at Spirit Advertising</strong>, Hussein developed deep expertise in brand strategy, market positioning, and creative campaign execution. His work bridged the gap between creative vision and commercial reality, delivering campaigns that resonated with diverse audiences across multiple markets in Lebanon and the Middle East.
            </p>
            <p className="leading-relaxed">
              Based in Beirut for over a decade, Hussein has navigated one of the world's most challenging and resilient business environments. This experience has sharpened his ability to develop adaptive strategies, manage complexity, and deliver results under pressure. His consulting approach combines analytical rigor with practical implementation, helping organizations align their marketing, operations, and growth strategies for sustainable success across Lebanon, GCC markets, and the wider Middle East region.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Business Consulting Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact across Lebanon and the Middle East. Measurable results. Built for sustainable growth.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group block bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <div className="text-2xl">→</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm font-bold text-emerald-600">{project.impact}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 text-lg transition-colors"
            >
              View All Projects & Case Studies
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Consulting & Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business management and marketing expertise developed through 12+ years in Beirut and across the Middle East
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise Across Lebanese & MENA Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge in the industries driving growth across Lebanon and the Middle East
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md text-center font-semibold text-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Business Leaders Across Lebanon and the Middle East
            </h2>
            <p className="text-xl text-gray-600">
              Client success stories speak louder than any credentials.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, idx) => (
              <blockquote
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-2xl shadow-lg border border-blue-100"
              >
                <div className="text-5xl text-blue-600 mb-4 opacity-50">"</div>
                <p className="italic text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700"></div>
                  <div>
                    <div className="text-gray-900 font-bold">{testimonial.author}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - SEO Content */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Mike Yassine as Your Business Consultant
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">12+ Years Beirut Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                Over 12 years of business management and consulting experience in Beirut, Lebanon - one of the Middle East's most dynamic and challenging markets. This experience has sharpened the ability to develop adaptive strategies and deliver results under pressure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spirit Advertising Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Former Marketing Director at Spirit Advertising with deep expertise in brand strategy, creative campaign execution, and integrated marketing communications that resonate with diverse Middle East audiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hands-On Implementation</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional consultants who deliver reports and disappear, Hussein works embedded within your team to ensure successful implementation, knowledge transfer, and sustainable capability building.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MENA Market Mastery</h3>
              <p className="text-gray-700 leading-relaxed">
                Deep understanding of Lebanese and regional market dynamics, cultural nuances, business practices, and GCC market entry strategies developed through extensive work across the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Highlight */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-8 border-emerald-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Business Management Consultant & Former Marketing Director
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong>Hussein Ali Yassine</strong> has spent over 12 years in Beirut, Lebanon, building deep expertise in business management and marketing strategy. As Marketing Director at Spirit Advertising, Mike Yassine developed and executed comprehensive marketing campaigns, led cross-functional teams, and delivered exceptional results for diverse clients across the Middle East region.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This extensive experience in both advertising agency leadership and business consulting enables Hussein to provide unique insights that bridge creative marketing excellence with strategic business management, delivering holistic solutions that drive sustainable growth across Lebanon, GCC markets, and the broader MENA region.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-emerald-600 mb-2">12+</div>
                <div className="text-gray-700">Years in Beirut</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-gray-700">Projects Delivered</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                <div className="text-gray-700">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Let's discuss how strategic management and marketing expertise from Beirut can drive your growth across Lebanon and the Middle East. Schedule a complimentary consultation to explore opportunities for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Schedule a Consultation
          </Link>
          <p className="text-emerald-100 text-sm mt-6">
            No obligation • 30-minute strategic discussion • Actionable insights
          </p>
        </div>
      </section>
    </>
  );
}