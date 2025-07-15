import "./globals.css";
import localFont from 'next/font/local'

// Define your custom font
const geometrica = localFont({
  src: [
    {
      path: '../../public/fonts/Geometrica-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-geometrica',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geometrica.variable}>
      <body className={`antialiased ${geometrica.className}`}>{children}</body>
    </html>
  );
}
