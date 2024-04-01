import Footer from './_components/Footer'
import Header from './_components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Georgian Biodiversity Database',
  description: 'app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Header />
        <main className="container mx-auto flex-grow p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
