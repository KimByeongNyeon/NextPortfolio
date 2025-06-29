import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/TransitionProvider";
import Background from "./components/Background";

export const metadata: Metadata = {
  title: {
    default: "김병년's 포트폴리오",
    template: "%s | 김병년's 포트폴리오"
  },
  icons: {
    icon: '/assets/profile.png',
  },
  description: "프론트엔드 개발자 김병년의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 다양한 프로젝트와 개발 경험을 소개합니다.",
  keywords: ["프론트엔드", "개발자", "React", "Next.js", "TypeScript", "JavaScript", "포트폴리오", "김병년"],
  authors: [{ name: "김병년", url: "https://github.com/KimByeongNyeon" }],
  creator: "김병년",
  publisher: "김병년",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://next-portfolio-bbwx.vercel.app/'), // 실제 도메인으로 변경 필요
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "김병년's 포트폴리오",
    description: "프론트엔드 개발자 김병년의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 다양한 프로젝트와 개발 경험을 소개합니다.",
    url: 'https://next-portfolio-bbwx.vercel.app/', // 실제 도메인으로 변경 필요
    siteName: "김병년's 포트폴리오",
    images: [
      {
        url: '/assets/og-image.jpg', // 실제 OG 이미지 경로로 변경 필요
        width: 1200,
        height: 630,
        alt: "김병년 프론트엔드 개발자 포트폴리오",
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "김병년's 포트폴리오",
    description: "프론트엔드 개발자 김병년의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 다양한 프로젝트와 개발 경험을 소개합니다.",
    images: ['/assets/profile.png'], // 실제 OG 이미지 경로로 변경 필요
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'google-site-verification-code', // Google Search Console 인증 코드
    // other: {
    //   'naver-site-verification': 'naver-verification-code', // 네이버 웹마스터 인증 코드
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased relative min-h-screen">
        <Background />
        <Navbar />
        <main>
          <TransitionProvider>{children}</TransitionProvider>
        </main>
        
      </body>
    </html>
  );
}
