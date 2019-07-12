var request = require("request");
var apiKey = "" //write your apiKey here
function StationName(req,res){
    var url = "https://indianrailapi.com/api/v2/StationCodeOrName/apikey/" +apiKey + "/SearchText/" + req.body.place
    request(url,function(error,response,body){
        if(!error){
        var parsedName = JSON.parse(body)
        res.render("stationNameList",{ Names : parsedName})
        }else{
            console.log(error)
            res.render("index")
        }
    })
}

module.exports = StationName