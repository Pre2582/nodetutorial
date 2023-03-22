const htttp = require("http");
const server = htttp.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hi this is my first server");
    }
    else if(req.url=="/download"){
        res.end("Hi this is my first download server");
    }
    else if(req.url=="/about"){
        res.end("Hi this is my first about server");
    }
    else{
        res.end("404 page not found on server")
    }
})
server.listen(5000,()=>{
    console.log("server lisdting on port number 5000");
})