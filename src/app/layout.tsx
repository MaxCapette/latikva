
import "./globals.css";


import { Chivo } from 'next/font/google'


import { ReactNode } from 'react';

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={chivo.variable}>
        {children}
      </body>
    </html>
  )
}