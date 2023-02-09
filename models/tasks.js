const mongoose=require("mongoose")
const taskSchema=mongoose.Schema({
   
    title:{
        Type:String
    },
    is_completed:{
        Type:Boolean
    }
})
const Task=mongoose.model("tasks",taskSchema)
module.exports=Task