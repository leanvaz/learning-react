import React from 'react'
import './styles/Welecome.css'

function Welecome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>vamo a darle</p>
            </div>
        </div>
    )
}

export default Welecome