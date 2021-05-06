import React from 'react'
import Card from './Card'

const ShowList = ({datas}) => (
    <React.Fragment>
        { datas.map((data) => (
            <Card 
                key={data.id}
                {...data}
            />
        ))}
    </React.Fragment>
)


export default ShowList