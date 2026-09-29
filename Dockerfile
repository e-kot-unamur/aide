FROM node:20-alpine

WORKDIR /app/client

# Install exactly the versions listed in package-lock.json (reproducible build).
# Note: npm 6 (node 14) cannot read this lockfile and installed other versions,
# which broke the navigation in production.
COPY client/package.json client/package-lock.json ./
RUN npm ci

COPY client/ ./
RUN npm run build

RUN npm install -g serve@14

EXPOSE 80

CMD ["serve", "-p", "80", "-s", "public/"]
