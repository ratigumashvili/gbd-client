import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from "./navigation"
 
export default createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales: ['en', 'ka']
});
 
export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(en|ka)/:path*']
  matcher: ['/((?!api|_next|.*\\..*).*)']
};