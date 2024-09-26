FROM node:18-alpine AS build

ARG BACKEND_URL

ENV BACKEND_URL=${BACKEND_URL}

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS final

COPY --from=build /build/dist /var/app/current

COPY nginx/default.conf.template /etc/nginx/templates/

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:80/health || exit 1