var request = require("request")
var apiKey = "" //write your apiKey here

function RescheduledTrains(req,res){
    var url = "https://indianrailapi.com/api/v2/RescheduledTrains/apikey/" + apiKey + "/Date/" + req.body.date
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedRescheduledTrains = JSON.parse(body)
            res.render("RescheduledTrainsList",{List : parsedRescheduledTrains}) 
        }else{
            console.log(error)
            res.render("index")
        }
    })
}
module.exports = RescheduledTrains