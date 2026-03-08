FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Copiamos la build de React
COPY --from=build /app/dist /usr/share/nginx/html
# Copiamos nuestra configuración proxy de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
