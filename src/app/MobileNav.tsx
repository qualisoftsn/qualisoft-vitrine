"use client";
import React, { useState } from "react";
import { Menu, X, Zap, Layers, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 text-white">
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0B0F1A] flex flex-col p-8 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-16">
            <img src="/QSLogo.PNG" alt="Logo" className="h-8" />
            <button onClick={() => setIsOpen(false)} className="text-blue-500"><X size={32} /></button>
          </div>
          
          <nav className="flex flex-col gap-8">
            {[
              { n: "Digital", h: "https://elite.qualisoft.sn", i: Layers },
              { n: "Conseil", h: "#expertise", i: Briefcase },
              { n: "Academy", h: "#", i: GraduationCap }
            ].map((item) => (
              <Link 
                key={item.n} 
                href={item.h} 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-6 text-2xl font-black uppercase italic border-b border-white/5 pb-4"
              >
                <item.i className="text-blue-600" size={24} /> {item.n}
              </Link>
            ))}
          </nav>

          <Link 
            href="https://elite.qualisoft.sn" 
            className="mt-auto py-6 bg-blue-600 rounded-2xl text-center font-black uppercase tracking-widest italic"
          >
            Accès Élite
          </Link>
        </div>
      )}
    </div>
  );
}