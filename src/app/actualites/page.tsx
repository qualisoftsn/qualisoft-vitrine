import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

// Fonction de récupération des actualités depuis le Dashboard Élite
async function getNewsData() {
  try {
    const res = await fetch(`https://elite.qualisoft.sn/api/public/content?type=ACTUALITE`, {
      next: { revalidate: 3600 }, // Mise à jour auto toutes les heures
    });

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Erreur Sync Actualités Matrix:", error);
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNewsData();

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white pt-40 pb-20 px-6 italic font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de Section */}
        <div className="mb-20 animate-in fade-in slide-in-from-top duration-700">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            Flux <span className="text-blue-600">Actualités.</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600"></div>
        </div>

        {news.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-[3rem]">
            <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.4em]">
              En attente de synchronisation Matrix...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item: any, i: number) => (
              <div 
                key={item.id || i} 
                className="group p-8 rounded-[2.5rem] bg-slate-900/30 border border-white/5 hover:border-blue-600/50 transition-all duration-500 flex flex-col h-full animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Header de la carte */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black px-3 py-1 bg-blue-600/10 text-blue-500 border border-blue-600/20 rounded-full uppercase">
                    {item.category || "QUALISOFT"}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold">
                    <Calendar size={12} /> 
                    {new Date(item.createdAt).toLocaleDateString('fr-FR')}
                  </div>
                </div>

                {/* Corps de la carte */}
                <h3 className="text-2xl font-black uppercase mb-6 leading-tight group-hover:text-blue-500 transition-colors grow">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-xs mb-8 line-clamp-3 font-medium">
                  {item.catch || item.content.substring(0, 120) + "..."}
                </p>

                {/* Lien vers le détail */}
                <Link 
                  href={`/actualites/${item.slug}`}
                  className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-600 tracking-widest group-hover:gap-4 transition-all"
                >
                  Lire l'article <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}