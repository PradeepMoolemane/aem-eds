const fs = require('fs');
const path = require('path');

const urls = [
    { loc: 'https://main--aem-eds--pradeepmoolemane.aem.page/', lastmod: '2023-10-01', changefreq: 'daily', priority: 1.0 },
    { loc: 'https://main--aem-eds--pradeepmoolemane.aem.page/about', lastmod: '2023-10-01', changefreq: 'monthly', priority: 0.8 },
    // Add more URLs as needed
];

const generateSitemap = (urls) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
    <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`).join('')}
</urlset>`;

    return sitemap;
};

const sitemap = generateSitemap(urls);
const sitemapPath = path.join(__dirname, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`Sitemap generated at ${sitemapPath}`);