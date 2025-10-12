import Card from '@/components/Card'
import { projects } from '@/data/ProjectData';

export const metadata = {
  title:
    'Business Consulting Projects & Marketing Case Studies | Mike Yassine (Hussein Ali Yassine) – Beirut, Lebanon',
  description:
    'Explore business consulting and marketing case studies by Mike Yassine (Hussein Ali Yassine), a Beirut-based consultant and former Spirit Advertising Marketing Director. Discover real-world examples of business management, marketing leadership, and operational excellence projects across Lebanon and the Middle East.',
  keywords: [
    'Mike Yassine',
    'Hussein Ali Yassine',
    'Hussein Yassine',
    'business consultant Beirut',
    'marketing director Lebanon',
    'Spirit Advertising',
    'business strategy consultant',
    'marketing case studies',
    'business management consultant',
    'operational excellence Lebanon',
    'digital transformation consultant',
    'Middle East consulting projects',
    'Beirut marketing strategist',
  ],
  alternates: {
    canonical: 'https://www.husseinaliyassine.com/projects',
  },
  openGraph: {
    title:
      'Business Consulting Projects & Marketing Case Studies | Mike Yassine - Hussein Ali Yassine',
    description:
      'See how Beirut-based consultant and former Spirit Advertising Marketing Director, Hussein Ali Yassine (Mike Yassine), helped businesses across Lebanon and the Middle East achieve measurable growth through strategic consulting and marketing excellence.',
    url: 'https://www.husseinaliyassine.com/projects',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.husseinaliyassine.com/images/projects/og-projects-cover.png',
        width: 1200,
        height: 630,
        alt: 'Business Consulting Projects - Mike Yassine (Hussein Ali Yassine)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Business Consulting Projects & Marketing Expertise | Mike Yassine - Hussein Ali Yassine',
    description:
      'Strategic business and marketing consulting projects by Beirut-based consultant Hussein Ali Yassine. Expertise in business management, marketing strategy, and operational excellence.',
    images: [
      'https://www.husseinaliyassine.com/images/projects/og-projects-cover.png',
    ],
  },
};

export default function Projects() {
 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Business Consulting Projects & Marketing Case Studies
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mb-4">
            <strong>Mike Yassine (Hussein Ali Yassine)</strong>, Business Management Consultant and former Marketing Director at Spirit Advertising in Beirut, Lebanon, brings over 12 years of proven expertise in strategic business consulting, marketing leadership, and operational excellence.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl">
            Based in Beirut with extensive Middle East market knowledge, Hussein Yassine has partnered with organizations across industries to deliver measurable business results through strategic planning, marketing innovation, and business transformation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Featured Projects & Case Studies
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Explore how Mike Yassine has helped businesses in Lebanon and across the Middle East achieve growth through strategic consulting, marketing excellence, and business management expertise.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Business Consulting & Marketing Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hussein Ali Yassine combines business management acumen with marketing leadership experience from Spirit Advertising to deliver comprehensive consulting solutions
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Business Planning & Management</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Market analysis and competitive positioning for Lebanon and Middle East markets
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Long-term business vision development and strategic roadmap creation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Business model optimization and growth strategy consulting
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Regional expansion planning and market entry strategies
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Marketing Strategy & Brand Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Integrated marketing campaign development and execution
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Brand positioning and marketing communications strategy
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Digital marketing and advertising campaign management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Marketing team leadership and capability development
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Operational Excellence & Performance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Business process optimization and efficiency improvement
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cost reduction strategies and operational cost management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Performance metrics development and KPI management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Quality management and service excellence programs
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Business Development & Growth</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Revenue growth strategies and sales optimization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Strategic partnership development and alliance management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customer acquisition and retention strategy development
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Market opportunity identification and business case development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              12+ Years of Business Management & Marketing Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Hussein Yassine</strong> has spent over 12 years in Beirut, Lebanon, building deep expertise in business management and marketing strategy. As Marketing Director at Spirit Advertising, Mike Yassine developed and executed comprehensive marketing campaigns, led cross-functional teams, and delivered exceptional results for diverse clients across the Middle East region.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This extensive experience in both advertising agency leadership and business consulting enables Hussein Ali Yassine to provide unique insights that bridge creative marketing excellence with strategic business management, delivering holistic solutions that drive sustainable growth.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-gray-700">Years Experience in Beirut</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">Successful Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700">Client Satisfaction Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact Mike Yassine (Hussein Ali Yassine) to discuss how strategic business consulting and marketing expertise can help your organization achieve its goals in Lebanon and beyond
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}