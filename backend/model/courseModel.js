const mongoose = require('mongoose');

const courseSchema=mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    level:{
        type:String,
        enum:["biginner","intermediate","advanced"],
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
})

const courseModel=mongoose.model("course",courseSchema)

module.exports=courseModel