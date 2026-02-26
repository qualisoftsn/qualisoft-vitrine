import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Clock, Tag } from "lucide-react";

async function getArticle(slug: string) {
  try {
    const res = await fetch(`https://elite.qualisoft.sn/api/public/content?slug=${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

// ✅ NEXT.js 15 : Correction de la signature de fonction
export default async function ArticleDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const article = await getArticle(slug);

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans italic pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/actualites" className="inline-flex items-center gap-2 text-blue-500 mb-12 hover:gap-4 transition-all uppercase text-[10px] font-black tracking-widest">
          <ArrowLeft size={16} /> Retour au flux
        </Link>

        <header className="mb-16 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-500 border border-blue-600/20 rounded-full">
              <Tag size={12} /> {article.category || "QUALISOFT NEWS"}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-blue-600" /> 
              {new Date(article.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9]">{article.title}</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent"></div>
        </header>

        <article className="relative">
          <div className="text-slate-300 text-lg md:text-xl leading-relaxed italic space-y-8 whitespace-pre-line font-medium">
            <p className="text-blue-400 font-black text-2xl border-l-4 border-blue-600 pl-6 my-12">
              {article.catch || "L'excellence opérationnelle au cœur de la transformation."}
            </p>
            {article.content}
          </div>
        </article>
      </div>
    </div>
  );
}