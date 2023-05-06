import './globals.css'
import { Nunito } from 'next/font/google'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/Modal/RegisterModel'
import ToasterProvider from './providers/ToasterProviders'
import ClientOnly from './components/ClientOnly'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sailor Travel',
  description: 'The Next-Typescript app',
}

const font  = Nunito ({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>

        <ToasterProvider/>
        <RegisterModal/>
        <Navbar/>
        </ClientOnly>
        
        
        {children}
        
        </body>
    </html>
  )
}
