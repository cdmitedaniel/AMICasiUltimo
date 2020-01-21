const express = require('express');
const router = express.Router();

const ciudadano = require('../controllers/ciudadano.controller');

router.get('/', ciudadano.getCiudadanos);
router.post('/', ciudadano.createCiudadano);
router.get('/:id', ciudadano.getCiudadano);
router.put('/:id', ciudadano.editCiudadano);
router.delete('/:id', ciudadano.deleteCiudadano);

module.exports = router;