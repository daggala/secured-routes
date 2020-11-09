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

const PORT = process.env.PORT || 5000;

app.use(cookieParser("82e4e438a0705fabf61f9854e3b575af"));

app.use(express.static(path.join(__dirname, "/client/build")));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("/authenticate", auth, (req, res) => {
  const options = {
    httpOnly: true,
    signed: true,
  };

  if (req.auth.user === "admin") {
    res.cookie("name", "admin", options).send("cookie set");
  }
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("name").end();
});

app.get("/protected", (req, res) => {
  if (req.signedCookies.name === "admin") {
    app.use(express.static(path.join(__dirname, "/private/build")));
    res.sendFile(path.join(__dirname, "/private/build/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  }
});
