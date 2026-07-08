function validarDatos(req, res, next) {

    const { nombre, descripcion, precio } = req.body;

    if (!nombre || !descripcion || !precio) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    if (typeof precio !== "number" || precio <= 0) {
        return res.status(400).json({ error: "El precio debe ser un número mayor a $0" });
    }

    next();
}

module.exports = validarDatos;