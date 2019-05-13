
# Pull node image
FROM node:alpine as builder
LABEL Eco Team

# Store files in the app folder (so cliche)
WORKDIR /app
COPY ./ ./

# Restore all npm packages
RUN npm install

# Build React. Angular is different
RUN npm run build

# Use nginx to serve application
FROM nginx:alpine

# expose port
EXPOSE 3000

# copy default.conf file
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy ready prod file
COPY --from=builder /app/build /usr/share/nginx/html
