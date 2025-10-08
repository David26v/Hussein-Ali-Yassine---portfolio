import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Hussein Ali Yassine | Strategic Business Consultant',
  description:
    'Learn about Hussein Ali Yassine’s 10+ years in global FMCG leadership, operational excellence, and strategic growth consulting for high-performance organizations.',
  keywords: [
    'Hussein Ali Yassine about',
    'FMCG business consultant',
    'operational excellence advisor',
    'strategic growth consultant Australia',
    'Nestlé Purina leadership',
  ],
  alternates: {
    canonical: 'https://husseinali-yassine.com/about', 
  },
  openGraph: {
    title: 'About Hussein Ali Yassine',
    description: 'Award-winning FMCG strategist & business consultant.',
    url: 'https://husseinali-yassine.com/about',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'profile',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Hussein Ali Yassine
          </h1>
          <p className="text-xl text-gray-700">
            Business Consultant | Strategic Advisor | FMCG Growth Leader
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Headshot */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="flex-1">
              <Image
                src="/images/hussein-headshot.jpeg"
                alt="Hussein Ali Yassine – Strategic Business Consultant"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl object-cover w-full max-w-md mx-auto md:mx-0"
                priority
              />
            </div>
            <div className="flex-1 prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Professional Background</h2>
              <p className="text-gray-700 leading-relaxed">
                Hussein Ali Yassine is a results-driven business consultant with over a decade of leadership experience in the global Fast-Moving Consumer Goods (FMCG) sector. 
                Formerly with Nestlé Purina Petcare Australia and GSK, he has partnered with executives across 15+ markets to drive operational excellence, accelerate revenue growth, 
                and build resilient, scalable business models.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Recognized with multiple internal awards—including the <strong>Purina Passion Award (Employee of the Year, 2017)</strong> and <strong>Innovation Award Runner-Up (2020)</strong>—
                Hussein combines strategic vision with hands-on execution to deliver measurable impact.
              </p>
            </div>
          </div>

          {/* Speaking / Engagement Photo */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Thought Leadership & Impact</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Hussein is a sought-after speaker on topics including FMCG strategy, revenue architecture, and operational transformation. 
                    He has delivered keynotes at industry forums across Australia, Asia, and Europe, sharing frameworks that help leaders navigate complexity with clarity.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    His insights have been featured in <em>Business Leadership Magazine</em>, <em>Entrepreneur Insights</em>, and executive panels on the future of work and supply chain resilience.
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src="/images/hussein-speaking.jpg"
                    alt="Hussein Ali Yassine speaking at industry conference on business strategy"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-md object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Philosophy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sustainable success isn’t built on strategy alone—it requires execution discipline, cultural alignment, and systems that scale. 
              Hussein’s approach bridges the gap between boardroom vision and frontline reality.
            </p>
          </div>

          {/* Areas of Focus with Icons (no images needed here) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Business Development & Growth',
                desc: 'Market entry, category strategy, partnership models, and revenue architecture for scalable growth.',
              },
              {
                title: 'Operational Excellence',
                desc: 'End-to-end process optimization, supply chain redesign, and cost-to-serve modeling.',
              },
              {
                title: 'Strategic Execution',
                desc: 'From planning to performance—building accountability, KPIs, and leadership alignment.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Team / Collaboration Photo */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-blue-50 rounded-2xl p-8">
              <div className="flex-1">
                <Image
                  src="/images/hussein-team.jpg"
                  alt="Hussein Ali Yassine collaborating with executive team on strategic planning"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md object-cover w-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Collaborative Approach</h2>
                <p className="text-gray-700 leading-relaxed">
                  Hussein doesn’t just advise—he embeds, enables, and empowers. Working shoulder-to-shoulder with leadership teams, 
                  he ensures strategies are co-created, understood, and owned by those who execute them.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This partnership model drives faster adoption, deeper impact, and lasting organizational capability.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let’s discuss how strategic clarity and operational discipline can accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}