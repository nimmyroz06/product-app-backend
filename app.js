const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const products=require("/models/products")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("products app")
})

app.post("/view",(req,res)=>{
    res.send("view products")
})

app.listen(8080,()=>{
    console.log("server started")
})