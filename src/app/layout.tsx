import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/lib/SmoothScrollProvider"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const bebas = Bebas_Neue({
  subsets: ['latin'], // required
  weight: '400',      // Bebas Neue only has one weight
  display: 'swap',    // optional for better font loading behavior
});

export const metadata: Metadata = {
  title: "Inertia Studios | Creative studio specialising in CGI, Animation and Design.",
  description: "iner",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas} `}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>

      </body>
    </html>
  );
}
