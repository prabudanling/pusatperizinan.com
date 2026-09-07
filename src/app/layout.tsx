import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PusatPerizinan.com — Konsultan Perizinan Usaha #1 Indonesia | NIB, PT, CV, OSS, Halal, BPOM",
  description:
    "Jasa pengurusan perizinan usaha tercepat di Indonesia. NIB, Pendirian PT/CV/PMA, OSS-RBA, Sertifikasi Halal, BPOM, SNI, AMDAL, PBG/SLF. Proses 1-3 hari, garansi 100%, konsultasi gratis. Dipercaya 1.200+ bisnis di 34 provinsi.",
  keywords: [
    "jasa perizinan usaha",
    "buat NIB",
    "pendirian PT",
    "pendirian CV",
    "OSS RBA",
    "izin usaha",
    "jasa pengurusan izin",
    "sertifikasi halal",
    "izin BPOM",
    "konsultan perizinan",
    "pusat perizinan",
    "KBLI",
    "PBG SLF",
    "AMDAL",
  ],
  authors: [{ name: "PusatPerizinan.com" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PusatPerizinan.com — Urus Semua Izin Usaha, Tinggal Terima Beres",
    description:
      "Konsultan perizinan #1 Indonesia. NIB 1 hari, PT 3 hari, garansi 100%. Konsultasi gratis dengan AI + tim ahli. Dipercaya 1.200+ bisnis.",
    url: "https://pusatperizinan.com",
    siteName: "PusatPerizinan.com",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PusatPerizinan.com — Urus Semua Izin Usaha, Tinggal Terima Beres",
    description:
      "Konsultan perizinan #1 Indonesia. NIB 1 hari, PT 3 hari, garansi 100%. Konsultasi gratis.",
  },
};

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
