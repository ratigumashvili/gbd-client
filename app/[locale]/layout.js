import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import ThemeProviders from './_providers/themeProvider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Footer from './_components/Footer'
import Header from './_components/Header'

import { arial, firaGo, bpg } from "./_lib/fonts";

import './globals.css'

export async function generateMetadata({params}) {

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
  const messages = await getMessages();
  console.log('RootLayout resolved locale:', locale);

  return (
    <html lang={locale}>
      <body className={`${firaGo.variable} ${bpg.variable} ${arial.variable} font-firaGo flex flex-col h-screen`}>
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
