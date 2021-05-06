import { Router } from 'express'
import exercisesController from '../controllers/ExercisesController'
import clientesController from '../controllers/ClientesController'

const router = new Router()

// Obtiene ejercicios disponibles
router.get('/exercises', exercisesController.index)

// Crea un nuevo ejercicio
router.post('/exercises', exercisesController.store)

// Obtiene detalles del ejercicio
router.get('/exercises/:id', exercisesController.details)

// Obtiene ejercicios disponibles
router.get('/clientes', clientesController.index)

// Crea un nuevo ejercicio
router.post('/clientes', clientesController.store)

// Obtiene detalles del ejercicio
router.get('/clientes/:id', clientesController.details)

export default router
