import React from 'react'
import Card from '../components/Card'
import Welecome from '../components/Welecome'

class Excercises extends React.Component{
    render(){
        return(
            <div>
                <Welecome 
                  username='Leandro'
                />
                <Card
                  title="Mi Titulo"
                  description="esta es una descripcion mas larga para probar como salta"
                  img="https://i.pinimg.com/originals/89/7e/f0/897ef048fcbba9909c5f3459d38d7c47.png"
                  leftColor="#A74CF2"
                  rightColor="#617BFB"
                /></div>
        )
    }

}

export default Excercises