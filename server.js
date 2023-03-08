const express = require("express");
const db = require("./db");
const { User, Game, Platform, Genres } = require("./models");
const PORT = 3001;
const server = express();

db.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
  });
});
