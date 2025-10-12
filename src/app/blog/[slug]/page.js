// File: /app/blog/[slug]/page.js
'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/data/blogData'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  const params = useParams()
  const post = getBlogPost(params.slug)
  
  // Social media style interactions
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(247) 
  const [commentCount, setCommentCount] = useState(18) 
  const [showComments, setShowComments] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "SJ",
      text: "This is incredibly insightful! I've been struggling with market entry strategies in the MENA region. Would love to connect!",
      time: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Ahmed Hassan",
      avatar: "AH",
      text: "Great framework. We implemented similar strategies in our Dubai expansion and saw amazing results.",
      time: "5 hours ago",
      likes: 8
    },
    {
      id: 3,
      author: "Maria Silva",
      avatar: "MS",
      text: "Mike, your experience at Spirit Advertising really shows in this analysis. Thank you for sharing!",
      time: "1 day ago",
      likes: 15
    }
  ])

  if (!post) {
    return <div>Post not found</div>
  }

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([
        {
          id: comments.length + 1,
          author: "You",
          avatar: "YO",
          text: newComment,
          time: "Just now",
          likes: 0
        },
        ...comments
      ])
      setNewComment('')
      setCommentCount(commentCount + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Image Modal - Instagram/Facebook Style */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-6xl w-full h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={post.header_image}
              alt={post.title}
              fill
              className="object-contain"
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-200">{post.description}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation()
              // You can add navigation to previous image here
            }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation()
              // You can add navigation to next image here
            }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      {/* Instagram-style Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold">Back to Blog</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setBookmarked(!bookmarked)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <svg className={`w-6 h-6 ${bookmarked ? 'fill-blue-600 text-blue-600' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Instagram Style */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Post Card */}
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          {/* Author Header */}
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-md opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center ring-2 ring-white shadow-lg">
                  <span className="text-white font-bold text-sm">HY</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">Business Consultant • Beirut, Lebanon</p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Follow
            </button>
          </div>

          {/* Featured Image - Clickable */}
          <div 
            className="relative w-full h-[500px] cursor-pointer group"
            onClick={() => setShowImageModal(true)}
          >
            <Image
              src={post.header_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Bar - Instagram Style */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike}
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  {liked ? (
                    <svg className="w-7 h-7 text-red-500 fill-red-500" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  ) : (
                    <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </button>
                <button 
                  onClick={() => setShowComments(!showComments)}
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <button className="transition-transform hover:scale-110 active:scale-95">
                  <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
              <button 
                onClick={() => setBookmarked(!bookmarked)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <svg className={`w-7 h-7 ${bookmarked ? 'fill-gray-900' : ''} text-gray-700`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>

            {/* Likes & Stats */}
            <div className="mb-2">
              <p className="font-semibold text-sm text-gray-900">
                {likeCount.toLocaleString()} likes
              </p>
            </div>

            {/* Category Badge */}
            <div className="mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                {post.category}
              </span>
            </div>

            {/* Caption */}
            <div className="mb-2">
              <p className="text-gray-900">
                <span className="font-semibold mr-2">{post.author}</span>
                <span className="text-2xl font-bold block mt-1 mb-2">{post.title}</span>
                <span className="text-gray-700 text-base leading-relaxed">{post.description}</span>
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag) => (
                <span key={tag} className="text-blue-600 text-sm hover:underline cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>

            {/* View Comments */}
            <button 
              onClick={() => setShowComments(!showComments)}
              className="text-gray-500 text-sm mt-3 hover:text-gray-700"
            >
              View all {commentCount} comments
            </button>

            {/* Time */}
            <p className="text-xs text-gray-400 uppercase mt-2">{post.date} • {post.readTime}</p>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="border-t border-gray-100">
              {/* Comment Input */}
              <form onSubmit={handleComment} className="p-4 border-b border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">YO</span>
                </div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 text-sm outline-none"
                />
                <button 
                  type="submit"
                  disabled={!newComment.trim()}
                  className={`text-sm font-semibold ${newComment.trim() ? 'text-blue-600 hover:text-blue-700' : 'text-blue-300'}`}
                >
                  Post
                </button>
              </form>

              {/* Comments List */}
              <div className="max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-xs">{comment.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold mr-2">{comment.author}</span>
                          <span className="text-gray-700">{comment.text}</span>
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>{comment.time}</span>
                          <button className="font-semibold hover:text-gray-700">{comment.likes} likes</button>
                          <button className="font-semibold hover:text-gray-700">Reply</button>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Article Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-6 text-black">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-gray-200 pb-4">
            📖 Full Article
          </h2>
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-4 prose-ul:space-y-2
              prose-li:text-gray-700 prose-li:marker:text-blue-600
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <span>📚</span> More from Mike Yassine
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={related.back_ground_image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600">
                        {related.title}
                      </h3>
                      <p className="text-xs text-gray-500">{related.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 text-center text-white">
          <div className="text-4xl mb-4">💌</div>
          <h2 className="text-2xl font-bold mb-3">Stay Connected</h2>
          <p className="text-blue-100 mb-6">Get weekly insights from Mike Yassine</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}