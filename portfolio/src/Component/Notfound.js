import React from 'react'
import * as notfoundImg from  '../Images/404-error.png'
import './notfound.css'
const Notfound = () => {
    return (
        <div id='not'>
            <h1>La page n'existe pas</h1>
            <img src={notfoundImg}/>
        </div>
    )
}

export default Notfound