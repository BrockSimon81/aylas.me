import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayla",
  description: "Ayla's home on the web.",
};

export const viewport = {
  themeColor: "#fff8f3",
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
  );
}
