const serviciosProductos = require('../../src/services/servicios');

describe('Pruebas unitarias de los servicios en los productos', () => {

    test('Debe obtener todos los productos', () => {
        const productos = serviciosProductos.obtenerInventario();

        expect(productos).toBeDefined();
        expect(Array.isArray(productos)).toBe(true);
        expect(productos.length).toBeGreaterThan(0);
    });

    test('Debe obtener un producto por su ID', () => {
        const producto = serviciosProductos.obtenerProductoPorId(1);

        expect(producto).not.toBeNull();
        expect(producto.id).toBe(1);
    });

    test('Debe dar NULL si el producto no existe', () => {
        const producto = serviciosProductos.obtenerProductoPorId(999);

        expect(producto).toBeNull();
    });

    test('Debe agregar un nuevo producto', () => {
        const inventarioAnterior = serviciosProductos.obtenerInventario().length;

        const nuevoProducto = serviciosProductos.agregarProducto({
            nombre: 'Producto de prueba',
            descripcion: 'Descripción del producto de prueba',
            precio: 100
        });

        const inventarioDespues = serviciosProductos.obtenerInventario().length;

        expect(nuevoProducto).toBeDefined();
        expect(nuevoProducto.nombre).toBe('Producto de prueba');
        expect(inventarioDespues).toBe(inventarioAnterior + 1);
    });

    test('Debe actualizar un producto existente', () => {
        const productoActualizado = serviciosProductos.actualizarProducto(1, {
            nombre: 'Producto actualizado',
            descripcion: 'Descripción actualizada',
            precio: 150
        });

        expect(productoActualizado).not.toBeNull();
        expect(productoActualizado.nombre).toBe('Producto actualizado');
        expect(productoActualizado.precio).toBe(150);
    });

    test('Debe devolver null si se intenta actualizar un producto que no existe', () => {
        const productoActualizado = serviciosProductos.actualizarProducto(999, {
            nombre: 'Producto inexistente',
            descripcion: 'Descripción inexistente',
            precio: 1
        });

        expect(productoActualizado).toBeNull();
    });

    test('Debe eliminar un producto existente', () => {
        const inventarioAnterior = serviciosProductos.obtenerInventario().length;

        const productoEliminado = serviciosProductos.eliminarProducto(1);

        const inventarioDespues = serviciosProductos.obtenerInventario().length;

        expect(productoEliminado).not.toBeNull();
        expect(inventarioDespues).toBe(inventarioAnterior - 1);
    });

    test('Debe devolver null si se intenta eliminar un producto que no existe', () => {
        const productoEliminado = serviciosProductos.eliminarProducto(999);

        expect(productoEliminado).toBeNull();
    });

    test('El producto agregado debe tener un ID único', () => {
        const nuevoProducto = serviciosProductos.agregarProducto({
            nombre: 'Producto 1',
            descripcion: 'Descripción del producto 1',
            precio: 50
        });

        expect(nuevoProducto).toHaveProperty('id');
    });

    test('El producto agregado debe tener las propiedades correctas', () => {
        const nuevoProducto = serviciosProductos.agregarProducto({
            nombre: 'Producto 2',
            descripcion: 'Descripción del producto 2',
            precio: 75
        });

        expect(nuevoProducto).toHaveProperty('nombre');
        expect(nuevoProducto).toHaveProperty('descripcion');
        expect(nuevoProducto).toHaveProperty('precio');
    });
});