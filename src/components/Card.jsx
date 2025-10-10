// components/Card.js
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ title, description, image, category, link }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="inline-block w-fit bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
          {category}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        
        {/* Read More Button */}
        <Link 
          href={link}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
        >
          Read More
          <svg 
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}