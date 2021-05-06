import React from 'react'
import Card from './Card'

const ExerciseListsdfsdf = ({exercises}) => (
    <React.Fragment>
        { exercises.map((exercise) => (
            <Card 
                key={exercise.id}
                {...exercise}
            />
        ))}
    </React.Fragment>
)


export default ExerciseListsdfsdf