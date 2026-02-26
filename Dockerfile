# --- PHASE 1 : INSTALLATION DES DÉPENDANCES ---
FROM node:20-slim AS deps
# Installation de libc6 pour la compatibilité Sharp sur Linux
RUN apt-get update && apt-get install -y libc6 && rm -rf /var/lib/apt/lists/*
WORKDIR /app

COPY package.json package-lock.json ./
# Utilisation de ci pour une installation propre et stricte
RUN npm ci --legacy-peer-deps

# --- PHASE 2 : BUILD DE L'APPLICATION ---
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'environnement pour le build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Génération du build standalone
RUN npm run build

# --- PHASE 3 : RUNNER FINAL (LÉGER) ---
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Sécurité : Création d'un utilisateur non-root
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs nextjs

# 1. Copie des fichiers publics (Logos, Images)
COPY --from=builder /app/public ./public

# 2. Copie du moteur standalone généré
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# 3. CRUCIAL : Copie des fichiers statiques dans le dossier standalone
# Next.js standalone cherche .next/static à la racine de son dossier d'exécution
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Démarrage direct via le serveur Node
CMD ["node", "server.js"]