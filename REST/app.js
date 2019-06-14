const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usuariosRouter = require('./routes/usuarios')
const equipmentRouter = require('./routes/equipment')
//const usuariosRouter = require('./routes/usuarios')

let app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter) // pagina de hola mundo
app.use('/usuarios', usuariosRouter) // operaciones hacia el recurso de 'usuarios'
app.use('/usuarios/:userId/equipment', (req, res, next) => { // operaciones hacia el recurso de 'tareas' del 'usuario'
    let userId = parseInt(req.params.userId)
    req.body.userId = userId
	req.body.bit = 1
    next()
}, equipmentRouter)
app.use('/equipment', equipmentRouter) // operaciones hacia el recurso de 'tareas'
/*app.use('/usuarios/:userId/usuarios', (req, res, next) => { // operaciones hacia el recurso de 'equipo' del 'usuario'
    let userId = parseInt(req.params.userId)
    req.body.userId = userId
    next()
}, usuariosRouter)*/
//app.use('/usuarios', usuariosRouter) // operaciones hacia el recurso de 'equipo'

module.exports = app
