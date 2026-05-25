import { journalPosts } from '@/lib/journal';
import { siteConfig } from '@/lib/site';

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const items = journalPosts
    .map((post) => {
      const url = `${siteConfig.url}/journal/${post.slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.summary)}</description>
      <category>${escapeXml(post.eyebrow)}</category>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} · Journal</title>
    <link>${siteConfig.url}/journal</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Design notes, finish specifications, and the quiet details behind luxury remodeling in Las Vegas — from the VCV Vegas studio.</description>
    <language>en-US</language>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(siteConfig.legalName)}</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
