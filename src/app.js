const express = require('express');

const rutas = require('./routes/rutas');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('API funcionando de manera exitosa!');
});

app.use('/inventario', rutas);

module.exports = app;