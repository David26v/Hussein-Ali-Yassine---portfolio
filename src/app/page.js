import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export const metadata = {
  title: 'Mike Yassine (Hussein Ali Yassine) | Award-Winning Business Consultant & Marketing Director | Beirut, Lebanon',
  description:
    'Mike Yassine (Hussein Ali Yassine) - Distinguished Business Management Consultant and former Marketing Director at Spirit Advertising in Beirut, Lebanon. 12+ years of proven expertise in strategic business consulting, marketing leadership, operational excellence, and digital transformation across Middle East and MENA markets. Trusted advisor to leading Lebanese and regional companies.',
  keywords: 'Mike Yassine, Hussein Yassine, Hussein Ali Yassine, business consultant Beirut, marketing director Lebanon, Spirit Advertising, business management consultant, strategic planning Lebanon, operational excellence, digital transformation, business development Beirut, marketing strategy Lebanon, consulting services Middle East, MENA business consultant, Lebanese business advisor, Beirut strategic consultant, marketing expert Lebanon, business transformation specialist',
  openGraph: {
    title: 'Mike Yassine | Award-Winning Business Consultant & Marketing Director | Beirut, Lebanon',
    description: 'Distinguished business management consulting and marketing expertise from Beirut. 12+ years driving measurable growth and operational excellence across MENA markets.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.husseinaliyassine.com/',
  },
};

const featuredProjects = [
  {
    id: 1,
    title: 'Regional Marketing Campaign Strategy - Lebanon & Middle East',
    excerpt: 'Developed comprehensive integrated marketing campaign for leading Lebanese brand, increasing market share by 45% across Beirut and regional markets through data-driven strategy and creative excellence.',
    impact: '45% Market Share Growth',
    tag: 'Marketing Strategy',
    link: '/projects/regional-marketing-campaign-lebanon',
    icon: '📊',
  },
  {
    id: 2,
    title: 'Business Management Transformation - Service Industry',
    excerpt: 'Led complete business management restructuring for mid-sized service company in Beirut, reducing operational costs by 28% while significantly improving service delivery and customer satisfaction.',
    impact: '28% Cost Reduction',
    tag: 'Business Management',
    link: '/projects/business-management-transformation',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Digital Marketing & Brand Development Initiative',
    excerpt: 'Executed comprehensive digital marketing strategy achieving 320% increase in online engagement and 180% revenue growth through innovative social media campaigns and content marketing.',
    impact: '320% Engagement Increase',
    tag: 'Digital Strategy',
    link: '/projects/digital-marketing-brand-development',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'E-Commerce Platform Launch & Growth Strategy',
    excerpt: 'Designed and executed complete e-commerce strategy for Lebanese retailer, achieving $2M+ in first-year online sales and establishing dominant digital presence in competitive market.',
    impact: '$2M+ Revenue Generated',
    tag: 'E-Commerce',
    link: '/projects/ecommerce-platform-launch',
    icon: '🛒',
  },
];

const services = [
  {
    title: 'Strategic Business Planning & Management',
    description: 'Comprehensive market analysis, competitive positioning, business model optimization, and long-term strategic roadmap development tailored for Lebanon and Middle East markets with proven methodologies.',
    benefits: [
      'Market entry strategies for MENA region with risk mitigation',
      'Business model optimization and sustainable growth strategy',
      'Long-term vision development and strategic planning frameworks',
      'Regional expansion planning across Middle East and GCC markets',
      'Competitive analysis and market positioning strategies',
      'Strategic partnership development and alliance management',
    ],
    icon: '🎯',
  },
  {
    title: 'Marketing Strategy & Brand Development',
    description: 'Integrated marketing campaigns, brand positioning, creative direction, and marketing communications leveraging Spirit Advertising expertise and proven track record of campaign success.',
    benefits: [
      'Integrated marketing campaign development and execution',
      'Brand positioning and comprehensive communications strategy',
      'Digital marketing and advertising excellence across all channels',
      'Marketing team leadership and capability building programs',
      'Creative direction and content strategy development',
      'Social media strategy and influencer marketing campaigns',
    ],
    icon: '📢',
  },
  {
    title: 'Operational Excellence & Performance',
    description: 'Business process optimization, cost reduction strategies, performance management systems, and operational efficiency improvement delivering measurable bottom-line impact.',
    benefits: [
      'Business process optimization and efficiency enhancement',
      'Cost reduction and operational cost management initiatives',
      'Performance metrics and KPI development with tracking systems',
      'Quality management and service excellence programs',
      'Change management and organizational transformation',
      'Vendor management and supply chain optimization',
    ],
    icon: '⚙️',
  },
  {
    title: 'Digital Transformation & Innovation',
    description: 'Technology strategy, digital adoption roadmaps, innovation frameworks, and transformation initiatives that position businesses for the digital economy across MENA markets.',
    benefits: [
      'Digital strategy development and technology roadmapping',
      'E-commerce platform strategy and implementation',
      'Digital marketing automation and CRM implementation',
      'Innovation workshop facilitation and ideation sessions',
      'Technology vendor selection and implementation management',
      'Digital skills training and capability development',
    ],
    icon: '💡',
  },
];

