# STOREACT
## Overview
Simple webshop to further increase my experience with the MERN stack.<br/>
In development, `react-scripts` is used to serve the client(Port = 3000) and the server uses a Node Express API server(Port = 3001).

## Techniques
React<br/>
React router v4<br/>
Express<br/>
MongoDB<br/>
Semantic UI

## Running locally
[Install](https://docs.mongodb.com/manual/installation/) and [run](https://stackoverflow.com/questions/20796714/how-do-i-start-mongo-db-from-windows) MongoDB locally.<br/>
To get the website to show some dummy content you can load the `/db/init.mongo.js` script in the Mongo Shell.

Now, setup the server and client:
```
git clone https://github.com/kristofferek/storeact.git
cd storeact
npm i

cd client
npm i

cd ..
npm start
```
## Build
Running `npm run build` creates the static bundle which we can then use any HTTP server to serve:

```
cd client/
npm run build
```

Setting NODE_ENV to production and running `npm run server` will make Node/Express serve the `client/build` directory as a static asset.

```
cd ..
npm run server
```
