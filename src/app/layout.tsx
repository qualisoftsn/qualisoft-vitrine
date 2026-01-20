import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qualisoft Groupe | Excellence Simplifiée",
  description:
    "Leader QHSE & Solutions Digitales de Gouvernance en Afrique de l'Ouest",
  icons: {
    icon: "/QSLogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased selection:bg-blue-600/30">{children}</body>
    </html>
  );
}