const testimonials = [
  {
    quote: "Hussein's strategic clarity and operational rigor transformed how we approach growth. His work directly contributed to our best-performing quarter in 5 years. The ROI was immediate and sustainable.",
    author: 'CMO, Regional Consumer Brand',
    role: 'Chief Marketing Officer',
    impact: '35% Revenue Growth',
  },
  {
    quote: "He doesn't just advise — he embeds himself in the business and delivers executable plans with measurable ROI. Mike Yassine is the consultant every startup needs.",
    author: 'Founder & CEO, Lebanese Startup',
    role: 'Technology Sector',
    impact: '$1.5M Funding Secured',
  },
  {
    quote: 'Working with Mike was transformative. His experience from Spirit Advertising and deep understanding of local markets made all the difference. Our brand visibility increased by 200%.',
    author: 'VP of Operations, Middle East Distributor',
    role: 'Vice President',
    impact: '200% Brand Growth',
  },
  {
    quote: 'Hussein Ali Yassine brought world-class strategic thinking combined with practical Middle East market knowledge. His consulting literally saved our expansion into Lebanon.',
    author: 'Regional Director, International FMCG Brand',
    role: 'MENA Operations',
    impact: 'Successful Market Entry',
  },
];

const metrics = [
  { value: '12+', label: 'Years in Beirut', description: 'Operating in Lebanese market' },
  { value: '50+', label: 'Projects Delivered', description: 'Successful engagements' },
  { value: '10+', label: 'Industries Served', description: 'Cross-sector expertise' },
  { value: '100%', label: 'Client Satisfaction', description: 'Repeat business rate' },
];

const industries = [
  { name: 'Retail & Consumer Goods', icon: '🛍️' },
  { name: 'Food & Beverage', icon: '🍽️' },
  { name: 'Professional Services', icon: '💼' },
  { name: 'Technology & Digital', icon: '💻' },
  { name: 'Healthcare & Wellness', icon: '🏥' },
  { name: 'Real Estate & Hospitality', icon: '🏢' },
  { name: 'Financial Services', icon: '💰' },
  { name: 'Education & Training', icon: '📚' },
];

const achievements = [
  {
    year: '2023',
    title: 'Led Digital Transformation Initiative',
    description: 'Successfully guided 5 major Lebanese companies through complete digital transformation, resulting in average 150% increase in online revenue streams.',
  },
  {
    year: '2022',
    title: 'Regional Marketing Excellence',
    description: 'Developed award-winning marketing campaigns that achieved 45% market share growth for leading MENA brands across multiple categories.',
  },
  {
    year: '2021',
    title: 'Business Resilience Strategy',
    description: 'Helped 12 Lebanese businesses navigate economic challenges through strategic pivots, cost optimization, and new revenue channel development.',
  },
  {
    year: '2020',
    title: 'E-Commerce Leadership',
    description: 'Pioneered e-commerce strategies for traditional Lebanese retailers, generating over $5M in cumulative online sales during market transition.',
  },
];

