"use client";
import { FileText, Download, Lock, Link } from "lucide-react";

export default function ResourcePage() {
  const docs = [
    { title: "Plaquette Qualisoft Groupe 2026", size: "2.4 MB", type: "PDF" },
    { title: "Guide de Transition ISO 2030", size: "1.8 MB", type: "PDF" },
    { title: "Catalogue Formations Elite", size: "3.1 MB", type: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white pt-40 pb-20 px-6 italic">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">
          Centre de <span className="text-blue-600">Ressources.</span>
        </h2>
        <p className="text-slate-500 font-medium mb-16 max-w-2xl">Accédez à nos documents stratégiques et guides méthodologiques pour piloter votre performance.</p>

        <div className="space-y-4">
          {docs.map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-slate-900/40 border border-white/5 rounded-3xl hover:bg-blue-600/5 transition-all group">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1">{doc.title}</h4>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">{doc.type} • {doc.size}</span>
                </div>
              </div>
              <button className="p-4 text-slate-500 hover:text-blue-500 transition-colors">
                <Download size={20} />
              </button>
            </div>
          ))}
          {/* Section verrouillée pour clients Elite */}
          <div className="mt-12 p-8 border border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center text-center">
            <Lock size={32} className="text-slate-600 mb-4" />
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Espace réservé aux clients Élite</p>
            <Link href="https://elite.qualisoft.sn" className="text-blue-600 text-[10px] font-black uppercase mt-2 hover:underline">S'authentifier</Link>
          </div>
        </div>
      </div>
    </div>
  );
}