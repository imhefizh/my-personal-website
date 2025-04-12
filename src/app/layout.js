import Image from "next/image";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '800']
})

export const metadata = {
  title: "Lab",
  description: "Let's doing things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
