const producto = require('../models/producto');

const inventario = [
    new producto(1, "Producto A", "Descripción del Producto A", 10.99),
    new producto(2, "Producto B", "Descripción del Producto B", 15.49)
];

module.exports = inventario;