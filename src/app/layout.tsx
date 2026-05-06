import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarana Technology — Digital Accelerator & IT Consultant",
  description:
    "Sarana Technology membangun solusi digital untuk bisnis, pendidikan, dan sosial. Produk: Cloudfix ERP untuk UKM FnB. Portofolio: Smart School, SGP, DisabilitasKu.",
  keywords:
    "Sarana Technology, digital accelerator, IT consultant, Cloudfix, ERP, UKM, FnB, POS, Smart School, DisabilitasKu",
  openGraph: {
    title: "Sarana Technology — Digital Accelerator & IT Consultant",
    description:
      "Solusi digital untuk bisnis, pendidikan, dan sosial. Produk unggulan: Cloudfix ERP untuk UKM FnB.",
    url: "https://saranatechnology.com",
    siteName: "Sarana Technology",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sarana Technology",
              url: "https://saranatechnology.com",
              description: "Digital Accelerator & IT Consultant. Mempercepat pertumbuhan bisnis digital.",
              contactPoint: { "@type": "ContactPoint", telephone: "+62-859-7411-8829", contactType: "sales" },
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
