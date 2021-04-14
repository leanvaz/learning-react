import React from 'react'
import Card from './Card'

const ExercisesList=({exercises}) => (
  <div>
            {exercises.map((exercise)=>{
                  return(
                  <Card
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                  />
                  )
                })}
    </div>
)


export default ExercisesList