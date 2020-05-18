FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g serve

# If you are building your code for production
# Bundle app source

COPY . .
EXPOSE 5000
# EXPOSE 3000

RUN npm run build 
CMD ["serve", "-s", "build"] 
# CMD ["npm", "start"]