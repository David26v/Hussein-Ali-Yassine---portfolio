// app/media/[slug]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mediaItems } from '@/data/mediaData';

export async function generateStaticParams() {
  return mediaItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const article = mediaItems.find((item) => item.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Mike Yassine',
    };
  }

  return {
    title: `${article.title} | Mike Yassine - Hussein Ali Yassine`,
    description: article.description,
    keywords: [
      ...article.tags,
      'Mike Yassine',
      'Hussein Ali Yassine',
      'business consultant Beirut',
      'Lebanon business expert',
      'Middle East consulting',
    ],
    alternates: {
      canonical: `https://www.husseinaliyassine.com/media/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Mike Yassine`,
      description: article.description,
      url: `https://www.husseinaliyassine.com/media/${article.slug}`,
      siteName: 'Hussein Ali Yassine',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Mike Yassine`,
      description: article.description,
    },
  };
}

export default function MediaArticle({ params }) {
  const article = mediaItems.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Article Header */}
      <article className="pt-24 pb-16" itemScope itemType="https://schema.org/Article">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <span>→</span>
              <li>
                <Link href="/media" className="hover:text-blue-600 transition-colors">
                  Media
                </Link>
              </li>
              <span>→</span>
              <li className="text-gray-900 font-medium line-clamp-1">{article.type}</li>
            </ol>
          </nav>

          {/* Article Type Badge */}
          <div className="mb-6">
            <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${article.color === 'blue' ? 'from-blue-500 to-blue-600' : article.color === 'purple' ? 'from-indigo-500 to-blue-600' : article.color === 'green' ? 'from-green-500 to-emerald-600' : article.color === 'orange' ? 'from-orange-500 to-amber-600' : 'from-blue-500 to-indigo-600'} text-white rounded-full text-sm font-semibold`}>
              <span className="text-2xl">{article.icon}</span>
              {article.type}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" itemProp="headline">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{article.author}</span>
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={new Date(article.date).toISOString()} itemProp="datePublished">
                {article.date}
              </time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">{article.publication}</span>
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {article.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Article Content */}
          <div 
            className="article-content text-gray-700 leading-relaxed"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Share This Article</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.husseinaliyassine.com/media/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www.husseinaliyassine.com/media/${article.slug}&text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">More Media Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaItems
              .filter((item) => item.id !== article.id)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/media/${item.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${item.color === 'blue' ? 'from-blue-500 to-blue-600' : item.color === 'purple' ? 'from-indigo-500 to-blue-600' : item.color === 'green' ? 'from-green-500 to-emerald-600' : item.color === 'orange' ? 'from-orange-500 to-amber-600' : 'from-blue-500 to-indigo-600'} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12">
                      {item.icon}
                    </div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all text-sm">
                      Read More
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Media Coverage
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Connect with Mike Yassine
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For consulting inquiries, speaking engagements, or media requests
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}