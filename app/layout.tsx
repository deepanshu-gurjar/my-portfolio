import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Deepanshu Bhati | Full-Stack Developer",
  description:
    "Portfolio of Deepanshu Bhati, a full-stack developer building modern web applications with the MERN stack.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )}