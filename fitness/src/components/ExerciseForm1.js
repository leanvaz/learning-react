import React from 'react'

class ExerciseForm extends React.Component{
	state={}
	handleSubmit = e =>{
		e.preventDefault();
		console.log(this.state)
	}

	render(){
		const{onChange}= this.props
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="title"
							name="title"
							onChange={onChange}
							value={this.state.title}
						/>
					</div>
					<div className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="description"
							name="description"
							onChange={onChange}
							value={this.state.description}
						/>
					</div>
					<div className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="img"
							name="img"
							onChange={onChange}
							value={this.state.img}
						/>
					</div>
					<div className="form-row">
						<div className="col">
							<input 
								type="text"
								className="form-control"
								placeholder="leftColor"
								name="leftColor"
								onChange={onChange}
								value={this.state.leftColor}
							/>
						</div>
						<div className="col">
							<input 
								type="text"
								className="form-control"
								placeholder="rightColor"
								name="rightColor"
								onChange={onChange}
								value={this.state.rightColor}
							/>
						</div>
					</div>
					<button 
						type="submit"
						className="btn btn-primary"
					>Submit</button>
				</form>
			</div>
		)
	}
}
export default ExerciseForm

