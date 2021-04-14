import React from 'react'
import ExerciseForm from '../components/ExerciseForm1'
import Card from '../components/Card'

class ExerciseNew extends React.Component{
	state= {
		form:{}
	}
	handleChange = e=>{
		// let partialState ={}
		// partialState[e.target.name]= e.target.value
		// this.setState(partialState)
		
		this.setState({
			form:{
			[e.target.name] : e.target.value
			}
		})
	}
	render(){
		return (
			<ExerciseForm
			onChage={this.handleChange}
			/>
		)
	}
}
export default ExerciseNew

