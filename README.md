# Coding Assignment 12

This project contains a Dockerized production build of the React component library.

## Requirements
- Docker installed

## Build the Docker Image

docker build -t kachhia_preet_coding_assignment12 .

## Run the Container

docker run -p 8083:8083 --name kachhia_preet_coding_assignment12 kachhia_preet_coding_assignment12

## Access the Application

Open browser:

http://localhost:8083

## Details

- Production build created using: npm run build
- Served using nginx
- Working directory inside container:
  /kachhia_preet_ui_garden
