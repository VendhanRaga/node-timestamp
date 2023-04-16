// const fs = require('fs');

import * as fs from 'fs';





console.log("Starting")


fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error")
    } else{
        console.log("file reade sucessfully")
        console.log(data)
    }
})

const content = "hey i am a new file writtened by node js"

fs.writeFile("./new_file.js", content,(err)=>{
    if(err){
        console.log("Error")
    }else{
        console.log("file written sucessfully")
    }
})