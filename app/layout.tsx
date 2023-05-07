import './globals.css'
import { Nunito } from 'next/font/google'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/Modal/RegisterModel'
import ToasterProvider from './providers/ToasterProviders'
import ClientOnly from './components/ClientOnly'
import LoginModal from './components/Modal/LoginModel'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/Modal/RentModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sailor Travel',
  description: 'The Next-Typescript app',
}

const font  = Nunito ({
  subsets:["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUSer = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>

        <ToasterProvider/>
        <LoginModal/>
        <RegisterModal/>
        <RentModal/>
        <Navbar currentUser={currentUSer}/>
        </ClientOnly>
        
        
        {children}
        
        </body>
    </html>
  )
}
