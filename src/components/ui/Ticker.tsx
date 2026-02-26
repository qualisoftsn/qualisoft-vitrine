"use client";
import React from "react";
import { Zap } from "lucide-react";

const tickerItems = [
  "NOUVEAU : Plateforme Élite v4.0 opérationnelle",
  "CONFORMITÉ : Mise à jour des référentiels ISO 2030",
  "INFO : Nouveau Hub d'innovation à Dakar Lac Rose",
  "OFFRE : -15% sur les audits de diagnostic jusqu'au 31 Mars",
  "SUCCESS : 98% de réussite aux certifications ISO en 2025"
];

export default function Ticker() {
  return (
    <div className="fixed top-0 w-full z-[120] bg-blue-600 text-white py-2 overflow-hidden border-b border-blue-400/30">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-8 text-[9px] font-black uppercase tracking-[0.2em] italic">
            <Zap size={12} className="fill-white" />
            {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          width: fit-content;
          animation: ticker 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}