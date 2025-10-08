// app/sitemap.js
export default function sitemap() {
    const baseUrl = 'https://husseinali-yassine.com' 
  
    const routes = [
      '',
      '/about',
      '/projects',
      '/blog',
      '/media',
      '/contact',
    ].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    }))
  
    return routes
  }
  
  export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://husseinali-yassine.com/sitemap.xml',
    }
  }