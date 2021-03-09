FROM node:14
WORKDIR /usr/src/nodeapp
COPY server/package.json .
RUN yarn install
COPY server/ .
EXPOSE 5000
CMD node index.js