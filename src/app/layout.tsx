import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WrapperLayout from "@/components/layout/WrapperLayout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Programming Tadulako | Batch Soyuz",
  description: "Welcome to Programming Tadulako!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <WrapperLayout>{children}</WrapperLayout>
      </body>
    </html>
  );
}
