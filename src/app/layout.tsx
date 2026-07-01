import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = localFont({
  variable: "--font-cormorant",
  src: "./fonts/Recia-MediumItalic.woff",
  weight: "500",
  style: "italic",
});

const reciaRegular = localFont({
  variable: "--font-recia-regular",
  src: "./fonts/Recia-Regular.otf",
  weight: "400",
  style: "normal",
});

const shareTitle = "Sofía & Mateo | Invitación Demo";
const shareDescription = "Modelo demo de invitación web de casamiento";
const shareImage = {
  url: "/hero/pareja.jpg",
  width: 452,
  height: 678,
  alt: "Foto principal de Sofía y Mateo",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://demo-invitacion.example"),
  title: shareTitle,
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: "https://demo-invitacion.example",
    siteName: shareTitle,
    images: [shareImage],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${reciaRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
