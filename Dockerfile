FROM node:slim

MAINTAINER Robert Macfie <robert@macfie.se>

COPY package.json /app/
WORKDIR /app
RUN npm install
COPY . /app

EXPOSE 8080
ENTRYPOINT node server.js
