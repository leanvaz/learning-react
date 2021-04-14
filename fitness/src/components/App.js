import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExercisesNew'
import NotFound from '../pages/NotFound'

const App = () =>(
    <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExerciseNew}/>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
)


export default App