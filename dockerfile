FROM node
WORKDIR /app
RUN npm i express uuid
EXPOSE 3000
COPY . .
CMD node index.js