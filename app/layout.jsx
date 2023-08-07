"use client"

import { Inter } from 'next/font/google'
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReduxProvider } from '@/redux/provider';


// export const metadata = {
//   title: 'Parfum',
//   description: 'E-commerce site for shops',
// }

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <title>E-commerce</title>
          <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            />
        </head>
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
  )
}
