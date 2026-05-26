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
  // Order posts by date — newest first — so the feed reflects publication order
  const ordered = [...journalPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const items = ordered
    .map((post) => {
      const url = `${siteConfig.url}/journal/${post.slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(siteConfig.name)}</dc:creator>
      <description>${escapeXml(post.summary)}</description>
      <category>${escapeXml(post.eyebrow)}</category>
    </item>`;
    })
    .join('');

  // lastBuildDate reflects the newest post, not the build moment
  const latestPubDate = ordered.length
    ? new Date(ordered[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteConfig.name)} · Journal</title>
    <link>${siteConfig.url}/journal</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Design notes, finish specifications, and the quiet details behind luxury remodeling in Las Vegas — from the VCV Vegas studio.</description>
    <language>en-US</language>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(siteConfig.legalName)}</copyright>
    <managingEditor>${escapeXml(siteConfig.email)} (${escapeXml(siteConfig.name)})</managingEditor>
    <webMaster>${escapeXml(siteConfig.email)} (${escapeXml(siteConfig.name)})</webMaster>
    <lastBuildDate>${latestPubDate}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${siteConfig.url}/icon</url>
      <title>${escapeXml(siteConfig.name)} · Journal</title>
      <link>${siteConfig.url}/journal</link>
      <width>32</width>
      <height>32</height>
    </image>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
