const request = require('supertest');
const app = require('../../src/app');

describe('Pruebas de integración de las rutas de productos', () => {

    test('GET / - Debe devolver un mensaje de bienvenida', async () => {
        const respuesta = await request(app).get('/');

        expect(respuesta.statusCode).toBe(200);
        expect(respuesta.body).toBe('API funcionando de manera exitosa!');
    });

    test('GET /inventario - Debe obtener todos los productos', async () => {

        const respuesta = await request(app).get('/inventario');

        expect(respuesta.statusCode).toBe(200);
        expect(Array.isArray(respuesta.body)).toBe(true);
    });

    test('GET /inventario/:id - Debe obtener un producto por su ID', async () => {
        const respuesta = await request(app).get('/inventario/1');

        expect(respuesta.statusCode).toBe(200);
        expect(respuesta.body).toHaveProperty('id');
    });

    test('GET /inventario/:id - Debe devolver 404 si el producto no existe', async () => {
        const respuesta = await request(app).get('/inventario/999');

        expect(respuesta.statusCode).toBe(404);
    });

    test('POST /inventario - Debe agregar un nuevo producto', async () => {
        const nuevoProducto = {
            nombre: 'Producto de prueba',
            descripcion: 'Descripción del producto de prueba',
            precio: 100
        };

        const respuesta = await request(app).post('/inventario').send(nuevoProducto);

        expect(respuesta.statusCode).toBe(201);
        expect(respuesta.body).toHaveProperty('id');
    });

    test('POST /inventario - Debe devolver 400 si faltan campos obligatorios', async () => {
        const nuevoProductoInvalido = {
            nombre: 'Producto inválido'
        };

        const respuesta = await request(app).post('/inventario').send(nuevoProductoInvalido);

        expect(respuesta.statusCode).toBe(400);
    });

    test('POST /inventario - Debe devolver 400 si el precio no es un número', async () => {
        const nuevoProductoInvalido = {
            nombre: 'Producto inválido',
            descripcion: 'Descripción inválida',
            precio: 'no es un número'
        };

        const respuesta = await request(app).post('/inventario').send(nuevoProductoInvalido);

        expect(respuesta.statusCode).toBe(400);
    });

    test('PUT /inventario/:id - Debe actualizar un producto existente', async () => {
        const productoActualizado = {
            nombre: 'Producto actualizado',
            descripcion: 'Descripción actualizada',
            precio: 150
        };

        const respuesta = await request(app).put('/inventario/1').send(productoActualizado);

        expect(respuesta.statusCode).toBe(200);
        expect(respuesta.body.nombre).toBe('Producto actualizado');
        expect(respuesta.body.precio).toBe(150);
    });

    test('PUT /inventario/:id - Debe devolver 404 si se intenta actualizar un producto que no existe', async () => {
        const productoInexistente = {
            nombre: 'Producto inexistente',
            descripcion: 'Descripción inexistente',
            precio: 1
        };

        const respuesta = await request(app).put('/inventario/999').send(productoInexistente);

        expect(respuesta.statusCode).toBe(404);
    });

    test('PUT /inventario/:id - Debe devolver 400 si el precio no es un número', async () => {
        const productoInvalido = {
            nombre: 'Producto inválido',
            descripcion: 'Descripción inválida',
            precio: 'no es un número'
        };

        const respuesta = await request(app).put('/inventario/1').send(productoInvalido);

        expect(respuesta.statusCode).toBe(400);
    });

    test('DELETE /inventario/:id - Debe eliminar un producto existente', async () => {
        const respuesta = await request(app).delete('/inventario/1');

        expect(respuesta.statusCode).toBe(200);
    });

    test('DELETE /inventario/:id - Debe devolver 404 si se intenta eliminar un producto que no existe', async () => {
        const respuesta = await request(app).delete('/inventario/999');

        expect(respuesta.statusCode).toBe(404);
    });
});