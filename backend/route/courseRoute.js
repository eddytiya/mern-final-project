const express = require('express');
const { homeCourse, addCourse, updateCourse, deleteCourse, showCourse } = require('../controller/courseController');


const router=express.Router()

router.get('/',homeCourse)//http://localhost:2987/course/
router.post('/add',addCourse)//http://localhost:2987/course/add
router.put('/:id',updateCourse)//http://localhost:2987/course/6a38a7a42aa0a4937e1eca7b
router.delete('/:id',deleteCourse)//http://localhost:2987/course/6a38a7a42aa0a4937e1eca7b

router.get('/show/:id',showCourse)//http://localhost:2987/course/show/6a38a7a42aa0a4937e1eca7b

module.exports=router