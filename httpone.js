const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('hello world');
        res.end();
    }
});
/* const server = http.createServer();
server.on("connection",(socket) => {
    console.log('new connection');
}); */
server.listen(3000);
console.log('listening');