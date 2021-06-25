const express = require("express");
require("./api/data/db")
const Srouter = require("./api/routes")
const app = express();
app.set("PORT", 3030);
app.use("/", function(req, res, next) {
    console.log(`Accessed URL IS ${req.url} , Accessed method is ${req.method} ` );
    next();

});

const PORT = app.get("PORT");

const webserver = app.listen(PORT, function() {
    const SPORT = webserver.address().port;
    console.log(`Server Listening on port ${SPORT}`);
})


app.use("/api", Srouter);