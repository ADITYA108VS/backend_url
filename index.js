var express = require("express");
var app = express();
var server = app.listen(1022,function(){
    console.log("server running")
})
app.get("/",function(req,res){
    res.send("ok")
})
app.get('/login',function(req,res){
    var username=req.body.username
    var password = req.body.password
    console.log('logging for ${username} and ${password}')
    res.send("ok")
})