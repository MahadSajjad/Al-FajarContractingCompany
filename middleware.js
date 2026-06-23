// Vercel Edge Middleware — returns HTTP 410 Gone for leftover paths from the
// old compromised WordPress site (casino/gambling SEO spam) so search engines
// drop them. Scoped via `matcher` so it ONLY runs for these patterns; all real
// site traffic skips it entirely.
//
// Add the exact spam URLs reported in Google Search Console to the matcher
// (e.g. specific '/archives/12345' slugs) before/at cutover (README §Migration).
export const config = {
  matcher: [
    '/archives/:path*',
    '/wp-admin/:path*',
    '/wp-content/:path*',
    '/wp-includes/:path*',
    '/wp-login.php',
    '/xmlrpc.php',
  ],
};

export default function middleware() {
  return new Response('410 Gone — this content has been permanently removed.', {
    status: 410,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
