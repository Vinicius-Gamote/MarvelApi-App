FROM node:14
WORKDIR /angular-app
COPY . .
RUN npm install
ENTRYPOINT npm start

