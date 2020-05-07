const fs = require("fs");
const path = require("path");


function apiRoutes(app) {
    app.get("/api/friends", (req, res) => {
        // return res.json()
        //return res.json()
        res.send("this is the get request working!");
    })

   app.post("/api/friends" , (req, res) => {
       res.send("this is the post route working!");
    })
}



module.exports = apiRoutes;