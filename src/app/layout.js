import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../../styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins"
          ></link>
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

