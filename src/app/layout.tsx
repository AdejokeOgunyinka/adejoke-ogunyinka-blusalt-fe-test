import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Sidebar } from "@/components/layout";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LogoIpsum",
  description: "LogoIpsum Dashboard App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <div className="w-full h-screen">
          <Sidebar />

          <div className="md:ml-24 lg:ml-[226px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
