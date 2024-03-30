ARG NODE_VERSION=node:21.6.0

FROM $NODE_VERSION AS dependency-base

RUN mkdir -p /app
WORKDIR /app

COPY . ./

FROM dependency-base AS production-base

RUN npm ci

COPY . .

RUN npm run build

FROM production-base as production

# Copy production build
COPY --from=production-base /app/dist/ ./dist/

EXPOSE 3000