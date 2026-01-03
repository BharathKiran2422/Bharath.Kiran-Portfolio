import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bharath-kiran-portfolio.vercel.app';

  const routes = [
    '/',
    '/about',
    '/portfolio',
    '/resume',
    '/gallery',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
