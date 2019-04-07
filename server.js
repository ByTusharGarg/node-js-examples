const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    //console.log(req);
    //res.write('hola!');
    fs.readFile('index1.html',(err,data)=>{
        if (err){
            res.write('file not found');
        }
        else {
            res.write(data);
        }
        res.end();
    })
}).listen(81);