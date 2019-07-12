var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request")

app.use(bodyParser.urlencoded({extended : true}))
app.set("view engine","ejs");
app.use(express.static("public"))

var StationName = require("./models/stationName")
var ListOfTrains = require("./models/listOfTrains")
var RescheduledTrains = require("./models/rescheduledTrains")
var TrainStatus = require("./models/trainStatus")
var TrainFare = require("./models/trainFare")
var CancelledTrains = require("./models/cancelledTrains")
var StationLocation = require("./models/stationLocation")
var RajdhaniTrain = require("./models/rajdhaniTrain")
var ShatabdiTrain = require("./models/ShatabdiTrain")

app.get("/",function(req,res){
    res.render("home")
})

app.get("/stationName",function(req,res){
    res.render("stationName")
})
app.post("/stationName",StationName)

app.get('/listOfTrains',function(req,res){
    res.render("listOfTrains")
})
app.post("/listOfTrains",ListOfTrains)

app.get("/rescheduledTrains",function(req,res){
    res.render("rescheduledTrains")
})
app.post("/rescheduledTrains",RescheduledTrains)

app.get("/trainStatus",function(req,res){
    res.render("trainStatus")
})
app.post("/trainStatus",TrainStatus)

app.get("/trainFare",function(req,res){
    res.render("trainFare")
})
app.post("/trainFare",TrainFare)

app.get("/cancelledTrains",function(req,res){
    res.render("cancelledTrains")
})
app.post("/cancelledTrains",CancelledTrains)

app.get("/stationLocation",function(req,res){
    res.render("stationLocation")
})
app.post("/stationLocation",StationLocation)

app.get("/rajdhaniTrain",RajdhaniTrain)

app.get("/ShatabdiTrain",ShatabdiTrain)

app.get("/JanShatabdiTrain",function(req,res){
    url = ""
    request(url,function(error,response,body){
        if(!error && response.statusCode === 200){
            parsedData = JSON.parse(body)
            res.render("",{ data : parsedData})
        }else{
            res.send(error)
        }
    })
})

app.listen(2000,function(){
    console.log("TRAIN APP SERVER STARTED")
})