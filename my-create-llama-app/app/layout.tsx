import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {

  title: {
    template: "안녕하세요! 권구민입니다 👋",
    default: "안녕하세요! 권구민입니다 👋",
  },
  description: "AI구민에게 권구민 지원자에 대해 뭐든지 질문해보세요!",
  openGraph: {
    images: ['./opengraph-image.png'],
  },
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
