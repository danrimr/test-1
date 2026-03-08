FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD["npm", "run", "start:prod"]
# No usamos EXPOSE aquí porque usaremos redes de Docker Compose
