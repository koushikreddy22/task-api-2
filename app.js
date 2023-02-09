const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const port=4000
const task=require("./routes/task.js")
require("./models/tasks.js")
mongoose.connect("mongodb://localhost:27017").then(()=>console.log("mongoose connected"))


app.listen(port,()=>{console.log(`the server is running on ${port}`)})