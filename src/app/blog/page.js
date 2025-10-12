// File: /app/blog/page.js

import { getAllBlogPosts } from '@/data/blogData'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Mike Yassine Blog | Business Strategy & Marketing Insights Lebanon & MENA',
  description: 'Strategic insights on business management, marketing, and organizational growth from Mike Yassine (Hussein Ali Yassine). 12+ years experience in Beirut, Lebanon & MENA markets. Former Spirit Advertising Marketing Director sharing proven frameworks for competitive advantage.',
  keywords: 'Mike Yassine blog, Hussein Ali Yassine, Hussein Yassine, business strategy MENA, marketing consulting Lebanon, business management Middle East, Spirit Advertising, competitive advantage, strategic planning Beirut, brand development, MENA markets, business consultant Lebanon',
  alternates: {
    canonical: 'https://www.husseinaliyassine.com/blog'
  },
  openGraph: {
    title: 'Mike Yassine | Business Strategy & Marketing Blog - Beirut Lebanon',
    description: 'Expert insights on business strategy, marketing, and growth from 12+ years in Beirut, Lebanon & MENA markets',
    type: 'website',
    url: 'https://www.husseinaliyassine.com/blog',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Yassine | Business Strategy Blog',
    description: 'Expert insights on business strategy and marketing from Beirut, Lebanon & MENA markets',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Mike Yassine (Hussein Ali Yassine)', url: 'https://www.husseinaliyassine.com/about' }],
  category: 'Business & Strategy',
}


function generateBlogSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Mike Yassine Business Strategy Blog',
    description: 'Expert insights on business management, marketing strategy, and organizational growth from Mike Yassine (Hussein Ali Yassine)',
    url: 'https://husseinali-yassine.com/blog',
    author: {
      '@type': 'Person',
      name: 'Hussein Ali Yassine',
      alternateName: ['Mike Yassine', 'Hussein Yassine'],
      jobTitle: 'Business Management Consultant & Marketing Strategist',
      description: '12+ years experience in Beirut, Lebanon and MENA region. Former Marketing Director at Spirit Advertising',
      url: 'https://husseinali-yassine.com/about',
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author
      },
      url: `https://husseinali-yassine.com/blog/${post.slug}`
    }))
  }
}

export default function Blog() {
  const allPosts = getAllBlogPosts()
  const featuredPost = allPosts[0]
  const posts = allPosts.slice(1)

  const categories = [
    { name: 'All Articles', count: allPosts.length, slug: 'all', icon: '📚' },
    { name: 'Business Strategy', count: allPosts.filter(p => p.category === 'Business Strategy').length, slug: 'business-strategy', icon: '🎯' },
    { name: 'Marketing', count: allPosts.filter(p => p.category === 'Marketing Strategy').length, slug: 'marketing', icon: '📱' },
    { name: 'Leadership', count: allPosts.filter(p => p.category === 'Leadership').length, slug: 'leadership', icon: '👔' },
    { name: 'Strategic Planning', count: allPosts.filter(p => p.category === 'Strategic Planning').length, slug: 'strategic-planning', icon: '📊' },
  ]

  const blogSchema = generateBlogSchema(allPosts)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Beautiful Hero Section */}
        <header className="relative pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 opacity-95"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-blue-200">
                <li>
                  <Link href="/" className="hover:text-white transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <span>→</span>
                <li className="text-white font-medium">Blog</li>
              </ol>
            </nav>

            <div className="text-center">
              <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
                📝 Business Strategy & Marketing Insights
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Mike Yassine's Strategic Insights
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
                Expert perspectives from <strong className="text-white">Hussein Ali Yassine</strong>
              </p>
              
              <p className="text-lg text-blue-200 max-w-4xl mx-auto mb-10">
                12+ years of business management and marketing leadership experience from Beirut, Lebanon • 
                Former Marketing Director at Spirit Advertising • Proven frameworks for MENA markets
              </p>

              {/* Value Props */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-bold text-white mb-2">Proven Frameworks</h3>
                  <p className="text-blue-100 text-sm">Tested across Lebanon and MENA markets</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-2">Actionable Insights</h3>
                  <p className="text-blue-100 text-sm">Implement strategies immediately</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold text-white mb-2">Real Experience</h3>
                  <p className="text-blue-100 text-sm">12+ years in Beirut business leadership</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Article - Beautiful Card */}
        {featuredPost && (
          <section className="py-16 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-4xl">⭐</div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
              </div>
              
              <article className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[400px]">
                    <Image   
                      src={featuredPost.header_image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        ⭐ {featuredPost.category}
                      </span>
                      <time className="text-gray-500 text-sm font-medium">
                        {featuredPost.readTime}
                      </time>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {featuredPost.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredPost.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:gap-3 transition-all shadow-lg hover:shadow-xl w-fit"
                    >
                      Read Full Article
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Categories - Beautiful Pills */}
        <nav className="py-8 px-4 bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  className="group px-6 py-3 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all font-semibold"
                >
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <span className="text-gray-700 group-hover:text-blue-600">
                    {category.name}
                  </span>
                  <span className="ml-2 text-gray-400 group-hover:text-blue-500">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Blog Grid - Modern Cards */}
        <main className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Latest Insights from Mike Yassine
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In-depth analysis and strategic frameworks from real-world experience in Beirut, Lebanon and across the MENA region
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.slug} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={post.back_ground_image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <time>{post.readTime}</time>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1 text-sm">
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <time className="text-sm text-gray-500">
                        {post.date}
                      </time>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all"
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
        </main>

        {/* About Author - Beautiful Section */}
        <aside className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-3xl mb-8">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-blue-600 text-4xl font-bold">HY</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About Mike Yassine
            </h2>
            
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              <strong className="text-white">Hussein Ali Yassine</strong> is a business management consultant and marketing strategist with over 12 years 
              of experience in Beirut, Lebanon and the MENA region. Former Marketing Director at Spirit Advertising, 
              Mike partners with business leaders to develop strategic clarity, strengthen market positioning, 
              and build sustainable competitive advantages. His practical approach and proven frameworks help 
              organizations navigate complex Middle Eastern markets and achieve measurable growth.
            </p>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition-all shadow-2xl"
            >
              Learn More About Hussein Yassine
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </aside>

        {/* Newsletter - Modern Design */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block p-3 bg-blue-500/20 rounded-2xl mb-6">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get Weekly Strategic Insights
            </h2>
            
            <p className="text-lg text-gray-300 mb-8">
              Join business leaders who rely on Mike Yassine's expertise. Get exclusive frameworks, 
              marketing insights, and growth strategies delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Subscribe
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Weekly Insights
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Spam
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Unsubscribe Anytime
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Final */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-6">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Work with Mike Yassine to develop customized strategies for your business in Lebanon and MENA markets
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}