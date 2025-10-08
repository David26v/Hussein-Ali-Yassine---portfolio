export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://husseinali-yassine.com/sitemap.xml',
    };
  }
  