FROM node:19
WORKDIR /app
COPY . .
RUN npm ci
ENTRYPOINT ["node", "src/main.js"]
