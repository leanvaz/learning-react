import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import ClientesContainer from '../pages/ClientesContainer'
import ClientesNewContainer from '../pages/ClientesNewContainer'
import Index from '../pages/index'
import Example from '../pages/Example'
import NotFound from '../pages/404'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/exercise" component={ExercisesContainer} />
			<Route exact path="/exercise/new" component={ExerciseNewContainer} />
			<Route exact path="/clientes" component={ClientesContainer} />
			<Route exact path="/clientes/new" component={ClientesNewContainer} />
			<Route exact path="/example" component={Example} />
			<Route exact path="/" component={Index} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)


export default App