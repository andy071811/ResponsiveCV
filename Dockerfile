FROM node:18-alpine AS build

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS final

COPY --from=build /build/dist /var/app/current

COPY nginx/ /etc/nginx/templates/