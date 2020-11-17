const express = require("express");
const basicAuth = require("express-basic-auth");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

const auth = basicAuth({
  users: {
    admin: "123",
  },
});

const loginPage = "unauthenticated-app";
const privatePage = "authenticated-app";

const PORT = process.env.PORT || 5000;

app.use(cookieParser("82e4e438a0705fabf61f9854e3b575af"));

app.use(express.static(path.join(__dirname, `/${loginPage}/build`)));

//This is so that we can see in the terminal to which port
//the app is listening to, in this case it's 5000.
//Go to http://localhost:5000/ in your browser
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

//Here we're serving the login page when user goes to http://localhost:5000/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, `/${loginPage}/build/index.html`));
});

//This gets called upon login in the client
app.get("/authenticate", auth, (req, res) => {
  const options = {
    httpOnly: true,
    signed: true,
  };

  if (req.auth.user === "admin") {
    res.cookie("name", "admin", options).send("cookie set");
  }
});

//This gets called upon logout
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("name").end();
});

//This gets called upon login when we're on /protected
app.get("/protected", (req, res) => {
  if (req.signedCookies.name === "admin") {
    app.use(express.static(path.join(__dirname, `/${privatePage}/build`)));
    res.sendFile(path.join(__dirname, `/${privatePage}/build/index.html`));
  }
});
