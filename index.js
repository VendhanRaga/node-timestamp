// import express from "express";

const express = require("express");
const fs = require("fs");
const path = require("path");

//path

const dirPath = path.join(__dirname,"timetamps");
console.log("dirpath",dirPath)

// initialize express server
const app = express();

//middlewars

app.use(express.static("timetamps"))

//api
app.get('/', (req, res) => {
    res.send("hey your api working good")
})

app.get("/static",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3)
    let content = `last updated timestamp: ${dateString}`
    fs.writeFileSync(`${dirPath}/date-time.txt`,content,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file created successfully")
        }
    })

    res.sendFile(path.join(__dirname, "timetamps/date-time.txt"))

})


app.listen(9000,()=>console.log(`server stated in local host:9000`))