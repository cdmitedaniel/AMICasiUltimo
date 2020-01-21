const express = require('express');
const router = express.Router();

const interaccion = require('../controllers/interaccion.controller');

router.get('/', interaccion.getInteraccions);
router.post('/', interaccion.createInteraccion);
router.get('/:id', interaccion.getInteraccion);
router.put('/:id', interaccion.editInteraccion);
router.delete('/:id', interaccion.deleteInteraccion);

module.exports = router;