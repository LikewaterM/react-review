import React from 'react'
import add from './img/add.png'
import './css/index.css'

function MyHeader(props){
    const { title, onAddInputEv } = props
    return(
        <div className='header'>
            <h1 className='header-title'>{title}</h1>
            <img onClick={onAddInputEv} className='header-img' src={add} alt="logo" />
        </div>
    )
}

export default MyHeader