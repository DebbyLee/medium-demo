FROM node:20-alpine

WORKDIR /app

# Copy dependency configs first to leverage Docker build layer caching
COPY package.json ./

RUN npm install

# Copy application source files
COPY server.js ./

EXPOSE 3000

CMD ["node", "server.js"]
