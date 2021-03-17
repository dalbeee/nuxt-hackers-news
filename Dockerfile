FROM node:14.16.0-alpine3.13
RUN mkdir /app
WORKDIR /app
COPY ./package.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
