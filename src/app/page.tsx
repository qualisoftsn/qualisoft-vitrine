/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ArrowRight,
  Briefcase,
  Cpu,
  Database,
  Facebook,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  Video,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VitrinePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Digitalisation",
      icon: <Cpu size={32} />,
      desc: "L'agilité sans compromis. Dématérialisation totale de vos flux pour une réactivité décisionnelle en temps réel.",
      color: "blue",
    },
    {
      title: "Solutions Métier",
      icon: <Layers size={32} />,
      desc: "Intelligence applicative sur-mesure. Des outils QHSE et industriels conçus pour la réalité du terrain africain.",
      color: "indigo",
    },
    {
      title: "Stratégie",
      icon: <Target size={32} />,
      desc: "Architectes de votre futur. Structuration de votre vision RD 2030 pour transformer vos ambitions en résultats.",
      color: "blue",
    },
    {
      title: "Conseil",
      icon: <Briefcase size={32} />,
      desc: "Ingénierie de la performance. Accompagnement expert sur les normes ISO pour ancrer l'excellence opérationnelle.",
      color: "indigo",
    },
    {
      title: "Formation",
      icon: <GraduationCap size={32} />,
      desc: "Forgeurs de talents. Transfert d'expertise pour pérenniser vos certifications et maîtriser les technologies.",
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans italic selection:bg-blue-600 overflow-x-hidden">
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-[100] bg-[#0B0F1A]/90 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/QSLogo.PNG"
            alt="Qualisoft Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <h1 className="text-xl font-black uppercase tracking-tighter hidden md:block italic">
            Qualisoft <span className="text-blue-600 font-black">Groupe</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
          <Link
            href="#services"
            className="hover:text-blue-500 transition-colors"
          >
            Nos Offres
          </Link>
          <Link href="#hubs" className="hover:text-blue-500 transition-colors">
            Plateformes
          </Link>
          <Link
            href="https://elite.qualisoft.sn"
            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            Plateforme Élite V1.00
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-[#0B0F1A] p-8 flex flex-col animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-16">
            <img src="/QSLogo.PNG" alt="Logo" className="h-10" />
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={32} className="text-blue-600" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-3xl font-black uppercase italic">
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>
              Nos Offres
            </Link>
            <Link href="#hubs" onClick={() => setIsMenuOpen(false)}>
              Plateformes
            </Link>
            <Link href="https://elite.qualisoft.sn" className="text-blue-600">
              Accès Élite
            </Link>
          </nav>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] mb-10">
              <Zap size={14} className="fill-blue-400" /> Souveraineté Numérique
              Sénégalaise
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              L'Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Augmentée.
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-xl leading-relaxed italic">
              Le hub d'innovation QHSE basé à Dakar. Nous fusionnons conseil
              stratégique et puissance applicative pour piloter votre
              performance depuis la Route du Lac Rose / Niagua - DAKAR.
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest">
              <Link
                href="#services"
                className="px-10 py-5 bg-white text-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
              >
                Nos Solutions
              </Link>
              <Link
                href="https://elite.qualisoft.sn"
                className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 italic"
              >
                Démo Élite <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative bg-slate-900/50 border border-white/10 rounded-[3rem] p-4 md:p-8 backdrop-blur-3xl shadow-2xl group">
            <img
              src="/qs_schema_01.jpg"
              alt="Stack Technique Qualisoft"
              className="relative w-full h-auto rounded-[2rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-3xl shadow-2xl hidden md:block animate-bounce">
              <ShieldCheck size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOS 5 OFFRES STRATÉGIQUES */}
      <section
        id="services"
        className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-900/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-20 italic">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
              Écosystème{" "}
              <span className="text-blue-600 italic">D'Expertise.</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
              5 piliers pour transformer votre organisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2 duration-500 flex flex-col h-full"
              >
                <div className="mb-8 text-blue-500 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed italic grow font-medium">
                  {service.desc}
                </p>
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOS PLATEFORMES (ÉLITE & MASTER) */}
      <section id="hubs" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Gouvernance <span className="text-blue-600">RD 2030</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative p-[1px] rounded-[3rem] bg-gradient-to-br from-blue-600/40 to-transparent hover:from-blue-600 transition-all duration-700">
              <div className="bg-[#0B0F1A] rounded-[2.9rem] p-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500">
                    <Layers size={40} />
                  </div>
                  <span className="text-[9px] font-black px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 uppercase">
                    SaaS QHSE
                  </span>
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-4">
                  Qualisoft <span className="text-blue-600">Élite</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed italic mb-10 grow">
                  Pilotage complet du SMI. Automatisation des audits et tableaux
                  de bord ISO en temps réel.
                </p>
                <Link
                  href="https://elite.qualisoft.sn"
                  className="w-full py-5 bg-blue-600 rounded-2xl text-center font-black uppercase text-[10px] hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
                >
                  Accéder à Élite
                </Link>
              </div>
            </div>

            <div className="group relative p-[1px] rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent hover:from-slate-500 transition-all duration-700">
              <div className="bg-[#0B0F1A] rounded-[2.9rem] p-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-white/5 rounded-2xl text-slate-400">
                    <Database size={40} />
                  </div>
                  <span className="text-[9px] font-black px-4 py-2 rounded-full border border-white/10 text-slate-500 uppercase">
                    Master Data
                  </span>
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-4">
                  Qualisoft{" "}
                  <span className="text-slate-500 font-black">Master</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed italic mb-10 grow">
                  La tour de contrôle de vos données critiques. Intégrité et
                  centralisation stratégique.
                </p>
                <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-center font-black uppercase text-[10px] cursor-default opacity-50">
                  Prochainement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#080B14]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 italic">
          <div>
            <img
              src="/QSLogo.PNG"
              alt="Qualisoft Logo"
              className="h-10 mb-8 grayscale opacity-70"
            />
            <p className="text-slate-500 text-sm italic font-medium">
              Digitalisation, Solutions métier, Stratégie et Conseil &
              Formation. Leader QHSE en Afrique de l'Ouest.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-500">
              Contact & Réseaux
            </h5>
            <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
              <Phone size={16} className="text-blue-500" /> +221 77 441 09 02
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
              <Mail size={16} className="text-blue-500" /> contact@qualisoft.sn
            </div>
            <div className="flex gap-6 mt-8">
              <Link
                href="https://www.linkedin.com/company/qualisoft-sn"
                className="text-slate-500 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://tiktok.com/@qualisoft2025"
                className="text-slate-500 hover:text-blue-500 transition-colors"
              >
                <Video size={20} />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-500">
              Siège Social
            </h5>
            <div className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed font-medium">
              <MapPin size={16} className="text-blue-500 mt-1 shrink-0" />
              Villa 247 - Cité Cheikh Hann, <br /> Route du Lac Rose - DAKAR
            </div>
          </div>
        </div>
        <div className="text-center pt-12 border-t border-white/5 opacity-50 font-black text-[9px] uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Qualisoft Groupe • Dakar, Sénégal
        </div>
      </footer>
    </div>
  );
}
