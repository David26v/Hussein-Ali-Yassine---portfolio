import Link from 'next/link'
import Image from 'next/image'

export default function Card({ title, description, image, link, date, category }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {category}
          </span>
        )}
        {date && (
          <p className="text-sm text-gray-500 mb-2">{date}</p>
        )}
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        {link && (
          <Link 
            href={link}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
