import { Cpu, Layers, Target, Briefcase, GraduationCap } from "lucide-react";

export const servicesData: Record<string, any> = {
  "digitalisation": {
    title: "Digitalisation",
    icon: <Cpu size={48} />,
    catchphrase: "L'agilité sans compromis.",
    content: `Dans un monde où la donnée est le nouveau pétrole, Qualisoft transforme votre infrastructure physique en un écosystème numérique souverain. Nous ne nous contentons pas de numériser des documents ; nous réingénions vos processus métier pour une dématérialisation à 100%. 

Grâce à notre architecture Matrix SDE, bénéficiez d'une visibilité totale sur vos flux, d'une réduction de 60% des temps de traitement administratif et d'une sécurité conforme aux standards internationaux de protection des données.`,
    features: [
      "Workflow & Automatisation des processus critiques",
      "Zéro Papier : Dématérialisation certifiée",
      "Tableaux de bord prédictifs pour aide à la décision",
      "Archivage électronique à valeur probante"
    ]
  },
  "solutions-metier": {
    title: "Solutions Métier",
    icon: <Layers size={48} />,
    catchphrase: "Intelligence applicative sur-mesure.",
    content: `L'Afrique a ses réalités, Qualisoft a ses solutions. Nous développons des progiciels métiers (QHSE, Maintenance, Logistique) spécifiquement adaptés aux contraintes du terrain sahélien. 

Nos solutions 'Cloud-Native' mais 'Offline-Ready' garantissent la continuité de vos opérations, même en zone de connectivité instable. Chaque interface est pensée pour l'utilisateur final, maximisant l'adoption par vos équipes opérationnelles et la fiabilité des remontées terrain.`,
    features: [
      "Pilotage QHSE (Incidents, Audits, Plans d'actions)",
      "Gestion de la Maintenance Assistée par Ordinateur (GMAO)",
      "Suivi de production industrielle en temps réel",
      "Applications mobiles hybrides (iOS/Android/Web)"
    ]
  },
 "strategie": {
    title: "Stratégie & IA",
    icon: <Target size={48} />,
    catchphrase: "L'Intelligence Artificielle au service de la RD 2030.",
    content: `La stratégie ne se limite plus à l'analyse du passé. Chez Qualisoft, nous intégrons l'Intelligence Artificielle prédictive pour modéliser vos futurs scénarios de croissance. 

Nous transformons votre infrastructure en un centre de décision intelligent capable d'anticiper les ruptures de marché. Notre conseil stratégique fusionne expertise humaine et algorithmes de pointe pour garantir une souveraineté numérique totale sur le continent.`,
    features: [
      "Audit de maturité IA & Data-Governance",
      "Déploiement de modèles prédictifs décisionnels",
      "Optimisation algorithmique des coûts opérationnels",
      "Veille stratégique augmentée par l'IA"
    ]
  },
  "conseil": {
    title: "Conseil",
    icon: <Briefcase size={48} />,
    catchphrase: "Ingénierie de la performance.",
    content: `Certifier une organisation est une étape, pérenniser l'excellence en est une autre. Nos consultants experts en normes ISO (9001, 14001, 45001, 27001) vous accompagnent vers une conformité sans faille. 

Nous intégrons les meilleures pratiques mondiales à votre culture d'entreprise pour créer des systèmes de management intégrés (SMI) qui ne sont pas de simples dossiers, mais de réels moteurs de croissance opérationnelle.`,
    features: [
      "Mise en place de Systèmes de Management Intégrés",
      "Audits internes et diagnostics de conformité",
      "Gestion des risques et continuité d'activité",
      "Veille réglementaire et normative automatisée"
    ]
  },
  "formation": {
    title: "Formation",
    icon: <GraduationCap size={48} />,
    catchphrase: "Forgeurs de talents.",
    content: `Le capital humain est le pivot de toute transformation. Qualisoft Academy assure le transfert de compétences indispensable pour que vos équipes maîtrisent les technologies de demain. 

Nos formations ne sont pas théoriques ; elles sont basées sur des cas réels, vos données et vos outils. Nous formons vos collaborateurs à devenir les champions internes de votre souveraineté numérique.`,
    features: [
      "Certification aux outils Qualisoft Élite & Master",
      "Excel master - PowerBi master",
      "Formations QHSE et Normes ISO certifiantes",
      "Masterclass en Leadership Digital pour managers",
      "Ateliers pratiques sur l'IA appliquée au métier"
    ]
  }
};