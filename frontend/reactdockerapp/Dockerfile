# # Stage 1: Build
# FROM node:20-alpine AS build
# WORKDIR /react-app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve production
# FROM nginx:alpine
# COPY --from=build /react-app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]




############################################################
#               React Development Dockerfile
#  Use this section for running React in development mode
############################################################
# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev", "--", "--host"]






############################################################
#               React Production Dockerfile
#  Use this section for building and serving with Nginx
############################################################
# Stage 1: Build

FROM node:20-alpine AS build
WORKDIR /react-app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve production

FROM nginx:alpine
COPY --from=build /react-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]