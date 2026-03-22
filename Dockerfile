# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /kachhia_preet_ui_garden_build_checks

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve with nginx on port 8018
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /kachhia_preet_ui_garden_build_checks/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
