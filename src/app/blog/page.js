import Card from '@/components/Card'
import Link from 'next/link'

export const metadata = {
  title: 'Hussein Ali Yassine | Business Strategy Blog & FMCG Insights',
  description: 'Expert insights on business strategy, FMCG operations, and growth consulting from Hussein Ali Yassine. Learn proven frameworks for operational excellence, market expansion, and sustainable competitive advantage.',
  keywords: 'Hussein Ali Yassine, business strategy, FMCG consulting, operational excellence, business growth, supply chain optimization, strategic planning',
  alternates: {
    canonical: 'https://husseinali-yassine.com/blog'
  },
  openGraph: {
    title: 'Hussein Ali Yassine | Business Strategy & FMCG Insights',
    description: 'Expert insights on business strategy and FMCG operations from Hussein Ali Yassine',
    type: 'website',
    url: 'https://husseinali-yassine.com/blog'
  }
}

export default function Blog() {
  const featuredPost = {
    id: 'featured',
    title: 'Hussein Ali Yassine on Building Defensible Market Advantages in FMCG',
    description: 'Drawing from over a decade of global FMCG leadership, Hussein Ali Yassine shares the strategic frameworks that separate market leaders from followers. Learn how to build sustainable competitive moats through operational excellence, customer intelligence, and strategic positioning.',
    date: 'October 8, 2025',
    category: 'Featured Insights',
    readTime: '12 min read',
    image: '/blog/market-advantages.jpg',
    link: '/blog/building-defensible-market-advantages',
    tags: ['FMCG Strategy', 'Competitive Advantage', 'Market Leadership']
  }

  const posts = [
    {
      id: 1,
      title: 'Strategic Growth Frameworks for FMCG Companies in Emerging Markets',
      description: 'Hussein Ali Yassine explores proven methodologies for scaling FMCG operations in high-growth emerging markets. Learn how to navigate regulatory complexity, build distribution networks, and achieve market penetration while maintaining operational efficiency.',
      date: 'October 1, 2025',
      category: 'FMCG Strategy',
      readTime: '10 min read',
      image: '/blog/growth-strategies.jpg',
      link: '/blog/fmcg-emerging-markets-strategy',
      tags: ['Emerging Markets', 'FMCG', 'Growth Strategy']
    },
    {
      id: 2,
      title: 'Operational Excellence: How Hussein Ali Yassine Transforms Supply Chain Performance',
      description: 'Beyond cost cutting lies true operational excellence. Discover how leading FMCG organizations achieve breakthrough performance through process innovation, technology adoption, and cultural transformation. Real frameworks from Hussein Ali Yassine\'s consulting practice.',
      date: 'September 25, 2025',
      category: 'Operations Management',
      readTime: '9 min read',
      image: '/blog/operational-excellence.jpg',
      link: '/blog/supply-chain-operational-excellence',
      tags: ['Supply Chain', 'Operations', 'Efficiency']
    },
    {
      id: 3,
      title: 'The Data-Driven Approach to Strategic Planning in Consumer Goods',
      description: 'Hussein Ali Yassine shares the analytical frameworks that drive successful strategic planning in FMCG. Learn how to leverage market data, consumer insights, and competitive intelligence to develop robust plans that maintain flexibility while providing clear direction.',
      date: 'September 15, 2025',
      category: 'Strategic Planning',
      readTime: '11 min read',
      image: '/blog/strategic-planning.jpg',
      link: '/blog/data-driven-strategic-planning',
      tags: ['Data Analytics', 'Strategy', 'Planning']
    },
    {
      id: 4,
      title: 'Building High-Performance Business Development Teams: Lessons from 10+ Years in FMCG',
      description: 'Key principles for recruiting, structuring, and managing business development teams that consistently deliver revenue growth and strategic partnerships. Hussein Ali Yassine shares proven frameworks from global FMCG leadership roles.',
      date: 'September 1, 2025',
      category: 'Business Development',
      readTime: '8 min read',
      image: '/blog/bd-teams.jpg',
      link: '/blog/building-bd-teams',
      tags: ['Team Building', 'Business Development', 'Leadership']
    },
    {
      id: 5,
      title: 'Hussein Ali Yassine: Scaling FMCG Operations Across Multiple Markets',
      description: 'The challenges and opportunities of multi-market FMCG expansion. Learn the strategic considerations, operational frameworks, and risk mitigation strategies that enable successful international growth from someone who has done it across 15+ markets.',
      date: 'August 20, 2025',
      category: 'International Expansion',
      readTime: '13 min read',
      image: '/blog/multi-market-scaling.jpg',
      link: '/blog/scaling-fmcg-operations',
      tags: ['International Business', 'Scaling', 'FMCG']
    },
    {
      id: 6,
      title: 'Digital Transformation in Consumer Goods: Strategy Before Technology',
      description: 'Why successful digital transformation initiatives start with strategic clarity and organizational readiness rather than technology selection. Hussein Ali Yassine outlines the framework that has driven successful transformations in FMCG companies.',
      date: 'August 5, 2025',
      category: 'Digital Strategy',
      readTime: '10 min read',
      image: '/blog/digital-transformation.jpg',
      link: '/blog/digital-transformation-framework',
      tags: ['Digital Transformation', 'Technology', 'Change Management']
    },
    {
      id: 7,
      title: 'Competitive Intelligence: How to Build and Maintain Market Advantage',
      description: 'Hussein Ali Yassine reveals the systematic approach to competitive intelligence that keeps FMCG leaders ahead of market shifts. Learn how to gather, analyze, and act on competitive insights to maintain strategic advantage.',
      date: 'July 28, 2025',
      category: 'Competitive Strategy',
      readTime: '9 min read',
      image: '/blog/competitive-intelligence.jpg',
      link: '/blog/competitive-intelligence-framework',
      tags: ['Competitive Analysis', 'Market Intelligence', 'Strategy']
    },
    {
      id: 8,
      title: 'Business Resilience and Adaptation: Lessons from Global FMCG Leadership',
      description: 'How organizations build resilience through strategic foresight, operational agility, and continuous learning. Hussein Ali Yassine shares lessons from navigating market disruptions, economic shifts, and competitive threats across multiple continents.',
      date: 'July 15, 2025',
      category: 'Business Strategy',
      readTime: '11 min read',
      image: '/blog/resilience.jpg',
      link: '/blog/business-resilience-framework',
      tags: ['Resilience', 'Crisis Management', 'Adaptation']
    },
    {
      id: 9,
      title: 'Customer-Centric Growth: The FMCG Approach to Market Expansion',
      description: 'Moving beyond product-led to customer-led growth strategies. Hussein Ali Yassine explains how deep customer understanding drives sustainable expansion in consumer goods markets, with practical frameworks you can implement immediately.',
      date: 'July 1, 2025',
      category: 'Customer Strategy',
      readTime: '10 min read',
      image: '/blog/customer-centric.jpg',
      link: '/blog/customer-centric-growth',
      tags: ['Customer Experience', 'Growth', 'FMCG']
    },
    {
      id: 10,
      title: 'Performance Metrics That Matter: KPIs for FMCG Success',
      description: 'Not all metrics are created equal. Learn which key performance indicators truly drive FMCG business success and how to build a measurement framework that aligns operations with strategy. Insights from Hussein Ali Yassine\'s consulting practice.',
      date: 'June 22, 2025',
      category: 'Performance Management',
      readTime: '8 min read',
      image: '/blog/kpis.jpg',
      link: '/blog/fmcg-performance-metrics',
      tags: ['KPIs', 'Metrics', 'Performance']
    },
    {
      id: 11,
      title: 'The Future of FMCG: Trends Shaping Consumer Goods in 2025 and Beyond',
      description: 'Hussein Ali Yassine analyzes the macro trends reshaping the FMCG landscape: sustainability imperatives, direct-to-consumer models, supply chain innovation, and changing consumer behavior. Strategic recommendations for staying ahead.',
      date: 'June 10, 2025',
      category: 'Industry Trends',
      readTime: '12 min read',
      image: '/blog/fmcg-future.jpg',
      link: '/blog/future-of-fmcg',
      tags: ['Future Trends', 'FMCG', 'Innovation']
    },
    {
      id: 12,
      title: 'From Strategy to Execution: Bridging the Implementation Gap',
      description: 'Why do so many strategies fail in execution? Hussein Ali Yassine breaks down the common pitfalls and shares the frameworks that ensure your strategic plans translate into operational reality and measurable business results.',
      date: 'May 28, 2025',
      category: 'Strategy Execution',
      readTime: '9 min read',
      image: '/blog/execution.jpg',
      link: '/blog/strategy-to-execution',
      tags: ['Execution', 'Implementation', 'Change Management']
    }
  ]

  const categories = [
    { name: 'All Articles', count: posts.length + 1, slug: 'all' },
    { name: 'FMCG Strategy', count: 4, slug: 'fmcg-strategy' },
    { name: 'Operations', count: 3, slug: 'operations' },
    { name: 'Business Development', count: 2, slug: 'business-development' },
    { name: 'Strategic Planning', count: 3, slug: 'strategic-planning' },
    { name: 'Leadership', count: 2, slug: 'leadership' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section with SEO-rich content */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              Business Strategy & FMCG Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Hussein Ali Yassine: Strategic Insights for Business Leaders
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed mb-8">
            Expert perspectives on business strategy, FMCG operations, and growth consulting. 
            Drawing from 10+ years of global leadership experience, Hussein Ali Yassine shares 
            actionable frameworks, proven methodologies, and strategic insights that drive 
            measurable business results.
          </p>
          
          {/* Value proposition points */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Proven Frameworks</h3>
                <p className="text-gray-600 text-sm">Tested across 15+ markets and $50M+ in revenue impact</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Actionable Insights</h3>
                <p className="text-gray-600 text-sm">Practical strategies you can implement immediately</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Real-World Experience</h3>
                <p className="text-gray-600 text-sm">Lessons from global FMCG leadership roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h2 className="text-3xl font-bold text-white">Featured Article</h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">HAY</span>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={featuredPost.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Read Full Article
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                {category.name} <span className="text-gray-400">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Latest Articles from Hussein Ali Yassine</h2>
            <p className="text-gray-600 max-w-3xl">
              In-depth analysis and strategic frameworks covering FMCG operations, business development, 
              and growth strategies from real-world experience across global markets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-20">HAY</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1 text-sm">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={post.link}
                      className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Hussein Ali Yassine Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl font-bold">HAY</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            About Hussein Ali Yassine
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hussein Ali Yassine is a strategic business consultant specializing in FMCG operations, 
            operational excellence, and growth strategy. With over 10 years of global leadership 
            experience across 15+ markets and 4 continents, Hussein partners with executives and 
            business leaders to drive sustainable competitive advantage, accelerate market expansion, 
            and build high-performance organizations. His data-driven approach and proven frameworks 
            have delivered over $50M in revenue impact for clients ranging from emerging startups 
            to established enterprises.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn More About Hussein Ali Yassine
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Subscribe to Hussein Ali Yassine's Strategic Insights
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Get exclusive business strategy insights, FMCG operational frameworks, and proven 
            growth methodologies delivered directly to your inbox. Join 2,500+ business leaders 
            who rely on Hussein Ali Yassine's expertise to stay ahead of market trends.
          </p>
          
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-blue-200">
              No spam. Unsubscribe anytime. Read by CEOs, founders, and business leaders worldwide.
            </p>
          </form>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">2,500+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Weekly Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">100% Privacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Transform Your Business Strategy?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Work directly with Hussein Ali Yassine to develop customized strategies for your 
            organization's unique challenges and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Schedule a Strategic Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}