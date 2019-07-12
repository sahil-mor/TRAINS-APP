var request = require("request")
var apiKey = "" //write your apiKey here
module.exports = function(req,res){
    url = "https://indianrailapi.com/api/v2/CancelledTrains/apikey/" + apiKey + "/Date/" + req.body.date
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedData = JSON.parse(body)
            res.render("cancelledTrainsList",{data : parsedData})
        }else{
            console.log(error)
            res.render("index")
        }
    })
}