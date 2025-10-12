"use client";

import React from "react";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/data/blogData";

const Toast = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-gray-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        {message}
      </div>
    </div>
  );
};

// ── Share Button (Fixed + Enhanced) ──
const ShareButton = ({ url, title, text }) => {
  const [showToast, setShowToast] = useState(false);
  const handleShare = useCallback(async () => {
    if (!url) {
      console.warn("ShareButton: Missing url");
      return;
    }

    try {
      if (navigator?.share) {
        await navigator.share({ title, text, url });
      } else {
        await navigator.clipboard.writeText(url);
        setShowToast(true);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Share failed:", err);
      }
    }
  }, [url, title, text]);

  const handleCloseToast = () => setShowToast(false);

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 hover:text-gray-900 shadow-sm"
        aria-label="Share this post"
        title="Share"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>

      <Toast
        show={showToast}
        message="Link copied to clipboard"
        onClose={handleCloseToast}
      />
    </>
  );
};

const BlogDetailedClient = () => {
  // ── State ──
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount] = useState(247);
  const [commentCount] = useState(18);
  const [showComments, setShowComments] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "SJ",
      text: "This is incredibly insightful! I've been struggling with market entry strategies in the MENA region. Would love to connect!",
      time: "2 hours ago",
      likes: 12,
    },
    {
      id: 2,
      author: "Ahmed Hassan",
      avatar: "AH",
      text: "Great framework. We implemented similar strategies in our Dubai expansion and saw amazing results.",
      time: "5 hours ago",
      likes: 8,
    },
    {
      id: 3,
      author: "Maria Silva",
      avatar: "MS",
      text: "Mike, your experience at Spirit Advertising really shows in this analysis. Thank you for sharing!",
      time: "1 day ago",
      likes: 15,
    },
  ]);

  // ── Derived Data ──
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // ── Constants ──
  const BASE_URL = "https://www.husseinaliyassine.com";
  const fullUrl = `${BASE_URL}/blog/${post.slug}`;

  // ── Handlers ──
  const handleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const handleComment = useCallback(
    (e) => {
      e.preventDefault();
      if (!newComment.trim()) return;

      const newCommentObj = {
        id: comments.length + 1,
        author: "You",
        avatar: "YO",
        text: newComment,
        time: "Just now",
        likes: 0,
      };

      setComments((prev) => [newCommentObj, ...prev]);
      setNewComment("");
      setShowComments(true);
    },
    [newComment, comments.length]
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-6xl w-full h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={post.header_image}
              alt={post.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-200">{post.description}</p>
            </div>
          </div>

          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-semibold">Back to Blog</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setBookmarked((prev) => !prev)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <svg
                  className={`w-6 h-6 ${
                    bookmarked ? "fill-blue-600 text-blue-600" : "text-gray-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <ShareButton
                url={fullUrl}
                title={post.title}
                text={post.description}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          {/* Author Header */}
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-md opacity-50"></div>
                <div className="relative w-full h-full rounded-full flex items-center justify-center ring-2 ring-white shadow-lg overflow-hidden">
                  <Image
                    src="/images/hussein-headshot.jpeg"
                    alt={post.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">
                  Business Consultant • Beirut, Lebanon
                </p>
              </div>
            </div>
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
              Follow
            </button>
          </div>

          {/* Featured Image */}
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
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-4">
                <svg
                  className="w-8 h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  {liked ? (
                    <svg
                      className="w-7 h-7 text-red-500 fill-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-7 h-7 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setShowComments((prev) => !prev)}
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <svg
                    className="w-7 h-7 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
                <ShareButton
                  url={fullUrl}
                  title={post.title}
                  text={post.description}
                />
              </div>
              <button
                onClick={() => setBookmarked((prev) => !prev)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <svg
                  className={`w-7 h-7 ${
                    bookmarked ? "fill-gray-900" : ""
                  } text-gray-700`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>

            <p className="font-semibold text-sm text-gray-900">
              {likeCount.toLocaleString()} likes
            </p>

            <div className="mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                {post.category}
              </span>
            </div>

            <div className="mb-2">
              <p className="text-gray-900">
                <span className="font-semibold mr-2">{post.author}</span>
                <span className="text-2xl font-bold block mt-1 mb-2">
                  {post.title}
                </span>
                <span className="text-gray-700 text-base leading-relaxed">
                  {post.description}
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-blue-600 text-sm hover:underline cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowComments((prev) => !prev)}
              className="text-gray-500 text-sm mt-3 hover:text-gray-700"
            >
              View all {commentCount} comments
            </button>

            <p className="text-xs text-gray-400 uppercase mt-2">
              {post.date} • {post.readTime}
            </p>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="border-t border-gray-100">
              <form
                onSubmit={handleComment}
                className="p-4 border-b border-gray-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    You
                  </span>
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
                  className={`text-sm font-semibold ${
                    newComment.trim()
                      ? "text-blue-600 hover:text-blue-700"
                      : "text-blue-300"
                  }`}
                >
                  Post
                </button>
              </form>

              <div className="max-h-96 overflow-y-auto text-black">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-xs">
                          {comment.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold mr-2">
                            {comment.author}
                          </span>
                          <span className="text-gray-700">{comment.text}</span>
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>{comment.time}</span>
                          <button className="font-semibold hover:text-gray-700">
                            {comment.likes} likes
                          </button>
                          <button className="font-semibold hover:text-gray-700">
                            Reply
                          </button>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Full Article */}
        <div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-6 text-black prose prose-lg max-w-none
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
                      <p className="text-xs text-gray-500">
                        {related.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetailedClient;
