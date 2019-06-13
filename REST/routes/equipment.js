const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'usuarios'

// GET consultar coleccion de usuarios
router.get('/', (req, res, next) => {
  let equipment = DB.select('equipment')
  res.status(200).send(equipment)
});

// GET consultar usuario especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.select('equipment', id)
  res.status(200).send(user)
});

// GET consultar equipo de usuario especifico
router.get('/:userId', (req, res, next) => {
  let userId = parseInt(req.params.userId)
  let user = DB.select('equipment', null, userId)
  res.status(200).send(user)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let user = DB.insert('equipment', req.body)
  res.status(200).send(user)
})

// PUT actualizar usuario
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let user = DB.update('equipment', object)
  res.status(200).send(user)
})

// DELETE borrar usuario
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.remove('equipment', id)
  res.status(200).send(user)
})

module.exports = router;
