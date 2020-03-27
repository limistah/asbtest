FROM node:12-alpine

RUN npm i -g @adonisjs/cli


WORKDIR /home/node/app

# COPY ../ /home/node/app

# RUN npm install

USER "node"

ENV NODE_ENV=production

EXPOSE 3333

CMD adonis serve --dev