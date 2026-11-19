import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The BioMed Journal",
  description: "website for The BioMed Journal",
  icons: {
    icon: "/tbmj-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
