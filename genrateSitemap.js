const fs = require('fs');
const pages = [
  { loc: '/', priority: 1.0, changefreq: 'daily' },
  { loc: '/formation', priority: 0.9, changefreq: 'monthly' },
  { loc: '/devenir-chauffeur', priority: 0.9, changefreq: 'monthly' },
  { loc: '/devenir-sous-traitant', priority: 0.7, changefreq: 'yearly' },
  { loc: '/contact', priority: 0.7, changefreq: 'yearly' },
];

const urls = pages
  .map(
    (page) => `
<url>
    <loc>https://www.groupegaf.fr${page.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
</url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated!');
