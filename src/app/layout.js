import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/componet/NavbarSection";
import { FooterSection } from "@/componet/FooterSection";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Startup Forge",
  description: "Build Your carreer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NavbarSection/>
        {children}
         <FooterSection/>
        </body>
    </html>
  );
}
