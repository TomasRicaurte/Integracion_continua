# Servicio REST de Inventario

[![Integración Continua](https://github.com/TomasRicaurte/Integracion_continua/actions/workflows/ci.yml/badge.svg)](https://github.com/TomasRicaurte/Integracion_continua/actions/workflows/ci.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TomasRicaurte_Integracion_continua&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TomasRicaurte_Integracion_continua)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=TomasRicaurte_Integracion_continua&metric=coverage)](https://sonarcloud.io/summary/new_code?id=TomasRicaurte_Integracion_continua)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=TomasRicaurte_Integracion_continua&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=TomasRicaurte_Integracion_continua)

[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=TomasRicaurte_Integracion_continua&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=TomasRicaurte_Integracion_continua)

## Descripción

Este proyecto consiste en el desarrollo de un servicio web REST Back-End para la gestión de un inventario de productos utilizando **Node.js** y **Express.js**.

La aplicación implementa las operaciones básicas de un CRUD (Crear, Consultar, Actualizar y Eliminar productos) siguiendo una arquitectura organizada por capas. Además, incorpora pruebas automatizadas, análisis estático de código y un pipeline de Integración Continua mediante GitHub Actions y SonarCloud.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- Jest
- Supertest
- ESLint
- GitHub Actions
- SonarCloud
- Git

---

## Estructura del proyecto

```
Integracion_continua/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── coverage/
│
├── src/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
│
├── test/
│   ├── integracion/
│   └── unitarias/
│
├── sonar-project.properties
├── eslint.config.js
├── package.json
└── README.md
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TomasRicaurte/Integracion_continua.git
```

Ingresar al proyecto:

```bash
cd Integracion_continua
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecutar el servidor

```bash
npm start
```

Servidor disponible en:

```
http://localhost:3000
```

---

## Ejecutar las pruebas

Ejecutar todas las pruebas:

```bash
npm test
```

Ejecutar las pruebas con cobertura:

```bash
npm test -- --coverage
```

El reporte HTML se genera automáticamente en:

```
coverage/lcov-report/index.html
```

---

## Ejecutar ESLint

```bash
npm run lint
```

---

## Endpoints disponibles

### Obtener todos los productos

```
GET /inventario
```

---

### Obtener un producto por ID

```
GET /inventario/:id
```

Ejemplo:

```
GET /inventario/1
```

---

### Crear un producto

```
POST /inventario
```

Body:

```json
{
  "nombre": "Nombre de producto D",
  "descripcion": "Descripción del producto D",
  "precio": 120
}
```

---

### Actualizar un producto

```
PUT /inventario/:id
```

Body:

```json
{
  "nombre": "Nombre producto actualizado",
  "descripcion": "Descripción del producto actualizado",
  "precio": 150
}
```

---

### Eliminar un producto

```
DELETE /inventario/:id
```

---

## Pruebas implementadas

El proyecto cuenta con:

- Pruebas unitarias para la capa de servicios.
- Pruebas de integración para los endpoints REST.
- Cobertura de código generada mediante Istanbul (integrado en Jest).

Resultados obtenidos:

- 22 pruebas exitosas.
- Cobertura del código: **96%**.

---

## Integración Continua

El proyecto utiliza **GitHub Actions** para automatizar:

- Instalación de dependencias.
- Verificación del código mediante ESLint.
- Ejecución de pruebas automatizadas.
- Generación del reporte de cobertura.
- Análisis de calidad mediante SonarCloud.

---

## Autor

**Tomas Ricaurte**

Universidad Manuela Beltrán

Proyecto desarrollado para la asignatura **Ingeniería Web 1**.