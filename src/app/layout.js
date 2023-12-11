import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";
//whatevr we write on this page applies on all the pages
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Nextjs Website",
  description: "Generated by Diksha Kumari Chhetri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
