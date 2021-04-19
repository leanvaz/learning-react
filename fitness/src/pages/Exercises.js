import React from 'react'
import ExercisesList from '../components/ExercisesList'
import Welecome from '../components/Welecome'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

class Exercises extends React.Component{

	state={
				data:[],
				loading :true,
				error: null
		}
		async componentDidMount(){
			await this.fetchEcxercises()
		}

		fetchEcxercises = async () => {
			try{
				let res = await fetch('http://localhost:8000/api/exercises')
				let data = await res.json()
				
				this.setState({
					data,
					loading: false
				})
			}catch (error){
				this.setState({
					loading: false,
					error
				})
			}
			
		}

		render(){
			if(this.state.loading){
				return <Loading />
			}
			if(this.state.error){
				return <FatalError />
			}
				return(
						<div>
								<Welecome 
									username='Leandro'
								/>
								<ExercisesList
								exercises={this.state.data}
								/>
								<AddButton 
								to ="/exercise/new"
								/>
						</div>
				)
		}

}

export default Exercises