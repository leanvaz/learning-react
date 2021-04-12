import React from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'
class Card extends React.Component{
	constructor(props){
		super(props)
		this.state={
			image:'https://icon-library.com/images/2018/2659928_mufasa-mufasa-png-png-download.png'
		}
	}
	componentDidMount(){
		setTimeout(()=> {
			this.setState({
				image:'data:image/png;base64,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'
			})
		},5000)
	}
	render(){
		const {title,description,img,leftColor,rightColor}=this.props;
		return (
			<div className='card mx-auto Fitness-Card' 
				style={{
					backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
				}}
			>
				<div className='card-body'>
					<div className='row center'>
						<div className='col-6'>
							<img src={this.state.image} className='float-right Fitness-Card-Img'/>
						</div>
						<div className='col-6 Fitness-Card-Info'>
							<h1>{title}</h1>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card