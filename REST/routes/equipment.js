const express = require('express');
let router = express.Router();
let DB = require('../db/db')

// Operaciones especificas para el recurso de 'equipment'

// GET consultar coleccion de equipment
router.get('/', (req, res, next) => {
  if (req.body.bit == 1)
	  a = parseInt(req.body.userId)
  else
	  a = null
  let userId = a
  req.body.bit = 0
  let equipment = DB.select('equipment',null,userId)
  res.status(200).send(equipment)
});

// GET consultar equipment especifico
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.select('equipment', id)
  res.status(200).send(user)
});

// POST insertar usuario
router.post('/', (req, res, next) => {
  let user = DB.insert('equipment', req.body)
  res.status(200).send(user)
})

// PUT actualizar equipment
router.put('/:id', (req, res, next) => {
  if (req.body.bit == 1)
	  a = parseInt(req.body.userId)
  else
	  a = null
  let userId = a
  req.body.bit = 0
  let id = parseInt(req.params.id)
  let object = Object.assign(req.body, {id: id})
  let user = DB.update('equipment', object)
  res.status(200).send(user)
})

// DELETE borrar equipment
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id)
  let user = DB.remove('equipment', id)
  res.status(200).send(user)
})

module.exports = router;
