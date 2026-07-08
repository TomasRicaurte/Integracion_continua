const express = require('express');
const router = express.Router();

const controlador = require('../controllers/controlador');
const validarDatos = require('../middleware/validarDatos');

router.get('/', controlador.obtenerInventario);

router.get('/:id', controlador.obtenerProductoPorId);

router.post('/', validarDatos, controlador.agregarProducto);

router.put('/:id', validarDatos, controlador.actualizarProducto);

router.delete('/:id', controlador.eliminarProducto);

module.exports = router;