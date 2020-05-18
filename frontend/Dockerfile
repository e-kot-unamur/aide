FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

RUN npm install -g serve
# Bundle app source
COPY . .

EXPOSE 5000

RUN npm run build

CMD ["serve", "-s", "build"]