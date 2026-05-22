import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fspinoydental.com'; // Placeholder URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example of disallowed route
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
