const express = require('express');
const app = express();
const server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log ("GG's laptop is listening at http://%s:%s", host, port);
})
app.get('/get/information',function(req,res){
    console.log("get request received from client");
    res.send("success");
})