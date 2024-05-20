import Footer from './_components/Footer'
import Header from './_components/Header'
import { UserWrapper } from './_context/UserContext'
import ThemeProviders from './_providers/themeProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Georgian Biodiversity Database',
  description: 'app description',
}

export default function RootLayout({ children, params: {locale} }) {
  return (
    <html lang={locale}>
      <body className={`${inter.className} flex flex-col h-screen`}>
        <ThemeProviders>
          <UserWrapper>
            <Header locale={locale} />
            <main className="container mx-auto flex-grow p-4">
              {children}
            </main>
            <Footer />
          </UserWrapper>
        </ThemeProviders>
      </body>
    </html>
  )
}
