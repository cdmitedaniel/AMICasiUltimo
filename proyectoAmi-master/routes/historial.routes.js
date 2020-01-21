const express = require('express');
const router = express.Router();

const historial = require('../controllers/historial.controller');

router.get('/', historial.getHistorials);
router.post('/', historial.createHistorial);
router.get('/:id', historial.getHistorial);
router.put('/:id', historial.editHistorial);
router.delete('/:id', historial.deleteHistorial);

module.exports = router;