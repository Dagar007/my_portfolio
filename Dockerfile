# Stage 1

FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN npm install
RUN npm install node-sass
COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/docs /usr/share/nginx/html