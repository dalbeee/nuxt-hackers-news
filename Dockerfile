FROM node:alpine AS build
RUN mkdir /app
WORKDIR /app
# COPY ./package.json .
COPY . .

# RUN rm yarn.lock
# RUN rm package-lock.json

RUN npm install && npm build
EXPOSE 8080

CMD ["npm", "start"]
