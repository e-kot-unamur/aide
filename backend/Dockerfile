# This is only for development !
# Check the README.md for prod
FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]