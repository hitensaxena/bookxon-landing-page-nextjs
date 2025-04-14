import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check for [object Object] in URL - this prevents 404 errors
  if (pathname === '/[object%20Object]' || pathname.includes('[object%20Object]')) {
    console.log('Middleware intercepted invalid navigation to:', pathname)
    // Redirect to homepage instead of showing 404
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // Continue with the request for valid URLs
  return NextResponse.next()
}

// Configure the paths to run middleware on - all routes except static assets
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
} 