FROM node:slim

MAINTAINER Robert Macfie <robert@macfie.se>

COPY package.json /app/
WORKDIR /app
RUN npm install
COPY . /app

ENV NODE_ENV Production

EXPOSE 5000
ENTRYPOINT node server.js
