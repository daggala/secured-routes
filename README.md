# Secured routes

## About

This is an example on how to protect the private parts of a website by serving the public part and the private part separately. This example belongs to this blog article: https://www.daggala.com/truly-protected-react-routes/

- In authenticated-app we have the priavet part of the app, after login.
- In unauthenticated-app we have the login page
- In server.js we serve the pages to the browser.

_Disclaimer: In my example those react apps are made using create-react app (CRA). It's overkill for this example but it's just to demonstrate. This app is not a fully functioning app, just an example to focus on exactly one thing, to make it impossible to access the the private components._

## How to run this project?

In the terminal

```javascript
//clone the project:
git clone https://github.com/daggala/secured-routes.git

//build the project
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

//then finally run the project in the root folder
npm run start
```

open up your browser at `http://localhost:5000/`

Here you see the login page, which here in this case is an SPA React app.

username: 'admin'
password: '123'

When we hit the login button we request the server to serve the other SPA that includes the private authenticated part of our application.
