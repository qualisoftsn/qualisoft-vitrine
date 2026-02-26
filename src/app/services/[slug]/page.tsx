import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Cpu, Layers, Target, Briefcase, GraduationCap } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "digitalisation": <Cpu size={48} />,
  "solutions-metier": <Layers size={48} />,
  "strategie": <Target size={48} />,
  "conseil": <Briefcase size={48} />,
  "formation": <GraduationCap size={48} />,
};

async function getServiceData(slug: string) {
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

// ✅ NEXT.js 15 : params doit être traité comme une Promise
export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const service = await getServiceData(slug);

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans italic pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/#services" className="inline-flex items-center gap-2 text-blue-500 mb-12 hover:gap-4 transition-all uppercase text-[10px] font-black tracking-widest">
          <ArrowLeft size={16} /> Retour aux offres
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left duration-700">
            <div className="text-blue-600 mb-6">
              {ICON_MAP[service.type?.toLowerCase()] || ICON_MAP[slug] || <Cpu size={48} />}
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic leading-tight">{service.title}</h1>
            <p className="text-blue-400 text-xl font-bold mb-10">{service.catch || service.catchphrase}</p>
            <div className="text-slate-400 text-lg leading-relaxed mb-12 whitespace-pre-line font-medium">{service.content}</div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] h-fit sticky top-40 backdrop-blur-md">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Points Forts</h3>
              <ul className="space-y-6">
                {service.features?.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://elite.qualisoft.sn" target="_blank" className="block w-full mt-12 py-5 bg-blue-600 text-white rounded-2xl text-center font-black uppercase text-[10px] shadow-xl shadow-blue-600/20">
                Accès Plateforme Élite
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}