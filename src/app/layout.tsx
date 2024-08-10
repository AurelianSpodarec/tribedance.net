import './../styles/styles.scss'

import Footer from './_components/Footer'
import Header from './_components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0c1014]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
