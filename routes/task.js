const express=require('express')
const app=express.Router()
require("../models/tasks")
const mongoose=require('mongoose')
const Task=require("../models/tasks")

app.post("/create",()=>{
    const {title,is_completed}=req.body
    Task.create({
        title,
        is_completed
    }).then((data)=>{
        console.log(data)
        res.send(201)
    }).catch((err)=>{
        console.log(err)
    })
})
app.get("/tasks",()=>{
    Task.find().then((data)=>{
        res.send(data)
        res.status(201)
    })
})
app.get(`/tasks?`,()=>{
    let temp=req.url.split("?")
    let id=temp[1]
    Task.find({id}).then((data)=>{
        res.send(data)
        res.status(201)
    }).catch((err)=>{
        res.send("id not found")
        res.status(404)
    })
})
app.delete('V1/tasks?',()=>{
    let id=req.url.split("?")[1]
    Task.remove({id}).then(()=>{
        res.status(204)
    })

})
app.put('V1/tasks?',()=>{
    let id=req.url.split("?")[1]
    const {title,is_completed}=req.body
    Task.updateOne({id},{
        title,
        is_completed
    }).then(()=>{
        res.status(204)
    }).catch(()=>{
        res.status(404)
    })
})
app.post('V1/tasks',()=>{
    const {tasks}=req.body

    Task.bulkSave({
    ...tasks
    }).then((data)=>{
        res.status(201)
        res.send(data.id)
    })
})
app.delete('V1/task',()=>{
    const {id}=req.body
    for(let i=0;i<id.length;i++){
        let gid=id[i]
        Task.remove({gid}).then((data)=>{
            res.send(gid)
        })
    }
})
module.exports=app