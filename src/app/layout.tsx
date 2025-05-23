import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Header, Sidebar } from "@/components/layout";
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

          <div className="md:ml-24 lg:ml-[226px] 2xl:ml-[350px]">
            <Header />

            <div className="mt-[65px] md:mt-[79px] p-[15px] md:px-[30px] md:py-6 2xl:py-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
