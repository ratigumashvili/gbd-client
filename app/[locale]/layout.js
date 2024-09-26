import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import ThemeProviders from './_providers/themeProvider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Footer from './_components/Footer'
import Header from './_components/Header'

import { arial, firaGo, bpg } from "./_lib/fonts";

import './globals.css'

export const metadata = {
  title: 'Georgian Biodiversity Database',
  description: 'This internet resource aims to introduce the world-wide scientific (and not only scientific) community to the biological diversity of Georgia (and, to certain extent, the Caucasus ecoregion).',
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${firaGo.variable} ${bpg.variable} ${arial.variable} flex flex-col h-screen`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProviders>
            <Header locale={locale} />
            <ToastContainer toastClassName="toast-custom" />
            <main className="container mx-auto flex-grow p-4">
              {children}
            </main>
            <Footer locale={locale} />
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
