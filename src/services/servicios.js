const inventario = require('../data/productos');

function obtenerInventario() {
    return inventario;
}

function obtenerProductoPorId(id) {
    const producto = inventario.find((item) => item.id === id);
    return producto || null;
}

function agregarProducto(producto) {

    const nuevoProducto = {
        id: inventario.length + 1,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio
    };

    inventario.push(nuevoProducto);

    return nuevoProducto;

}

function actualizarProducto(id, datosActualizados) {

    const producto = inventario.find((item) => item.id === id);

    if (!producto) {
        return null;
    }

    producto.nombre = datosActualizados.nombre;
    producto.descripcion = datosActualizados.descripcion;
    producto.precio = datosActualizados.precio;

    return producto;
}

function eliminarProducto(id) {

    const index = inventario.findIndex((item) => item.id === id); 

    if (index === -1) {
        return null
    }

    const productoEliminado = inventario.splice(index, 1);
    return productoEliminado[0];
}

module.exports = {
    obtenerInventario,
    obtenerProductoPorId,
    agregarProducto,
    actualizarProducto, 
    eliminarProducto
};