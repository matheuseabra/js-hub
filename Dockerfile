FROM node:12.2.0-alpine

EXPOSE 3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV "/usr/src/app/node_modules:$NODE_PATH"

COPY . .
COPY yarn.lock /usr/src/app/
COPY package.json /usr/src/app/

RUN yarn install --production
RUN yarn build

CMD ["yarn", "start"]