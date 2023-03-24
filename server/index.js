const htttp = require("http");
const fs = require("fs");

const jsondata = fs.readFileSync("api.json","utf-8");
const objdata= JSON.parse(jsondata);

const server = htttp.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hi this is my first server");
    }
    else if(req.url=="/download"){
        res.end("Hi this is my first download server");
    }
    else if(req.url=="/about"){
        res.end(fs.readFileSync("api.json","utf-8"));
    }
    else if(req.url=="/abouts"){
        res.end(objdata[0].name);
    }
    else{
        res.end("404 page not found on server")
    }
})
server.listen(5000,()=>{
    console.log("server lisdting on port number 5000");
})