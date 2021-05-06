import React from 'react'
import ClientesForm from '../components/ClientesForm'
import Card from '../components/Card'

const ClientesNew =({form,onChange,onSubmit,addBtn,filas,onChangeFila})=>(
	<div className="">
		<div className="">
			<Card 
				{...form}
			/>
		</div>
		<div className="">
			<ClientesForm
			onChange={onChange}
			onSubmit={onSubmit}
			form={form}
			addBtn={addBtn}
			filas={filas}
			onChangeFila={onChangeFila}
			/>
		</div>
	</div>
)

export default ClientesNew