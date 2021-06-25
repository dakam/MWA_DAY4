const mongoose = require("mongoose");

const pubSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        address: String,
        coordinates: {  
            type: [Number],
            index: "2dsphere",
        }, 
    }
})

const gameSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true,
    },
    price: Number,
    year: Number,
    minPlayers: {
        type:Number,
        min:1,
        max:10,
    },
    maxPlayer: {
        type:Number,
        min:1,
        max:10,
    },
    minAge: {
        type:Number,
        min:4,
    },
    rate: {
        type:Number,
        min:1,
        max:5,
        "default":1,
    },
    designer: [String],
    publisher: pubSchema,

});

mongoose.model("mGame", gameSchema, "games");