import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const EditCourse = () => {
    const[course,setCourse]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:2987/course/show/${id}`)
        .then((resp)=>setCourse(resp.data))
        .catch((e)=>console.log(e))
    },[])

    const handleEdit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:2987/course/${id}`,course)
        .then(()=>navigate('/'))
        .catch((e)=>console.log(e))
    }



  return (
    <>
        <div
            className="container"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col">
                    <div className="card text-start">
                        
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <form onSubmit={handleEdit}>
                                <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.courseName}
                                onChange={(e)=>setCourse({...course,courseName:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">courseName</label>
                            </div>

                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.instructor}
                                onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">Instructor</label>
                            </div>

                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.instructor}
                                onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">Instructor</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.category}
                                onChange={(e)=>setCourse({...course,category:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">category</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.duration}
                                onChange={(e)=>setCourse({...course,duration:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">duration</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.level}
                                onChange={(e)=>setCourse({...course,level:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">level</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={course.thumbnail}
                                onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                            />
                            

                            <label htmlFor="formId1">thumbnail</label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                submit
                            </button>
                            
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </>
  )
}

export default EditCourse
