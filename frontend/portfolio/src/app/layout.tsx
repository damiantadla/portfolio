
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavComponent from "@/components/nav/NavComponent";
import SectionSendEmail from "@/views/sectionSendEmail/SectionSendEmail";
import FooterView from "@/views/footer/FooterView";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Damian Tadla - Full Stack Developer",
  description: "Damian Tadla - an experienced Full Stack Developer specializing in building modern web applications and developing user interfaces.",
  icons: {
    icon: {
      url: "/favicon.ico",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NavComponent />
        {children}
      <SectionSendEmail/>
      <FooterView/>
      </body>
    </html>
  );
}
