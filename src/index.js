const express = require('express');
const cors = require('cors');
const app = express();
const buscarDepartamento = require('../helpers/helpers');
const Departamentos = require('../data/departamentos');
require('dotenv').config()

app.use(express.json());
app.use(cors());

//? Obtener todos los departamentos
app.get('/', (req, res) => {
    if (Departamentos) {
        res.json(Departamentos);
    } else {
        next()
    }
})
//? Obtener un departamento en especifico
app.get('/:departamento', (req, res, next) => {
    const departamento = req.params.departamento;
    const result = buscarDepartamento(departamento);
    if (result !== -1) {
        res.json(Departamentos[result]);
    } else {
        next();
    }
})
//? Obtener ciudades de un departamento
app.get('/ciudades/:departamento', (req, res, next) => {
    const departamento = req.params.departamento;
    const result = buscarDepartamento(departamento);
    if (result !== -1) {
        res.json(Departamentos[result].ciudades);
    } else {
        next();
    }
})

app.use((req, res, next) => {
    res.status(404).json({ error: "recurso no encontrado", codigo: 404 });
});
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
    console.log("Server listening on port " + PORT);
})