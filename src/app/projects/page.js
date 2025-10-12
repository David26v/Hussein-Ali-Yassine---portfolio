
import ProjectClient from './ProjectClient';

export const metadata = {
  title:
    'Business Consulting Projects & Marketing Case Studies | Mike Yassine (Hussein Ali Yassine) – Beirut, Lebanon',
  description:
    'Explore business consulting and marketing case studies by Mike Yassine (Hussein Ali Yassine), a Beirut-based consultant and former Spirit Advertising Marketing Director. Discover real-world examples of business management, marketing leadership, and operational excellence projects across Lebanon and the Middle East.',
  keywords: [
    'Mike Yassine',
    'Hussein Ali Yassine',
    'Hussein Yassine',
    'business consultant Beirut',
    'marketing director Lebanon',
    'Spirit Advertising',
    'business strategy consultant',
    'marketing case studies',
    'business management consultant',
    'operational excellence Lebanon',
    'digital transformation consultant',
    'Middle East consulting projects',
    'Beirut marketing strategist',
  ],
  alternates: {
    canonical: 'https://www.husseinaliyassine.com/projects',
  },
  openGraph: {
    title:
      'Business Consulting Projects & Marketing Case Studies | Mike Yassine - Hussein Ali Yassine',
    description:
      'See how Beirut-based consultant and former Spirit Advertising Marketing Director, Hussein Ali Yassine (Mike Yassine), helped businesses across Lebanon and the Middle East achieve measurable growth through strategic consulting and marketing excellence.',
    url: 'https://www.husseinaliyassine.com/projects',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.husseinaliyassine.com/images/projects/b2b-sales-enablement-framework.png',
        width: 1200,
        height: 630,
        alt: 'Business Consulting Projects - Mike Yassine (Hussein Ali Yassine)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Business Consulting Projects & Marketing Expertise | Mike Yassine - Hussein Ali Yassine',
    description:
      'Strategic business and marketing consulting projects by Beirut-based consultant Hussein Ali Yassine. Expertise in business management, marketing strategy, and operational excellence.',
    images: [
      'https://www.husseinaliyassine.com/images/projects/b2b-sales-enablement-framework.png',
    ],
  },
};

export default function Page() {
  return <ProjectClient/>
}