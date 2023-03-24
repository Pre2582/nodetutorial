const express = require("express");
const app =express()

app.get("/",(req,res)=>{
    res.send("hi this first express route")
})

app.get("/about",(req,res)=>{
    res.send("hi this first express About route")
})

app.get("/download",(req,res)=>{
    res.send("this first express Downlaod file")
})

app.listen(3002,()=>{
    console.log("server establish");
})