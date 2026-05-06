import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloudfix — ERP Lengkap untuk UKM FnB",
  description:
    "Kelola POS, inventori, keuangan, dan karyawan dalam satu platform. Dibuat khusus untuk restoran, kafe, dan usaha kuliner.",
  keywords: "ERP, UKM, FnB, POS, restoran, kafe, inventori, keuangan, HRIS",
  openGraph: {
    title: "Cloudfix — ERP Lengkap untuk UKM FnB",
    description:
      "Kelola POS, inventori, keuangan, dan karyawan dalam satu platform.",
    url: "https://saranatechnology.com",
    siteName: "Cloudfix by Sarana Technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
