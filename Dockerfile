FROM node:latest as node
WORKDIR /app
ADD package*.json ./
COPY . .
RUN npm install --force
RUN npm run build --prod

FROM nginx:latest
COPY --from=node /app/dist/marvel-api /usr/share/nginx/html

EXPOSE 80
