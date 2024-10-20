FROM node:18-alpine AS build

ARG VITE_DOMAIN_NAME=andyjohnsoncv.co.uk

ENV VITE_DOMAIN_NAME=${VITE_DOMAIN_NAME}

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS final

ARG EXPRESS_BACKEND=backend

ENV EXPRESS_BACKEND=${EXPRESS_BACKEND}

COPY --from=build /build/dist /var/app/current

RUN update-ca-certificates

COPY nginx/default.conf.template /etc/nginx/templates/

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:80/health || exit 1