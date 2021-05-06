'use strict'
import db from '../config/database'

class ClientesController {
    static index(req, res){
        var sql = "select * from clientes"
        db.all(sql, (err, clientes) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json(clientes)
          });
    }

    static store(req, res){
        const { nombre, descripcion, img, leftColor, rightColor } = req.body
        const SQL = 'INSERT INTO clientes (nombre, descripcion, img, leftColor, rightColor) VALUES (?,?,?,?,?)'
        const params = [nombre, descripcion, img, leftColor, rightColor]        
        db.run(SQL, params, function (err) {
            if (err){
                res.status(500).json({'error': err.message})
                return;
            }
            req.body.id = this.lastID
            res.json({
                'clientes': req.body
            })
        })
    }

    static details(req, res){
        var sql = "select * from entornos where idCliente = ?"
        
        db.get(sql, req.params.id, (err, entorno) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json({
                entorno
            })
        });
    }
}

export default ClientesController
