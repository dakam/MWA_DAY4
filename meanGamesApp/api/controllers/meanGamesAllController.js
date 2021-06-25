const mongoose= require("mongoose");
const mGame = mongoose.model("mGame");

module.exports.GamesGetAll = function(req, res) {

    let offset = 0;
    let count = 6;

    if(req.query && req.query.offset && req.query.count) {

        let offset = parseInt(req.query.offset, 0);
        let count = parseInt(req.query.count, 6);
           
        mGame.find().skip(offset).limit(count).exec(function(err, fetchedgames) {
            console.log("Found Games");
            res.status(200).json(fetchedgames);
        });      
    }
    else {
     
        mGame.find().exec(function(err, fetchedgames) {
            console.log(`We fetched Games ${fetchedgames}`);
            res.status(200).json(fetchedgames);

        });

    }

   

}