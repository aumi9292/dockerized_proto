FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./data_persistence/package*.json ./data_persistence/

RUN npm install
RUN cd ./data_persistence && npm install


COPY . .



EXPOSE 3000
CMD [ "node", "server.js" ]