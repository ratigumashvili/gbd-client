import localfont from "next/font/local"

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { UserWrapper } from './_context/UserContext'
import ThemeProviders from './_providers/themeProvider'

import Footer from './_components/Footer'
import Header from './_components/Header'

import './globals.css'

const firaGo = localfont({
  src: [
    {
      path: "../../public/fonts/firago-300.ttf",
      weight: "300"
    },
    {
      path: "../../public/fonts/firago-400.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/firago-500.ttf",
      weight: "500"
    },
    {
      path: "../../public/fonts/firago-700.ttf",
      weight: "700"
    },
  ],
  variable: "--font-firaGo"
})

export const metadata = {
  title: 'Georgian Biodiversity Database',
  description: 'This internet resource aims to introduce the world-wide scientific (and not only scientific) community to the biological diversity of Georgia (and, to certain extent, the Caucasus ecoregion).',
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${firaGo.variable} flex flex-col h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <UserWrapper>
              <Header locale={locale} />
              <main className="container mx-auto flex-grow p-4">
                {children}
              </main>
              <Footer />
            </UserWrapper>
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
