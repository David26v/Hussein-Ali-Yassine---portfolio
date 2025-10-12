import AboutContent from "./AboutContent";

export const metadata = {
  title: 'About Mike Yassine - Hussein Ali Yassine | Business Consultant & Marketing Strategist in Beirut, Lebanon',
  description:
    'Learn more about Mike Yassine (Hussein Ali Yassine), a Beirut-based business consultant and marketing strategist with over 12 years of experience in business management, marketing, and operational excellence across Lebanon and the Middle East.',
  keywords: [
    'Mike Yassine',
    'Hussein Ali Yassine',
    'business consultant Beirut',
    'marketing strategist Lebanon',
    'Spirit Advertising director',
    'Lebanon business consultant',
    'MENA marketing expert',
    'operational excellence consultant',
    'Beirut management consultant',
    'Middle East business strategy',
  ],
  alternates: {
    canonical: 'https://www.husseinaliyassine.com/about',
  },
  openGraph: {
    title: 'About Mike Yassine - Hussein Ali Yassine | Business Consultant Beirut Lebanon',
    description:
      'Hussein Ali Yassine, also known as Mike Yassine, is a business consultant and marketing strategist based in Beirut, Lebanon. Discover his journey in management, marketing, and strategic consulting across MENA.',
    url: 'https://www.husseinaliyassine.com/about',
    siteName: 'Hussein Ali Yassine',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://www.husseinaliyassine.com/images/hussein-headshot.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mike Yassine - Hussein Ali Yassine - Business Consultant Beirut Lebanon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mike Yassine - Hussein Ali Yassine | Business Consultant & Marketing Strategist',
    description:
      'Meet Beirut-based business consultant and marketing strategist Hussein Ali Yassine (Mike Yassine). Over 12 years of experience in strategy, marketing, and business leadership across Lebanon and the Middle East.',
    images: ['https://www.husseinaliyassine.com/images/hussein-headshot.jpeg'],
  },
};

export default function Page() {
  return <AboutContent />;
}