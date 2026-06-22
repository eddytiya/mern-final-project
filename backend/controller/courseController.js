const courseModel = require("../model/courseModel")

const addCourse=async(req,resp)=>{
    const data= new courseModel(req.body)
    const result= await data.save()
    resp.status(200).json(result)
}

const homeCourse=async(req,resp)=>{
    const data = await courseModel.find()
    if(data!=null){
        resp.status(200).json(data)
    }else{
        resp.status(404).json({message:"home not found"})
    }
}

const showCourse=async(req,resp)=>{
    const data = await courseModel.findById(req.params.id)
    if(data!=null){
        resp.status(200).json(data)
    }else{
        resp.status(404).json({message:"show not found"})
    }
}

const updateCourse=async(req,resp)=>{
    const data = await courseModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(data!=null){
        resp.status(200).json(data)
    }else{
        resp.status(404).json({message:"update not found"})
    }
}

const deleteCourse=async(req,resp)=>{
    const data = await courseModel.findByIdAndDelete(req.params.id)
    if(data!=null){
        resp.status(200).json(data)
    }else{
        resp.status(404).json({message:"delete not found"})
    }
}

module.exports={addCourse,homeCourse,showCourse,updateCourse,deleteCourse}