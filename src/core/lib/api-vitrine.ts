export async function getVitrineData(type: "FORMATION" | "ACTUALITE") {
  // On appelle l'API de ton domaine Élite
  const res = await fetch(`https://elite.qualisoft.sn/api/public/content?type=${type}`, {
    next: { revalidate: 3600 } // Mise à jour automatique toutes les heures (ISR)
  });
  
  if (!res.ok) return [];
  return res.json();
}