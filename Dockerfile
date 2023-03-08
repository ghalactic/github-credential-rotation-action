FROM node:19
WORKDIR /app
COPY . .
RUN npm ci --omit dev
ENTRYPOINT ["node", "/app/src/main.js"]
