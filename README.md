# Secured routes

## About

This is an example on how to protect the private parts of a website by serving the public part and the private part separately. This example belongs to this blog article: https://www.daggala.com/truly-secured-react-routes/

In this example we have two different React apps, the other containing the login page and the other containin the private page. We first want to serve the login page and the private page only if we succeed to authenticate. In my example those react apps are made using create-react app (CRA) for convenience sake but CRA already has a dev server to serve the app. Here we're creating another Express server in Node.js that conditionally serves either one of the apps.

## How to run this project?

In the terminal:

```
git clone git@github.com:daggala
cd secured-routes
npm i
cd unauthenticated-app
npm i
npm run build
cd ..
cd authenticated-app
npm i
npm run build
cd ..
npm run start

```

open up your browser at `http://localhost:5000/`

Here you see the login page, which here in this case is an SPA React app.

username: 'admin'
password: '123'

When we hit the login button we request the server to serve the other SPA that includes the private authenticated part of our application.
