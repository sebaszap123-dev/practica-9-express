const express = require("express");
const app = express();
app.get("/", function (req, res) {
  // route handler
  res.send("Hello World, this is the root route");
});

app.listen(3000);
app.get("/uno", (req, res) => {
  // route hanlder
  res.send("Hello World, frome route One");
});

/*
  No abrió con nodemon server, pero si con node app
  Al entrar a localhost:3000 apareció el hellow world
  y también al navegar a localhost:3000/uno aparecio el Hellow world... uno
*/

app.get("/prueba", (req, res) => {
  res.send("Hello World, this is the Prueba route");
});

// regresando contendio tipo HTML

app.get("/index", (req, res) => {
  res.send("<h1>Hello World, this is the Index route<h1>");
});
