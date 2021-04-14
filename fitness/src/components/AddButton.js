import React from 'react'
import './styles/AddButton.css'
import buttomImg from '../images/add.png'
import { Link} from 'react-router-dom'

const AddButton = (props) => (
    <Link to={props.to}>
    <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
</Link>
)
// function AddButton(props){
//     return(
//         <Link to="/exercise/new">
//             <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
//         </Link>
//     )
// }

export default AddButton