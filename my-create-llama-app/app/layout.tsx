import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import me from "@/assets/higoomin.png";


const inter = Inter({ subsets: ["latin"] });

const OG_IMAGE = me || me

export const metadata: Metadata = {


  // metadataBase: new URL('www.aigoomin.shop'),
  metadataBase: new URL('https://www.aigoomin.shop'),
  title: {
    template: "%s | 안녕하세요! 권구민입니다 👋",
    default: "안녕하세요! 권구민입니다 👋",
  },
  description: "AI구민에게 권구민 지원자에 대해 뭐든지 질문해보세요!",
  openGraph: {
    url: 'https://www.aigoomin.shop',
  },

 twitter: {
  title:  "%s | 안녕하세요! 권구민입니다 👋",
  description: "AI구민에게 권구민 지원자에 대해 뭐든지 질문해보세요!",
  images: {
    url: "https://i.imgur.com/L3S6CNR.png",
  },
 }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="flex justify-center items-center h-screen">
            <div className="w-[48.125rem] h-full">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
