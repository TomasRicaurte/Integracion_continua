const servicios = require('../services/servicios');

function obtenerInventario(req, res) {
    const inventario = servicios.obtenerInventario();
    res.status(200).json(inventario);
}

function obtenerProductoPorId(req, res) {

    const id = Number(req.params.id);
    const producto = servicios.obtenerProductoPorId(id);

    if (producto) {
        res.status(200).json(producto);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    } 
}

function agregarProducto(req, res) {

    const nuevoProducto = servicios.agregarProducto(req.body);
    res.status(201).json(nuevoProducto);
}

function actualizarProducto(req, res) {

    const id = Number(req.params.id);

    const productoActualizado = servicios.actualizarProducto(id, req.body);

    if (productoActualizado) {
        res.status(200).json(productoActualizado);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
}

function eliminarProducto(req, res) {

    const id = Number(req.params.id);
    const productoEliminado = servicios.eliminarProducto(id);

    if (!productoEliminado) {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    } else {
        res.status(200).json({ mensaje: 'Producto eliminado correctamente', producto: productoEliminado });
    }

}

module.exports = {
    obtenerInventario,
    obtenerProductoPorId,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
};