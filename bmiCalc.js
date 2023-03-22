//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs"); 

app.listen(2999, function(){
    console.log("Server has started on port 2999");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function(req, res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);

    var yourbmi = w/(h*h);
    res.render("response", {
        bmiresult: yourbmi
    });
});
