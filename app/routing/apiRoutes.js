const fs = require("fs");
const path = require("path");
const friendsList = require("../data/friends.json");

function apiRoutes(app) {
    app.get("/api/friends", (req, res) => {
        //res.send("this is the get request working!");
        return res.json(friendsList);
    })

   app.post("/api/friends" , ({body}, res) => {
       console.log('body',body);
        let bestfriend = null;
        let diff = Infinity;
        friendsList.map(friend => {
            let sum = 0;
            for(let i = 0 ; i<friend.scores.length; i++){
                sum += Math.abs(friend.scores[i]-body.scores[i])
            }
            if(sum<diff){
                bestfriend = friend;
                diff = sum;
            }
        });
        friendsList.push(body);
        fs.writeFile("./app/data/friends.json", JSON.stringify(friendsList), (err)=>console.log(err || "successfully saved!"))
       res.send(bestfriend);
    })
}



module.exports = apiRoutes;