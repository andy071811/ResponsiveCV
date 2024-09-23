FROM node:18-alpine AS build

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS final

COPY --from=build /build/dist /var/app/current

COPY nginx/ /etc/nginx/templates/

# COPY nginx/default.conf.template /etc/nginx/templates/
# COPY nginx/ssl /etc/nginx/ssl/

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:80/health || exit 1






# ssl_certificate     ssl-cert.crt;
#     ssl_certificate_key ssl-key.key;
#     ssl_protocols       TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
#     ssl_ciphers         HIGH:!aNULL:!MD5;