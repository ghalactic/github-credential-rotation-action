FROM node:19
WORKDIR /app
COPY . .
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
RUN npm ci --omit dev
ENTRYPOINT ["node", "/app/src/main.js"]
