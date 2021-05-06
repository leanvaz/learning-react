import React, { useState } from 'react'
import '../components/styles/ExerciseNew.css'
import Loading from '../components/Loading'
import FatalError from './500'
import ClientesNew from './ClientesNew'
import url from '../config'
import randomColor from "randomcolor";

const ClientesNewContainer = ({history}) =>{
	
	const [filas, setFilas] = useState([]);
	const [form,setForm] = useState({
					nombre:'',
					descripcion:'',
					img:'',
					leftColor:'',
					rightColor:'',
					entornos:filas
				})
	

	const [loading,setLoading] = useState(false)
	const [error,setError] = useState(null)

	const handleChange = e => {
			setForm({
				...form,
				[e.target.name] : e.target.value
			})
			setLoading(false)
			//console.log(...form)
		}
		
		const handleChangeFila =  index => e => {

			console.log('index: ' + index);
			console.log('property name: '+ e.target.name);
			let newArr = [...filas]; // copying the old datas array
			console.log(...filas)
			setFilas({
					
				...filas[index],
				[e.target.name] : e.target.value
			})
			console.log(...filas)
			
			//newArr[index] = [e.target.name] :e.target.value; // replace e.target.value with whatever you want to change it to
		
			//setFilas(newArr); // ??
		}
	const handleAddEntorno = () => {
		const newFilas = [...filas];
		newFilas.push({
			ind:filas.length,
			asp:0,
			ambiente:'',
			entorno:'',
			ip:'',
			puerto:'',
			usrAdmin:'',
			pswAdmin:'',
			version:''
		});
		setFilas(newFilas);
		//console.log(...filas)
		};

	const handleSubmit = async e =>{
		setLoading(true)
		e.preventDefault();
		try {
			let config ={
				method: 'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			}

			await fetch(`${url}/exercises`,config)
			setLoading(false)
			history.push('/exercise')
		} catch (error) {
			setLoading(false)
			setError(error)
		}
	}
		if(loading){
			return <Loading />
		}
		if(error){
			return <FatalError />
		}
		return <ClientesNew 
			form={form}
			onChange={handleChange}
			onSubmit={handleSubmit}
			addBtn={handleAddEntorno}
			filas={filas}
			onChangeFila={handleChangeFila}
		/>
}

export default ClientesNewContainer

