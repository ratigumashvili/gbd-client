// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   defaultLocale: 'en',
//   localePrefix: 'always', // Set to 'always', 'never', or 'as-needed' based on your needs
//   locales: ['en', 'ka'],
// });

// console.log('Middleware is running for locales: en, ka');

// export const config = {
//   // matcher: ['/((?!api|_next|.*\\..*).*)'],
//   matcher: ['/((?!_next|api).*)']
// };

// import createMiddleware from 'next-intl/middleware';

// export default function middleware(request) {
//   const { pathname, search } = request.nextUrl;
//   const detectedLocale = request.nextUrl.locale || 'none';
//   console.log(`Middleware running for: ${pathname}, Detected locale: ${detectedLocale}`);

//   return createMiddleware({
//     defaultLocale: 'en',
//     localePrefix: 'always',
//     locales: ['en', 'ka'],
//   })(request);
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*|favicon.ico|manifest.json).*)', '/'], // Match localized paths
// };


// working example

// import createMiddleware from 'next-intl/middleware';

// export default function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const detectedLocale = pathname.split('/')[1]; // Extract locale from the URL path
//   console.log(`Middleware running for: ${pathname}, Detected locale: ${detectedLocale || 'none'}`);

//   return createMiddleware({
//     defaultLocale: 'en',
//     localePrefix: 'always',
//     locales: ['en', 'ka'],
//   })(request);
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*|favicon.ico|manifest.json).*)', '/'],
// };

///

import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  const supportedLocales = ['en', 'ka'];
  
  const detectedLocale = pathname.split('/')[1];

  if (!supportedLocales.includes(detectedLocale)) {
    console.log(`Locale "${detectedLocale}" is not supported or missing, redirecting to default locale "en"`);
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  console.log(`Middleware running for: ${pathname}, Detected locale: ${detectedLocale}`);

  return createMiddleware({
    defaultLocale: 'en',
    localePrefix: 'always',
    locales: supportedLocales,
  })(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*|favicon.ico|manifest.json).*)', '/'],
};
