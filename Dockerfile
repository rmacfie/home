FROM node:slim

MAINTAINER Robert Macfie <robert@macfie.se>

COPY package.json /app/
WORKDIR /app
RUN npm install
COPY . /app

ENV NODE_ENV Production
ENV PORT 80

EXPOSE 80
ENTRYPOINT node server.js
