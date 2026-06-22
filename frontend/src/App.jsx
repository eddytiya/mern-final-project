import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddCourse from './components/AddCourse'
import EditCourse from './components/EditCourse'
import ShowCourse from './components/ShowCourse'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<AddCourse/>} />
            <Route path='/edit/:id' element={<EditCourse/>} />
            <Route path='/:id' element={<ShowCourse/>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
