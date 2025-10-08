import HeroSection from '@/components/HeroSection';
import Link from 'next/link';

export const metadata = {
  title: 'Hussein Ali Yassine | Strategic Business Consultant',
  description:
    'Award-winning FMCG strategist helping growth-focused companies scale operations, enter new markets, and build sustainable competitive advantage.',
};

// Mock data — replace with real case studies later
const featuredProjects = [
  {
    id: 1,
    title: 'Revenue Growth Framework for APAC Pet Care Brand',
    excerpt: 'Designed and implemented a category strategy that drove 37% YoY revenue growth across 8 markets.',
    tag: 'FMCG Strategy',
    link: '/case-studies/apac-pet-care',
  },
  {
    id: 2,
    title: 'Supply Chain Optimization – Nestlé Purina',
    excerpt: 'Reduced logistics costs by 22% while improving on-time delivery through network redesign.',
    tag: 'Operational Excellence',
    link: '/case-studies/purina-optimization',
  },
  {
    id: 3,
    title: 'Go-to-Market Launch for Health Beverage Startup',
    excerpt: 'Built channel strategy and retail partnership model resulting in 15,000+ points of distribution in 6 months.',
    tag: 'Market Expansion',
    link: '/case-studies/beverage-launch',
  },
];

const services = [
  {
    title: 'Strategic Growth Advisory',
    description: 'Market entry, category strategy, revenue architecture, and scalability planning for FMCG and consumer brands.',
  },
  {
    title: 'Operational Excellence',
    description: 'End-to-end process optimization, supply chain redesign, and cost-to-serve modeling.',
  },
  {
    title: 'Leadership & Team Enablement',
    description: 'Executive coaching, cross-functional alignment, and performance frameworks for high-growth teams.',
  },
];

const testimonials = [
  {
    quote: 'Hussein’s strategic clarity and operational rigor transformed how we approach growth. His work directly contributed to our best-performing quarter in 5 years.',
    author: 'CMO, Global Pet Nutrition Brand',
  },
  {
    quote: 'He doesn’t just advise — he embeds himself in the business and delivers executable plans with measurable ROI.',
    author: 'Founder & CEO, Health Beverage Startup',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact. Measurable results. Built for scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group block bg-gray-50 hover:bg-blue-50 rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-md"
              >
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How I Help Leaders Win
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused, actionable support for companies ready to scale with discipline.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <span className="text-blue-700 font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leaders Who Demand Results
          </h2>
          <div className="mt-12 space-y-10">
            {testimonials.map((testimonial, idx) => (
              <blockquote key={idx} className="italic text-gray-700 text-xl">
                “{testimonial.quote}”
                <footer className="mt-4 text-gray-900 font-semibold">
                  — {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let’s discuss your goals, challenges, and how we can build a strategy that delivers real impact.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}