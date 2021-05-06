import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Clientes from './Clientes'
import useFetch from '../hooks/useFetch'
import url from '../config'

const ClientesContainer = () =>{
	
	const{ data, loading, error }= useFetch(`${url}/clientes`)

			if(loading)
			return <Loading />
			
			if(error)
				return <FatalError />
			
			return <Clientes
				data={data}
			/>
}

export default ClientesContainer

