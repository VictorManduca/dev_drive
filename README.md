# Dev Drive

## Current situation of the project
Under construction :construction:

## About :book:
I'm just practicing Typescript in the backend with Node.js and TypeORM.  
So, to do that I'm gonna build a Google Drive clone

## All technologies :computer:
 - Typescript
 - Node.js
 - TypeORM
 - Vue.js
 - MariaDB
 - Docker

## Step-by-Step to run the project :footprints:
### Backend with Node.js
I will assume that you already have Node.js installed.  
 - Copy the content of the `.env.example` file and create the `.env` file with the copied content.  
 - Install dependencies: `npm install`.  
 - Run the project: `npm run dev`.  
 - Now you can access the API in `localhost:8000`.

## Troubleshoot :exclamation:
If you are running the project in a WSL and you can't access the project in `localhost`, please follow the guide:  
- If you don't have `net-tools` installed in your WSL system run in your WSL `sudo apt install net-tools`
- Type `ifconfig`
- Copy the `inet` IP from the first bridge  
(example: `inet 112.12.242.521`. You have to copy the number ahead of `inet`)
- Now replace the `localhost to the given IP in Postman or Insomnia 
