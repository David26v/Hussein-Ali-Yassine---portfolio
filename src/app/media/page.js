import Link from 'next/link';

// SEO Metadata (Next.js App Router format)
export const metadata = {
  title: 'Media & Press | Hussein Ali Yassine – Strategic Business Consultant',
  description:
    'Featured in Business Leadership Magazine, Entrepreneur Insights, and industry conferences. Explore interviews, speaking engagements, and expert commentary by Hussein Ali Yassine on FMCG strategy, operational excellence, and scalable growth.',
  keywords: [
    'Hussein Ali Yassine media',
    'business strategy consultant press',
    'FMCG expert interviews',
    'operational excellence speaker',
    'growth strategy media appearances',
    'Nestlé Purina leadership insights',
    'business consultant Australia',
  ],
  alternates: {
    canonical: 'https://husseinali-yassine.com/media',
  },
  openGraph: {
    title: 'Media & Press | Hussein Ali Yassine',
    description:
      'Thought leadership in business strategy, FMCG, and operational excellence. Featured in top publications and global conferences.',
    url: 'https://husseinali-yassine.com/media',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Press | Hussein Ali Yassine',
    description:
      'Expert insights on business growth, FMCG leadership, and operational strategy from award-winning consultant Hussein Ali Yassine.',
  },
};

const mediaItems = [
  {
    id: 1,
    type: 'Interview',
    title: 'The Future of Business Consulting in a Digital Age',
    publication: 'Business Leadership Magazine',
    date: 'September 2025',
    description:
      'Hussein Ali Yassine discusses how traditional consulting models are evolving to meet the needs of digitally-native companies and the importance of practical, implementable strategies grounded in real-world FMCG experience.',
    link: '#',
  },
  {
    id: 2,
    type: 'Keynote',
    title: 'Operational Excellence Summit 2025',
    publication: 'Global Operations Forum (Sydney)',
    date: 'August 2025',
    description:
      'Delivered keynote on "Building Scalable Operational Frameworks for High-Growth FMCG Brands," drawing on his tenure at Nestlé Purina and GSK to illustrate frameworks that balance speed, quality, and cost efficiency.',
    link: '#',
  },
  {
    id: 3,
    type: 'Feature Article',
    title: 'Five Lessons from Scaling Multiple Businesses',
    publication: 'Entrepreneur Insights',
    date: 'July 2025',
    description:
      'Hussein Ali Yassine shares actionable insights from advising startups to multinational brands, emphasizing the role of category strategy, revenue architecture, and talent alignment in sustainable scaling.',
    link: '#',
  },
  {
    id: 4,
    type: 'Podcast',
    title: 'The Strategic Growth Podcast – Ep. 42',
    publication: 'Business Growth Network',
    date: 'June 2025',
    description:
      'In-depth conversation on sustainable business development, avoiding growth traps, and how to embed agility into legacy operational models—featuring real examples from Australian retail and pet care sectors.',
    link: '#',
  },
  {
    id: 5,
    type: 'Panel Discussion',
    title: 'The Future of Work and Business Operations',
    publication: 'Tech & Business Conference – Melbourne',
    date: 'May 2025',
    description:
      'Joined industry leaders to explore how automation, hybrid work, and AI are reshaping operational strategies in consumer goods—highlighting the need for human-centric process design.',
    link: '#',
  },
  {
    id: 6,
    type: 'Expert Commentary',
    title: 'Building Resilient Business Models Post-Pandemic',
    publication: 'Strategic Management Review',
    date: 'April 2025',
    description:
      'Analysis of how top-performing FMCG companies adapted supply chains, pricing, and go-to-market strategies during volatility—lessons applicable to any growth-stage business.',
    link: '#',
  },
  {
    id: 7,
    type: 'Award Feature',
    title: 'Purina Innovation Award: Reinventing Annual Business Planning',
    publication: 'Nestlé Internal Leadership Digest',
    date: 'December 2020',
    description:
      'Recognized as runner-up for redesigning the annual planning process to be more agile, data-driven, and cross-functional—now adopted across APAC markets.',
    link: '#',
  },
  {
    id: 8,
    type: 'TV Segment',
    title: 'Leadership in Crisis: FMCG Response to Supply Chain Shocks',
    publication: 'ABC Business Hour (Australia)',
    date: 'March 2023',
    description:
      'Provided expert commentary on how consumer goods leaders can maintain brand trust and operational continuity during global disruptions.',
    link: '#',
  },
];

export default function Media() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Media & Press
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Featured interviews, keynote speeches, and expert commentary by Hussein Ali Yassine on business strategy, FMCG leadership, operational excellence, and scalable growth.
          </p>
        </div>
      </section>

      {/* Media List */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {mediaItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/NewsArticle"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <span
                      className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                      itemProp="articleSection"
                    >
                      {item.type}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900" itemProp="headline">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-3">
                      <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                        <span itemProp="name">{item.publication}</span>
                      </span>
                      {' • '}
                      <time dateTime={new Date(item.date).toISOString()} itemProp="datePublished">
                        {item.date}
                      </time>
                    </p>
                    <p className="text-gray-700 mb-4" itemProp="description">
                      {item.description}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 group"
                        aria-label={`Read more about ${item.title}`}
                      >
                        View Full Coverage
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Media Inquiries & Speaking Engagements
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Hussein Ali Yassine is available for interviews, podcast features, panel discussions, and keynote speaking on topics including FMCG strategy, revenue growth, operational transformation, and leadership in high-velocity markets.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Contact for Media Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}