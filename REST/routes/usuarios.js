const express = require('express')
let router = express.Router()
let DB = require('../db/db')

router.get('/', (req, res, next) => {
    let userId = parseInt(req.body.userId)
    let usuarios = DB.select('usuarios', null, userId)
    res.status(200).send(usuarios)
});

router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let userId = parseInt(req.body.userId)
    let todo = DB.select('usuarios', id, userId)
    res.status(200).send(todo)
});

router.post('/', (req, res, next) => {
    let todo = DB.insert('usuarios', req.body)
    res.status(200).send(todo)
})

router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let object = Object.assign(req.body, {id: id})
    let todo = DB.update('usuarios', object)
    res.status(200).send(todo)
})

router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id)
    let todo = DB.remove('usuarios', id)
    res.status(200).send(todo)
})

module.exports = router
