var request = require("request")
var apiKey = "" //write your apiKey here

function TrainStatus(req,res){
    url = "https://indianrailapi.com/api/v2/livetrainstatus/apikey/" +apiKey + "/trainnumber/" + req.body.number +"/date/" + req.body.date
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedStatus = JSON.parse(body)
            res.render("liveStatus",{ Status : parsedStatus })
        }
        else{
            res.send(error)
        }
    })
}
module.exports = TrainStatus