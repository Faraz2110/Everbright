import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Everbright",
  description: "This is my Next.js app",
  icons: {
    icon: "/favicon.png",   // <- put your favicon file in /public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional, for iOS homescreen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <WhatsAppButton />
      </body>
    </html>
  );
}

