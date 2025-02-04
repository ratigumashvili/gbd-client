// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   matcher: ['/', '/(ka|en)/:path*']
// };

import { NextResponse } from "next/server";

// Supported locales
const supportedLocales = ["en", "ka"];
const defaultLocale = "ka"; // Default locale

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip static files, APIs, and internal Next.js routes
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") // Skip static files like favicon.ico
  ) {
    return NextResponse.next();
  }

  // Check if the path includes a supported locale
  const hasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect to default locale if missing
  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static files and APIs
export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"], // Matches all dynamic routes
};
