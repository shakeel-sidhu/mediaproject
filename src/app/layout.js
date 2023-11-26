import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../../styles/globals.css";
import { Poppins } from 'next/font/google'

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const poppins = Poppins({ subsets: ['latin'],weight: "500", })
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}


