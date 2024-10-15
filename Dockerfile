FROM node:18-alpine AS build

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS final

# ARG VITE_BACKEND_URL=https://backend

# ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

COPY --from=build /build/dist /var/app/current

RUN update-ca-certificates

COPY nginx/default.conf.template /etc/nginx/templates/

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:80/health || exit 1