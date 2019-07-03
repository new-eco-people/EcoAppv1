# base image
FROM node as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install -g @angular/cli
RUN npm install

# Copy source code
COPY ./ ./

# Create production application
RUN npm run prod

# Use nginx to serve application
FROM nginx:alpine

# expose port
EXPOSE 4201

# copy default.conf file
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy ready prod file
COPY --from=builder /app/dist /usr/share/nginx/html
