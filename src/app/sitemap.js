// app/sitemap.js
import { getAllBlogSlugs } from '@/data/blogData';
import { mediaItems } from '@/data/mediaData';

export default function sitemap() {
  const baseUrl = 'https://husseinali-yassine.com';
  const currentDate = new Date();

  const projectSlugs = [
    'regional-marketing-campaign-lebanon',
    'business-management-transformation',
    'digital-marketing-brand-development',
    'gcc-market-entry-strategy',
    'post-crisis-brand-revitalization',
    'b2b-sales-enablement-framework',
  ];

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic blog post routes (filtered)
  const blogSlugs = getAllBlogSlugs().filter(
    slug => !excludedPages.includes(slug)
  );
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic media routes (filtered)
  const mediaRoutes = mediaItems
    .filter(item => !excludedPages.includes(item.slug))
    .map((item) => ({
      url: `${baseUrl}/media/${item.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  // Dynamic project routes (filtered)
  const projectRoutes = projectSlugs
    .filter(slug => !excludedPages.includes(slug))
    .map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  // Combine all routes
  return [
    ...staticRoutes,
    ...blogRoutes,
    ...mediaRoutes,
    ...projectRoutes,
  ];
}