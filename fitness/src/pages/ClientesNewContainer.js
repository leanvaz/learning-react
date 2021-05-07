import React, { useState } from 'react'
import '../components/styles/ExerciseNew.css'
import Loading from '../components/Loading'
import FatalError from './500'
import ClientesNew from './ClientesNew'
import url from '../config'
import randomColor from "randomcolor";

const ClientesNewContainer = ({ history }) => {

	const [form, setForm] = useState({
		nombre: '',
		descripcion: '',
		img: '',
		leftColor: '',
		rightColor: '',
		entornos: []
	})


	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
		setLoading(false)
		//console.log(...form)
	}

	const handleChangeFila = ind => e => {

		const newEntornos = [...form.entornos];
		const index = newEntornos.findIndex(e => e.ind === ind)
		newEntornos[index][e.target.name] = e.target.value
		setForm({
			...form,
			entornos: newEntornos
		})
	}
	const handleAddEntorno = () => {
		const newEntornos = [...form.entornos];
		newEntornos.push({
			ind: form.entornos.length,
			asp: 0,
			ambiente: '',
			entorno: '',
			ip: '',
			puerto: '',
			usrAdmin: '',
			pswAdmin: '',
			version: ''
		});
		setForm({
			...form,
			entornos: newEntornos
		});
		//console.log(...filas)
	};

	const handleSubmit = async e => {
		setLoading(true)
		e.preventDefault();
		try {
			let config = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			}

			await fetch(`${url}/clientes`, config)
			setLoading(false)
			history.push('/clientes')
		} catch (error) {
			setLoading(false)
			setError(error)
		}
	}
	if (loading) {
		return <Loading />
	}
	if (error) {
		return <FatalError />
	}
	return <ClientesNew
		form={form}
		onChange={handleChange}
		onSubmit={handleSubmit}
		addBtn={handleAddEntorno}
		onChangeFila={handleChangeFila}
	/>
}

export default ClientesNewContainer

