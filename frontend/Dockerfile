FROM node:14.15.1

ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install react-scripts -g
RUN npm install

COPY . .
EXPOSE 9000
CMD [ "npm", "run", "dev" ]