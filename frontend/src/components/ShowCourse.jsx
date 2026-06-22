import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const ShowCourse = () => {

    const[course,setCourse]=useState({})
    const{id}=useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:2987/course/show/${id}`)
        .then((resp)=>setCourse(resp.data))
        .catch((e)=>console.log(e))
    })


    const handleDelete=(e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:2987/course/${id}`)
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
                    <img className="card-img-top" src={course.thumbnail} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{course.courseName}</h4>
                            <p className="card-text">{course.instructor}</p>
                            <p className="card-text">{course.category}</p>
                            <p className="card-text">{course.duration}</p>
                            <p className="card-text">{course.level}</p>

                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary"
                                to="/"
                                role="button"
                                >back to home</NavLink>

                            <NavLink
                                name=""
                                id=""
                                className="btn btn-danger"
                                onClick={handleDelete}
                                role="button"
                                >delete</NavLink>

                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary"
                                to={`/edit/${id}`}
                                role="button"
                                >Edit</NavLink>
                            
                    </div>
                </div>
                
            </div>

        </div>
        
    </div>
    
    </>
  )
}

export default ShowCourse
