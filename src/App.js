import React from 'react'


import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route exact  path='/' element={<HomePage/>} />

            </Routes>
           
            
          

              
        </div>
    )
}

export default App
