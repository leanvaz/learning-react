import React from 'react'
import Card from './Card'
import { Link} from 'react-router-dom'

const ShowList = ({datas}) => (
    <React.Fragment>
        { datas.map((data) => (
            
            <Link to={"/details/" + data.id}>
            <Card 
                key={data.id}
                {...data}
                
            />
            </Link>
        ))}
    </React.Fragment>
)


export default ShowList