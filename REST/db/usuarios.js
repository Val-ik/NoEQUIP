const name = 'usuarios'

let schema = {
    id: 'number',
    nombre: 'string',
    titulo: 'string'
}

// contenido inicial
let data = [
    {
        id: 1,
        nombre: "Metrologia",
        titulo: "Almacen para equipo de calibracion"
    }
]

module.exports = {
    schema,
    data,
}
