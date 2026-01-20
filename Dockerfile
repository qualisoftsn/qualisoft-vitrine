# Phase 1 : Build
FROM node:20-slim AS builder
WORKDIR /app

# Utilisation de chemins explicites pour éviter l'erreur ENOENT
COPY package.json ./
COPY package-lock.json ./

# Installation propre
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Phase 2 : Runner
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]