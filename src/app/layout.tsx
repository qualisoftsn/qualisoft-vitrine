import Ticker from "@/components/ui/Ticker"; // ✅ Import du nouveau Ticker
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Polices Qualisoft (Geist pour la modernité technologique)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Métadonnées SEO Stratégiques (Actualisées avec Services & Ressources)
export const metadata: Metadata = {
  title: {
    default: "Qualisoft Groupe | L'Excellence Augmentée QHSE & Digitalisation",
    template: "%s | Qualisoft Groupe", // Permet d'avoir "Digitalisation | Qualisoft Groupe" sur les sous-pages
  },
  description:
    "Hub d'innovation QHSE à Dakar. Digitalisation, Stratégie, Conseil ISO et Formation. Découvrez nos plateformes Élite & Master pour la performance RD 2030.",
  keywords: [
    "Qualisoft",
    "SDE",
    "QHSE Sénégal",
    "Digitalisation Afrique",
    "ISO 9001 Dakar",
    "SaaS RH",
    "Conseil Stratégique",
  ],
  authors: [{ name: "Qualisoft Groupe" }],
  metadataBase: new URL("https://qualisoft.sn"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/QSLogo.PNG",
    apple: "/QSLogo.PNG",
  },
  openGraph: {
    title: "Qualisoft Groupe - Souveraineté Numérique & Excellence",
    description:
      "L'intelligence métier sur-mesure pour le terrain africain. Plateformes Élite & Master.",
    url: "https://qualisoft.sn",
    siteName: "Qualisoft Groupe",
    images: [
      {
        url: "/qs_schema_01.png", // Corrigé en .png pour correspondre à ton fichier
        width: 1200,
        height: 630,
        alt: "Architecture Qualisoft RD 2030",
      },
    ],
    locale: "fr_SN",
    type: "website",
  },
};

// 3. Configuration Viewport (Standard Next.js 15)
export const viewport: Viewport = {
  themeColor: "#0B0F1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// 4. Structure RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0F1A] text-white selection:bg-blue-600/40 font-sans italic`}
      >
        {/* --- COUCHE 1 : BANDEAU D'INFORMATION (TICKER) --- */}
        <Ticker />

        {/* --- COUCHE 2 : CONTENU PRINCIPAL --- */}
        {/* On ajoute un padding-top de 34px pour compenser la hauteur du Ticker fixe */}
        <main className="relative pt-[34px]">{children}</main>

        {/* --- ANALYTICS DISCRET (Optionnel) --- */}
        {/* Tu pourras insérer tes scripts de tracking ici sans impacter le design */}
      </body>
    </html>
  );
}
