var request = require("request")
var apiKey = "" //write your apiKey here
module.exports = function(req,res){
    url = "http://indianrailapi.com/api/v2/StationLocationOnMap/apikey/" + apiKey + "/StationCode/" + req.body.station
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedData = JSON.parse(body)
            res.render("stationLocationData",{data:parsedData})
        }else{
            console.log(error)
            res.render("index")
        }
    })
}