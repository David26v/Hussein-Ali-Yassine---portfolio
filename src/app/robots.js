export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/admin/'],
      },
    ],
    sitemap: 'https://www.husseinaliyassine.com/sitemap.xml',
    host: 'https://www.husseinaliyassine.com',
  };
}
