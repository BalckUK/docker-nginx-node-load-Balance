var express = require('express'); 
var app = express(); 
var uuid = require('uuid'); 
var id = uuid.v4(); 
var port = 3000; 

app.get('/', (req, res) => { 
    res.send(id);
    console.log(id) 
}); 
app.listen(port, function(){ 
    console.log('port : ', + port); 
});