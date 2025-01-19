import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'en',
  localePrefix: 'always', // Set to 'always', 'never', or 'as-needed' based on your needs
  locales: ['en', 'ka'],
});

console.log('Middleware is running for locales: en, ka');

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Match all relevant paths
};
