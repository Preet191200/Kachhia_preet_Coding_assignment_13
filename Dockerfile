# ---------- Stage 1: Build Storybook ----------
FROM node:20-alpine AS builder

WORKDIR /kachhia_preet_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npx storybook build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /kachhia_preet_ui_garden/storybook-static /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]