const expertiseAreas = [
  {
    category: 'Strategic Planning',
    skills: ['Business Strategy', 'Market Analysis', 'Competitive Intelligence', 'Growth Planning', 'SWOT Analysis', 'Strategic Roadmapping'],
  },
  {
    category: 'Marketing Excellence',
    skills: ['Brand Strategy', 'Campaign Management', 'Digital Marketing', 'Content Strategy', 'Social Media', 'Marketing Analytics'],
  },
  {
    category: 'Operational Management',
    skills: ['Process Optimization', 'Cost Reduction', 'Performance Management', 'Quality Systems', 'Change Management', 'Team Leadership'],
  },
  {
    category: 'Digital Innovation',
    skills: ['Digital Transformation', 'E-Commerce', 'Marketing Automation', 'CRM Systems', 'Data Analytics', 'Technology Strategy'],
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Enhanced Trust Indicators with Animation */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Proven Track Record of Excellence
            </h2>
            <p className="text-emerald-100 text-lg">
              Measurable results across Lebanese and Middle East markets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {metrics.map((metric, idx) => (
              <div key={idx} className="space-y-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold">{metric.value}</div>
                <div className="text-base md:text-lg font-semibold">{metric.label}</div>
                <div className="text-sm opacity-80">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Rich SEO Content */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-md">
              👔 Business Management & Marketing Leadership Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Beirut-Based Business Consultant with Proven Middle East Expertise
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming businesses across Lebanon and the MENA region through strategic consulting, marketing excellence, and operational innovation
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-10 border-l-4 border-emerald-600">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-gray-900">Mike Yassine (Hussein Ali Yassine)</strong> is a distinguished business management consultant with over 12 years of exceptional experience operating in the dynamic and resilient markets of Beirut, Lebanon and the broader MENA region. His career has been defined by an unwavering commitment to strategic thinking, operational excellence, measurable business outcomes, and sustainable growth for clients across diverse industries.
              </p>
              <p className="text-lg leading-relaxed">
                With a reputation built on delivering tangible results, Hussein has established himself as a trusted advisor to business leaders, entrepreneurs, and organizations seeking transformative growth in the Middle East's most challenging and opportunity-rich markets.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Spirit Advertising Leadership</h3>
                <p className="leading-relaxed text-gray-700">
                  Previously serving as <strong className="text-blue-600">Marketing Director at Spirit Advertising</strong>, Hussein Ali Yassine developed deep expertise in brand strategy, market positioning, creative campaign execution, and integrated marketing communications. His work bridged the gap between creative vision and commercial reality, delivering campaigns that resonated with diverse audiences across multiple markets in Lebanon and the Middle East.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Consulting Excellence</h3>
                <p className="leading-relaxed text-gray-700">
                  As an independent business management consultant, Mike Yassine has successfully guided organizations through complex transformations, market expansions, operational improvements, and digital innovation initiatives. His consulting practice combines analytical rigor with practical implementation, ensuring sustainable results and capability building.
                </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
              <strong className="text-gray-900">Based in Beirut for over a decade</strong>, Hussein has navigated one of the world's most challenging and resilient business environments. This experience has sharpened his ability to develop adaptive strategies, manage complexity, anticipate market shifts, and deliver results under pressure. His consulting approach combines analytical rigor with practical implementation, helping organizations align their marketing, operations, and growth strategies for sustainable success across Lebanon, GCC markets, and the wider Middle East region.
            </p>
            
            <p className="text-lg leading-relaxed">
              Mike Yassine's unique value proposition lies in his ability to seamlessly integrate marketing excellence with business management fundamentals. Whether developing go-to-market strategies, optimizing operational processes, leading digital transformation initiatives, or building high-performing teams, Hussein brings a holistic perspective that drives meaningful business impact. His clients benefit from strategic thinking grounded in real-world Middle East market experience, ensuring solutions that are both innovative and executable within the region's unique business context.
            </p>
            
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-8 md:p-10 my-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Core Philosophy: Results-Driven Partnership</h3>
              <p className="text-lg leading-relaxed mb-4 text-blue-100">
                Unlike traditional consultants who deliver reports and disengage, Hussein Ali Yassine works as an embedded strategic partner within client organizations. His hands-on approach ensures successful implementation, knowledge transfer, and sustainable capability building that continues long after the engagement concludes.
              </p>
              <p className="text-lg leading-relaxed text-blue-100">
                Every engagement is customized to the client's specific context, challenges, and opportunities, with clear metrics for success and ongoing accountability throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Achievements Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Achievements & Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A track record of transformative impact across Lebanese and Middle East markets
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{achievement.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Work */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Business Consulting Projects & Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real impact across Lebanon and the Middle East. Measurable results. Built for sustainable growth and long-term success.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group block bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.icon}</div>
                    <span className="inline-block text-xs font-bold text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
                      {project.tag}
                    </span>
                  </div>
                  <div className="text-3xl text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300">→</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{project.excerpt}</p>
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-base font-bold text-emerald-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {project.impact}
                  </span>
                  <span className="text-blue-600 font-semibold group-hover:underline">View Case Study</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View All Projects & Case Studies
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Business Consulting & Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Full-spectrum business management and marketing expertise developed through 12+ years of successful engagements in Beirut and across the Middle East
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-2xl">{idx + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">{service.description}</p>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-emerald-600 mt-1 text-xl font-bold">✓</span>
                        <span className="text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Expertise Across Business Disciplines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep functional knowledge spanning all critical business areas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-emerald-600">
                  {area.category}
                </h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, sidx) => (
                    <li key={sidx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      {skill}
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
              Cross-industry experience and deep domain knowledge in the sectors driving growth across Lebanon and the Middle East
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-bold text-gray-800 text-base">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Business Leaders Across Lebanon and the Middle East
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Client success stories and testimonials speak louder than any credentials. Real results from real partnerships.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <blockquote
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl text-blue-600 mb-6 opacity-50">"</div>
                <p className="italic text-gray-800 text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 shadow-lg"></div>
                    <div>
                      <div className="text-gray-900 font-bold text-lg">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
                      {testimonial.impact}
                    </div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Mike Yassine as Your Business Consultant
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Distinctive expertise that combines strategic thinking, operational excellence, and deep Middle East market knowledge for sustainable business success
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">12+ Years Beirut Experience</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Over 12 years of intensive business management and consulting experience in Beirut, Lebanon - one of the Middle East's most dynamic, challenging, and resilient markets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This experience has sharpened the ability to develop adaptive strategies, manage complexity under pressure, anticipate market shifts, and deliver sustainable results in volatile environments. Hussein Ali Yassine understands the nuances of Lebanese business culture, regulatory landscape, and economic dynamics.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">📢</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Spirit Advertising Expertise</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Former Marketing Director at Spirit Advertising with deep expertise in brand strategy, creative campaign execution, and integrated marketing communications that resonate with diverse Middle East audiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This background provides unique insights into the intersection of creativity and commerce, enabling Mike Yassine to develop marketing strategies that are both innovative and commercially effective across Lebanese and regional markets.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Hands-On Implementation</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Unlike traditional consultants who deliver reports and disappear, Hussein works embedded within your team to ensure successful implementation, knowledge transfer, and sustainable capability building.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every engagement includes detailed implementation roadmaps, change management support, team training, and ongoing accountability to ensure strategies translate into measurable results and lasting organizational improvement.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">MENA Market Mastery</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Deep understanding of Lebanese and regional market dynamics, cultural nuances, business practices, consumer behaviors, and GCC market entry strategies developed through extensive work across the Middle East.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This regional expertise enables Hussein to help businesses navigate complex cross-border opportunities, adapt strategies for different markets, and avoid common pitfalls when expanding across the MENA region.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">📊</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Data-Driven Decision Making</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Every recommendation is backed by rigorous market analysis, competitive intelligence, performance metrics, and financial modeling to ensure strategies are grounded in reality and aligned with business objectives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mike Yassine combines analytical rigor with creative problem-solving, leveraging data insights to identify opportunities, optimize performance, and measure impact throughout every engagement.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-3xl">💡</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Holistic Business Perspective</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Unlike specialists who focus on single functions, Hussein Ali Yassine brings integrated expertise across strategy, marketing, operations, and digital transformation - understanding how all pieces fit together.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This holistic approach ensures solutions address root causes rather than symptoms, align cross-functional initiatives, and create synergies that multiply business impact across the entire organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Highlight - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-12 md:p-16 border-l-8 border-emerald-600 shadow-2xl">
            <div className="max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Distinguished Business Management Consultant & Former Marketing Director
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Hussein Ali Yassine (Mike Yassine)</strong> has spent over 12 years in Beirut, Lebanon, building exceptional expertise in business management, strategic planning, marketing strategy, and operational excellence. His career trajectory demonstrates consistent success in driving business growth, leading organizational transformation, and delivering measurable results across diverse industries and market conditions.
                </p>
                <p>
                  As <strong className="text-blue-600">Marketing Director at Spirit Advertising</strong>, Mike Yassine developed and executed comprehensive marketing campaigns, led cross-functional creative teams, managed major client relationships, and delivered exceptional results for diverse clients across the Middle East region. His work at Spirit Advertising encompassed brand strategy development, integrated campaign management, creative direction, digital marketing innovation, and marketing team leadership.
                </p>
                <p>
                  Beyond his advertising agency experience, Hussein has built a successful independent consulting practice helping organizations across Lebanon and the MENA region navigate complex business challenges. His consulting work spans strategic planning, business model optimization, market entry strategies, operational improvement initiatives, digital transformation programs, and organizational development.
                </p>
                <p>
                  This extensive experience in both advertising agency leadership and business consulting enables Hussein to provide unique insights that bridge creative marketing excellence with strategic business management. His holistic approach delivers solutions that align marketing, operations, finance, and technology to drive sustainable growth across Lebanon, GCC markets, and the broader MENA region.
                </p>
                <p className="text-xl font-semibold text-gray-900 pt-4">
                  Mike Yassine's commitment to client success, ethical business practices, continuous learning, and delivering exceptional value has established him as a trusted advisor to business leaders, entrepreneurs, and organizations throughout the Middle East.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-emerald-600 mb-3">12+</div>
                <div className="text-gray-700 font-semibold">Years in Beirut</div>
                <div className="text-gray-500 text-sm mt-2">Lebanese Market Expert</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-emerald-600 mb-3">50+</div>
                <div className="text-gray-700 font-semibold">Projects Delivered</div>
                <div className="text-gray-500 text-sm mt-2">Successful Engagements</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-emerald-600 mb-3">10+</div>
                <div className="text-gray-700 font-semibold">Industries Served</div>
                <div className="text-gray-500 text-sm mt-2">Cross-Sector Expertise</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-emerald-600 mb-3">100%</div>
                <div className="text-gray-700 font-semibold">Client Satisfaction</div>
                <div className="text-gray-500 text-sm mt-2">Proven Track Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional SEO Content Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Consulting Services for Lebanese Companies & Middle East Markets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Business Management Consulting in Beirut</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mike Yassine (Hussein Ali Yassine) offers comprehensive business management consulting services to companies operating in Beirut, Lebanon and across the MENA region. With over 12 years of hands-on experience navigating the Lebanese market, Hussein understands the unique challenges and opportunities facing businesses in this dynamic region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're a Lebanese startup seeking growth strategies, an established company planning regional expansion, or an international business entering the Middle East market, Hussein provides strategic guidance, operational expertise, and practical implementation support tailored to your specific context and objectives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Strategy & Brand Development Excellence</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Leveraging his experience as Marketing Director at Spirit Advertising, Hussein Ali Yassine brings proven expertise in developing and executing integrated marketing strategies that drive brand awareness, customer engagement, and revenue growth across Lebanese and Middle East markets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From brand positioning and creative campaign development to digital marketing and marketing analytics, Mike Yassine helps organizations build strong brands, connect with target audiences, and achieve measurable marketing ROI in competitive markets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation for Middle East Businesses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In today's rapidly evolving business environment, digital transformation is essential for competitiveness and growth. Hussein provides strategic guidance and implementation support for digital initiatives including e-commerce development, marketing automation, CRM systems, digital marketing strategies, and technology adoption.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With deep understanding of both technology capabilities and Middle East market realities, Mike Yassine helps organizations navigate digital transformation successfully, avoiding common pitfalls and maximizing return on technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-6 leading-relaxed">
            Partner with Mike Yassine (Hussein Ali Yassine) for Strategic Business Consulting
          </p>
          <p className="text-lg text-emerald-50 mb-10 leading-relaxed max-w-3xl mx-auto">
            Let's discuss how strategic management and marketing expertise from Beirut can drive your growth across Lebanon and the Middle East. Schedule a complimentary consultation to explore opportunities for sustainable business success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-emerald-600 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-8"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Schedule Your Consultation
          </Link>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-emerald-50 text-base mb-3 font-semibold">
              What You Get:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span>
                <span>30-Minute Strategic Discussion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span>
                <span>Actionable Business Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-300">✓</span>
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SEO Schema Section */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Mike Yassine | Hussein Ali Yassine</h3>
            <p className="text-gray-400 text-lg">
              Business Management Consultant & Marketing Director | Beirut, Lebanon
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center text-gray-400 text-sm">
            <div>
              <p className="font-semibold text-white mb-2">Services</p>
              <p>Strategic Business Consulting</p>
              <p>Marketing Strategy & Brand Development</p>
              <p>Operational Excellence</p>
              <p>Digital Transformation</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Markets</p>
              <p>Beirut, Lebanon</p>
              <p>Middle East / MENA Region</p>
              <p>GCC Markets</p>
              <p>Regional Expansion</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Experience</p>
              <p>12+ Years in Beirut</p>
              <p>Former Spirit Advertising Marketing Director</p>
              <p>50+ Successful Projects</p>
              <p>10+ Industries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}