FROM node:14-alpine

WORKDIR /app

COPY . .

WORKDIR /app/client/

RUN npm install 
RUN npm install -g serve
RUN npm run build 

EXPOSE 80

CMD ["serve", "-p", "80", "-s", "public/"]