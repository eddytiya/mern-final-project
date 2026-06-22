import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Home = () => {
    const[courses,setCourses]=useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:2987/course/')
        .then((resp)=>setCourses(resp.data))
        .catch((e)=>console.log(e))
    },[])
  return (
    <>
    <div
        className="container"
    >
        <div
            className="row justify-content-center align-items-center g-2"
        >{
            courses.map((course)=>(
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
                                to={`/${course._id}`}
                                role="button"
                                >read More</NavLink>
                            
                            
                            
                        </div>
                    </div>
                    
                    
                </div>
            ))
                
        }
            

        </div>
        
    </div>
    
    </>
  )
}

export default Home
