import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configuration des polices pour une performance optimale
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées SEO "Elite"
export const metadata: Metadata = {
  title: "Qualisoft Groupe | L'Excellence Augmentée QHSE & Digitalisation",
  description: "Le hub d'innovation IT & IA basé à Dakar. Conseil stratégique, solutions métier sur-mesure et plateformes SaaS pour piloter la performance RD 2030 en Afrique de l'Ouest.",
  keywords: ["Qualisoft", "QHSE", "Sénégal", "Dakar", "Digitalisation", "SaaS", "ISO", "Expertise", "UEMOA"],
  authors: [{ name: "Qualisoft Groupe" }],
  metadataBase: new URL("https://qualisoft.sn"),
  icons: {
    icon: "/QSLogo.PNG",
    apple: "/QSLogo.PNG",
  },
  openGraph: {
    title: "Qualisoft Groupe - Souveraineté Numérique & Excellence",
    description: "Architectes de votre futur digital. Solutions QHSE et industrielles conçues pour la réalité du terrain africain.",
    url: "https://qualisoft.sn",
    siteName: "Qualisoft Groupe",
    images: [
      {
        url: "/qs_schema_01.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu Qualisoft RD 2030",
      },
    ],
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualisoft Groupe | Digitalisation",
    description: "Transformation digitale et performance opérationnelle à Dakar.",
    images: ["/qs_schema_01.jpg"],
  },
};

// Configuration du Viewport (Séparez en Next.js 15)
export const viewport: Viewport = {
  themeColor: "#0B0F1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0F1A] text-white selection:bg-blue-600/40`}
      >
        {children}
      </body>
    </html>
  );
}