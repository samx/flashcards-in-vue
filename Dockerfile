FROM node:14.18.1
ENV NODE_ENV production

WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*","./"]
RUN npm install && mv node_modules ../

COPY . .
EXPOSE 3000
CMD npm start