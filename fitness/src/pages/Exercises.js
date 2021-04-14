import React from 'react'
import ExercisesList from '../components/ExercisesList'
import Welecome from '../components/Welecome'
import AddButton from '../components/AddButton'

class Exercises extends React.Component{

	state={
				data:[{
					"id": 1,
					"title" :"Amanda",
					"description":"Yerbatera Amanda",
					"img":"https://yerbamanda.com.ar/wp-content/uploads/2015/11/logo_yerba-mate-amanda.png",
					"leftColor":"rgba(213,35,39,1)",
					"rightColor": "rgba(213,35,39,0.5)"
			},{
					"id": 2,
					"title" :"Desab",
					"description":"----",
					"img":"https://www.desab.com.ar/wp-content/uploads/2017/06/logo-enfold-png-1.png",
					"leftColor":"#B38B68",
					"rightColor": "#308A42"
			},{
					"id": 3,
					"title" :"Callegari",
					"description":"Quimica",
					"img":"https://www.quimicacallegari.com.ar/img/logo.png",
					"leftColor":"#FAD961",
					"rightColor": "#F76B1C"
			}]
		}
		render(){
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