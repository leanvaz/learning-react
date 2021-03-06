import React, { useState } from 'react'
import '../components/styles/ExerciseNew.css'
import Loading from '../components/Loading'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import url from '../config'

const ExerciseNewContainer = ({history}) =>{
	const [form,setForm] = useState({
					title:'',
					description:'',
					img:'',
					leftColor:'',
					rightColor:''
				})

	const [loading,setLoading] = useState(false)
	const [error,setError] = useState(null)

	const handleChange = e => {
			setForm({
				...form,
				[e.target.name] : e.target.value
			})
			setLoading(false)
		}

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
		return <ExerciseNew 
			form={form}
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
}

// class ExerciseNewContainer extends React.Component{
// 	state={
// 		form: {
// 			title:'',
// 			description:'',
// 			img:'',
// 			leftColor:'',
// 			rightColor:''
// 		},
// 		loading:false,
// 		error: null
// 	}
// 	handleChange = e => {		
// 		this.setState({
// 			form: {
// 				...this.state.form,
// 				[e.target.name] : e.target.value
// 			}
// 		})
// 	}
// 	handleSubmit = async e =>{
// 		this.setState({
// 			loading:true
// 		})
// 		e.preventDefault();
// 		try {
// 			let config ={
// 				method: 'POST',
// 				headers:{
// 					'Accept': 'application/json',
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(this.state.form)
// 			}

// 			let res = await fetch('http://localhost:8000/api/exercises',config)
// 			let json = await res.json()
// 			this.setState({
// 				loading:false
// 			})

// 			this.props.history.push('/exercise')
// 			console.log(json)
// 		} catch (error) {
// 			this.setState({
// 				loading:false,
// 				error
// 			})
			
// 		}
// 	}
// 	render(){
// 		if(this.state.loading){
// 			return <Loading />
// 		}
// 		if(this.state.error){
// 			return <FatalError />
// 		}
// 		return <ExerciseNew 
// 			form={this.state.form}
// 			onChange={this.handleChange}
// 			onSubmit={this.handleSubmit}
// 		/>
			
			
		
// 	}
// }
export default ExerciseNewContainer

