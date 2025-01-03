# Etapa 1: Construcción
FROM node:20 AS builder

WORKDIR /app

# Copiar archivos del proyecto
COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Etapa 2: Servir la aplicación
FROM node:20-alpine

WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa anterior
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
