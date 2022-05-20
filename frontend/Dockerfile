FROM node:14.15.1

LABEL version="1.0"
LABEL description="Cranach 3D Viewer"

WORKDIR /frontend

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]
