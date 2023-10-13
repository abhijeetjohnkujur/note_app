import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Note App',
  description: 'Note App which can be shared online with flexible functionalities',
  icons: {
    icon: [{
      media: "(prefers-color-scheme: light)",
      url: "/1.png",
      href:"/1.png"
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/2.png",
      href:"/2.png"
    }
  ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange storageKey='note-app-theme'>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
