import {Nunito} from 'next/font/google'
import './globals.css'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import SearchModal from './components/modals/SearchModal'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}
const font = Nunito ({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser(); //SEPARA LA ACCION PERO PODEMOS PONERLO ACÁ A LA GETUSERINFO

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RegisterModal />
          <LoginModal />
          <RentModal  />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div
          className='pb-20 pt-28'
        >
          {children}
        </div>
      </body>
    </html>
  )
}

// LAYOUT ES UN DEFAULT SERVER COMPONENT, podríamos poner todo el getuserinfo aca adentro de la función 