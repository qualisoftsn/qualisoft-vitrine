import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Clock, Tag } from "lucide-react";

// Fonction de récupération de l'article spécifique
async function getArticle(slug: string) {
  try {
    const res = await fetch(`https://elite.qualisoft.sn/api/public/content?slug=${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Erreur liaison Matrix Article:", error);
    return null;
  }
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = await getArticle(slug);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans italic pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* --- NAVIGATION DE RETOUR --- */}
        <Link 
          href="/actualites" 
          className="inline-flex items-center gap-2 text-blue-500 mb-12 hover:gap-4 transition-all uppercase text-[10px] font-black tracking-widest animate-in fade-in"
        >
          <ArrowLeft size={16} /> Retour au flux
        </Link>

        {/* --- HEADER DE L'ARTICLE --- */}
        <header className="mb-16 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-500 border border-blue-600/20 rounded-full">
              <Tag size={12} /> {article.category || "QUALISOFT NEWS"}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-blue-600" /> 
              {new Date(article.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-blue-600" /> 
              5 min de lecture
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9] text-white">
            {article.title}
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent"></div>
        </header>

        {/* --- CORPS DE L'ARTICLE --- */}
        <article className="relative">
          {/* Effet de lueur en arrière-plan */}
          <div className="absolute -left-20 top-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

          <div className="text-slate-300 text-lg md:text-xl leading-relaxed italic space-y-8 whitespace-pre-line font-medium">
             {/* L'accroche en plus gros */}
            <p className="text-blue-400 font-black text-2xl border-l-4 border-blue-600 pl-6 my-12">
              {article.catch || "L'excellence opérationnelle au cœur de la transformation numérique."}
            </p>

            {/* Le contenu principal récupéré de la DB Élite */}
            {article.content}
          </div>
        </article>

        {/* --- FOOTER DE L'ARTICLE --- */}
        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-white italic">
              QS
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-white tracking-widest">Rédaction Qualisoft</p>
              <p className="text-[9px] font-bold uppercase text-slate-500 tracking-widest">Expertise QHSE & Digitalisation</p>
            </div>
          </div>

          <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-[10px] font-black uppercase tracking-widest italic">
            <Share2 size={16} className="text-blue-500" /> Partager l'article
          </button>
        </footer>

      </div>
    </div>
  );
}