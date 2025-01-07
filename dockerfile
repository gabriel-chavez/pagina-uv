# Etapa 1: Construcción (builder)
FROM node:20 AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN [ -f package-lock.json ] || npm install --package-lock-only
RUN npm ci

COPY . . 

# Cache del build
RUN npm run build && mkdir -p .next/cache

# Etapa 2: Producción (runner)
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm ci --only=production

COPY .env.production .env
EXPOSE 3001

CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]
