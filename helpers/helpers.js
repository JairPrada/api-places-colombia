const Departamentos = require('../data/departamentos');

const buscarDepartamento = (departamento = "") => {
    var posicion = -1;
    Departamentos.map((elemento, index) => {
        if (elemento.departamento === departamento) {
            posicion = index;
        }
    })
    return posicion;
}

module.exports = buscarDepartamento;