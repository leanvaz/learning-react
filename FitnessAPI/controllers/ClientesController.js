'use strict'
import { version } from 'chai';
import db from '../config/database'

class ClientesController {
	static index(req, res) {
		var sql = "select * from clientes"
		db.all(sql, (err, clientes) => {
			if (err) {
				res.status(500).json({ 'error': err.message });
				return;
			}
			res.json(clientes)
		});
	}

	static store(req, res) {
		console.log(req.body)
		const { nombre, descripcion, img, leftColor, rightColor, entornos } = req.body
		var SQL = 'INSERT INTO clientes (nombre, descripcion, img, leftColor, rightColor) VALUES (?,?,?,?,?)'
		var params = [nombre, descripcion, img, leftColor, rightColor]
		var cliId 
		db.run(SQL, params, function (err) {
			if (err) {
				res.status(500).json({ 'error': err.message })
				return;
			} else {
				cliId = this.lastID
				entornos.map(
					(entorno) => (
						SQL = 'INSERT INTO entornos (idCliente, asp, ambiente, entorno, ipAppServer,puerto, ipSql,usrAdmin,pswAdmin,version) VALUES (?,?,?,?,?,?,?,?,?)',
						params = [cliId,entorno.asp, entorno.ambiente, entorno.entorno, entorno.ip, entorno.puerto, entorno.usrAdmin, entorno.pswAdmin, entorno.version],
						db.run(SQL, params, function (err) {
							if (err) {
								console.log(err)
								//res.status(500).json({ 'error': err.message })
								return;
							}
						})
					)
				)
			}
			req.body.id = cliId
			res.json({
				'clientes': req.body
			})
		})
	}

	static details(req, res){
	var sql = "select * from clientes where id = ?"

	db.get(sql, req.params.id, (err, clientes) => {
		if (err) {
			res.status(500).json({ 'error': err.message });
			return;
		}
		res.json({
			clientes
		})
	});
}
}

export default ClientesController
