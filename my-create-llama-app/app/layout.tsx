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
    url: "https://cdn.discordapp.com/attachments/1222405100346150945/1233773021479698432/higoomin.png?ex=662e502a&is=662cfeaa&hm=bd8154d7e030bc4201a5782554c202adc61bfe1668690a811705814b754610ae&",
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
