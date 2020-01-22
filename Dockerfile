FROM node:10 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
