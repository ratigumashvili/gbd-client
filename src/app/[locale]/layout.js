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
import "@/src/app/styles/globals.css"

export async function generateMetadata({ params }) {
  const isProduction = process.env.NEXT_PUBLIC_APP_ENVIRONMENT === "production";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://biodiversity.iliauni.edu.ge";
  const imageUrl = `${siteUrl}/featured_image.png`;

  return {
    title: "Georgian Biodiversity Database",
    description: "This internet resource aims to introduce the world-wide scientific (and not only scientific) community to the biological diversity of Georgia (and, to certain extent, the Caucasus ecoregion).",
    keywords: "Biodiversity, Ilia State University, Institute of Ecology",
    robots: isProduction ? "index, follow" : "noindex, nofollow",
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: "Georgian Biodiversity Database",
      description: "This internet resource aims to introduce the world-wide scientific (and not only scientific) community to the biological diversity of Georgia (and, to certain extent, the Caucasus ecoregion).",
      url: siteUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Georgian Biodiversity Database",
        },
      ],
    },
  };
}


export default async function RootLayout({ children, params }) {
  const locale = params.locale || "en"

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
