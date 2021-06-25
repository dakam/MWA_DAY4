const allGames = require("./meanGamesAllController");
const oneGame = require("./meanGamesOneController")


module.exports = {
    GamesGetAll:allGames.GamesGetAll,
    GamesGetOne:oneGame.GamesGetOne
}