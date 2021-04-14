import React from 'react'
import './styles/Welecome.css'

const Welecome = ({username}) =>(
    <div className="container">
    <div className="Fitness-User-Info">
        <h1>Hello {username}!</h1>
        <p>vamo a darle</p>
    </div>
</div>
)

export default Welecome