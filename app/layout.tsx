import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import "../public/Ali.png";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ali Ahmed",
  description: "Ali Ahmed Portfolio",
  icons: "/A.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable}`}>{children}</body>
    </html>
  );
}
