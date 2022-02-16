const express = require("express")
const importData=require("./data.json")
const app=express()

let port =process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/players',(req,res)=>{
    res.send(importData)
})

app.listen(port,()=>{
    console.log('exemple app is listening on port :'+ port)
})