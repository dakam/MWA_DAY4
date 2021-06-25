const express = require("express");
const meanGControllers = require("../controllers")
const Grouter = express.Router();

Grouter.route("/games")
.get(meanGControllers.GamesGetAll)


Grouter.route("/games/:gameId")
.get(meanGControllers.GamesGetOne)

module.exports = Grouter;