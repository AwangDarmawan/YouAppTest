import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import {AuthProvider} from "@/Context/AuthContext"
import { ProfileProvider } from '@/Context/ProfilContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test YouApp Awang Darmawan ',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body className={inter.className}>
     <AuthProvider>
      <ProfileProvider>
        {children}
      <ToastContainer theme="colored" />
      </ProfileProvider>
      </AuthProvider>
        </body>
    </html>
   
  )
}
