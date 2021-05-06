//import { render } from '@testing-library/react'
//import React, {useState, useEffect} from 'react'

const ClientesForm = ({onChange,onSubmit,form,addBtn,filas,onChangeFila}) => {
		//console.log(addBtn)
		return(
			<div className="container">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="Nombre"
							name="nombre"
							onChange={onChange}
							value={form.title}
						/>
					</div>
					<div className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="decripcion"
							name="decripcion"
							onChange={onChange}
							value={form.description}
						/>
					</div>
					<div className="form-group">
						<input 
							type="text"
							className="form-control"
							placeholder="img"
							name="img"
							onChange={onChange}
							value={form.img}
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
								value={form.leftColor}
							/>
						</div>
						<div className="col">
							<input 
								type="text"
								className="form-control"
								placeholder="rightColor"
								name="rightColor"
								onChange={onChange}
								value={form.rightColor}
							/>
						</div>
					</div>
					<br></br>
					<div className="form-row">
					<button 
						type="button"
						className="btn btn-primary float-right" 
						onClick={addBtn}>Add</button>
						<table className='table' id='myTable'>
							<thead>
								<tr>
									<th>asp</th>
									<th>Ambiente</th>
									<th>Entorno</th>
									<th>Ip</th>
									<th>Puerto</th>
									<th>Usuario Admin</th>
									<th>Password Admin</th>
									<th>Version</th>
								</tr>
							</thead>
							<tbody>
							{filas.map(
								(entorno,index) => (
								<tr key={entorno.ind}>
									<td><input 
										type="checkbox"
										value={entorno.asp}
										onChange={onChangeFila(index)}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="Ambiente"
										name="ambiente"
										ind={entorno.ind}
										onChange={onChangeFila(index)}
										value={entorno.ambiente}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="entorno"
										name="entorno"
										value={entorno.entorno}
										onChange={onChangeFila(index)}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="ip"
										name="ip"
										value={entorno.ip}
										onChange={onChangeFila(index)}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="puerto"
										name="puerto"
										value={entorno.puerto}
										onChange={onChangeFila(index)}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="usrAdmin"
										name="usrAdmin"
										value={entorno.usrAdmin}
										onChange={onChangeFila(index)}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="Ambiente"
										name="pswAdmin"
										value={entorno.pswAdmin}
										onChange={onChangeFila(index)}
									/></td>
									<td><input 
										type="text"
										className="form-control"
										placeholder="Version"
										name="version"
										value={entorno.version}
										onChange={onChangeFila(index)}
									/></td>
								</tr>
							)
							
							)} 
							</tbody>
						</table>
					</div>
					<button 
						type="submit"
						className="btn btn-primary float-right"
					>Submit</button>
				</form>
			</div>
			)
}




export default ClientesForm

