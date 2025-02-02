import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';

import ThemeProviders from './_providers/themeProvider'
import BookmarksProvider from './_providers/bookmarksProvider';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Footer from './_components/Footer'
import Header from './_components/Header'

import { arial, firaGo, bpg } from "./_lib/fonts";

import 'react-tooltip/dist/react-tooltip.css'
import 'react-slideshow-image/dist/styles.css'
import './globals.css'

export async function generateMetadata({ params }) {

  // const response = await ...

  return {
    title: "Georgian Biodiversity Database",
    description: "description",
    keywords: "keyword 1, keyword 2",
    icons: {
      icon: ['/favicon.ico'],
    },
    openGraph: {
      images: ['']
    },
  }

}

export default async function RootLayout({ children, params }) {
  const locale = params.locale || "en"
  // console.log('RootLayout resolved locale:', locale);

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${firaGo.variable} ${bpg.variable} ${arial.variable} font-firaGo flex flex-col h-screen`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProviders>
            <BookmarksProvider>
              <Header locale={locale} />
              <ToastContainer toastClassName="toast-custom" />
              <main className="container mx-auto flex-grow p-4">
                {children}
              </main>
              <Footer locale={locale} />
            </BookmarksProvider>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
