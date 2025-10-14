// app/projects/[slug]/page.js
import { projectsData } from '@/data/ProjectData'
import Image from 'next/image'
import Link from 'next/link'



export async function generateMetadata({ params }) {
  const project = projectsData[params.slug]
  
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }
  
  return {
    title: `${project.title} | Mike Yassine - Hussein Ali Yassine`,
    description: project.challenge.substring(0, 155),
    keywords: `${project.category}, Mike Yassine, Hussein Yassine, Hussein Ali Yassine, business consulting Lebanon, ${project.location}`,
    openGraph: {
      title: project.title,
      description: project.challenge.substring(0, 155),
      url: `https://www.husseinaliyassine.com/projects/${params.slug}`,
      siteName: 'Mike Yassine | Business Consultant & Marketing Strategist',
      images: [
        {
          url: `https://www.husseinaliyassine.com${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
  }
}

export default function ProjectDetail({ params }) {
  const project = projectsData[params.slug]
  
  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {project.title}
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-sm text-gray-600 mb-1">Client</div>
              <div className="font-semibold text-gray-900">{project.client}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Duration</div>
              <div className="font-semibold text-gray-900">{project.duration}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Location</div>
              <div className="font-semibold text-gray-900">{project.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Our Approach</h2>
          <div className="space-y-8">
            {project.approach.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{phase.phase}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Results & Impact</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-3">{result.metric}</div>
                <div className="text-gray-700">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <svg className="w-12 h-12 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="border-t pt-6">
                <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                <div className="text-gray-600">{project.testimonial.company}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies & Services */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Services Provided</h3>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Similar Results for Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact Mike Yassine (Hussein Ali Yassine) to discuss how we can help transform your business
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}