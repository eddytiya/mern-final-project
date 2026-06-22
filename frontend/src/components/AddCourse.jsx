import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddCourse = () => {
    const[course,setCourse]=useState({courseName:'',instructor:'',category:'',duration:'',level:'',thumbnail:''})
    const navigate =useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:2987/course/add',course)
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
                    <h4 className="card-title">Add</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
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
                                onChange={(e)=>setCourse({...course,instructor:e.target.value})}
                            />
                            <label htmlFor="formId1">instructor</label>
                            </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setCourse({...course,category:e.target.value})}
                            />
                            <label htmlFor="formId1">Category</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setCourse({...course,duration:e.target.value})}
                            />
                            <label htmlFor="formId1">Duration</label>

                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setCourse({...course,level:e.target.value})}
                            />
                            <label htmlFor="formId1">Level</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                            />
                            <label htmlFor="formId1">Thumbnail</label>
                            </div>

                            <button
                             type="submit"
                            className="btn btn-primary"
                            >
                            Submit
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

export default AddCourse
