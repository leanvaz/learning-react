import React from 'react'
import Welcome from '../components/Welcome'
import ShowList from '../components/ShowList'
import AddButton from '../components/AddButton'

const Clientes = ({data}) => (
    
    <React.Fragment>
        <Welcome 
            username="Raúl"
        />
        <ShowList 
            datas={data}
        />
        <AddButton to = {"/clientes/new"}/>
    </React.Fragment>
)

export default Clientes


