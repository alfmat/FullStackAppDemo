# implement a multi-stage build
# 1ST STAGE: Node image for building Angular assets (dist files)

# name the node image "builder"
FROM node:20-alpine AS builder

# set working directory
WORKDIR /app

# copy all files from current dir to working dir in image
COPY . .

# install node modules and build assets 
RUN npm i && npm run build

# 2ND STAGE: Nginx to serve Angular assets built from previous stage

# nginx state for serving content
FROM nginx:1.25.1-alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# copy Angular static assets (dist files) from builder image
COPY --from=builder /app/dist/angular-frontend .

# Container run nginx 
# -g  global directives
# daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

