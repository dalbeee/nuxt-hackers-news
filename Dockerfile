FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]
