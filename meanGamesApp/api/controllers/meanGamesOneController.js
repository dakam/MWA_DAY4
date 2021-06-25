
const mongoose= require("mongoose");
const mGame = mongoose.model("mGame");

module.exports.GamesGetOne = function(req, res) {

    if(req.params.gameId) {

        const gameId = req.params.gameId;

        mGame.findById(gameId).exec(function(err, games) {
            if(err) {
                console.log(`we encountered an Error : ${err}`)
            }
            console.log("One Found Games");
            res.status(200).json(games);

        });

    } else {
        let msg = "missing gameId";

        res.status(301).json({"message":msg});  

    }

}