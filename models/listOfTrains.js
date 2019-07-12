var request = require("request")
var apiKey = "" //write your apiKey here

function ListOfTrains(req,res){
    var url = "https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/" + apiKey + "/From/" + req.body.from + "/To/" + req.body.to
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedTrains = JSON.parse(body)
            res.render("trainList",{Trains : parsedTrains})
        }
        else{
            res.send(error)
        }
    })
}

module.exports = ListOfTrains