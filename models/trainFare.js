var request = require("request")
var apiKey = "" //write your apiKey here
function TrainFare(req,res){
    url = "http://indianrailapi.com/api/v2/TrainFare/apikey/" + apiKey + "/TrainNumber/" + req.body.number + "/From/" +  req.body.from + "/To/" + req.body.to + "/Quota/" + req.body.quota
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedData = JSON.parse(body)
            res.render("trainFareData",{Data : parsedData})
        }else{
            console.log(error)
            res.render("index")
        }
    })
}
module.exports = TrainFare