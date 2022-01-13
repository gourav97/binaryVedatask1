import React from 'react'
import './CustomInfo.css'

const CustomInfo = ({logo, text1, text2}) => {
    return (
        <div className='bv__custom'>
            <img src={logo}/>
            <h1>{text1}</h1>
            <p>{text2}</p>
            
        </div>
    )
}

export default CustomInfo
