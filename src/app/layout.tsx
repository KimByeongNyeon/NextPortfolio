import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/TransitionProvider";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my skills, projects, and blog posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        <Background />
        <Navbar />
        <main>
          <TransitionProvider>{children}</TransitionProvider>
        </main>
        <footer className="bg-gray-100/80 backdrop-blur-sm py-6 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} 김병년입니다. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
