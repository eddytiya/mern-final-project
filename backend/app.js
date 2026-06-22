const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db');
const router = require('./route/courseRoute');


const app=express()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/course',router)

app.listen('2987',()=>{
    console.log("running");
    
})