FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production

# Bundle app source
# RUN npm install -g serve -> PROD

COPY . .
# EXPOSE 5000 -> PROD
EXPOSE 3000

# RUN npm run build -> PROD

# CMD ["serve", "-s", "build"] -> PROD
CMD ["npm", "start"]