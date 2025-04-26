import "./globals.css";
import ClientLayout from "./provider";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '800']
})

export const metadata = {
  title: "Maulana Hafidz Ismail",
  description: "It is my personal website. Here I put my works so you can be satisfied.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
