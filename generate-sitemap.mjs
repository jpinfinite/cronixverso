import fs from 'fs';
import path from 'path';

const baseUrl = 'https://cronixverso.com.br';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '', priority: '1.0', freq: 'daily' },
  { url: 'ferramentas-ia', priority: '0.9', freq: 'daily' },
  { url: 'sobre', priority: '0.6', freq: 'monthly' },
  { url: 'privacidade', priority: '0.4', freq: 'yearly' },
  { url: 'termos', priority: '0.4', freq: 'yearly' },
  { url: 'contato', priority: '0.6', freq: 'monthly' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

staticPages.forEach(p => {
  const loc = p.url ? `${baseUrl}/${p.url}` : `${baseUrl}/`;
  xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`;
});

const dataDir = './src/data';
const files = ['articles.ts', 'articles_part2.ts', 'articles_part3.ts', 'articles_part4.ts', 'articles_part5.ts'];
const seenIds = new Set();

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.matchAll(/id:\s*['"]([^'"]+)['"]/g);
    for (const match of matches) {
      const id = match[1];
      if (id && !seenIds.has(id)) {
        seenIds.add(id);
        xml += `  <url>
    <loc>${baseUrl}/artigo/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
      }
    }
  }
});

xml += `</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', xml, 'utf8');
console.log(`Generated sitemap.xml with ${staticPages.length + seenIds.size} URLs for Cronixverso.`);
