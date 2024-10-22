FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app
COPY package*.json ./

# Development Stage
FROM base as dev
ENV NODE_ENV=development

RUN npm install 
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
