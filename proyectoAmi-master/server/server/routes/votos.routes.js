const express = require('express');
const router = express.Router();

const voto = require('../controllers/votos.controller');

router.get('/', voto.getVotos);
router.post('/', voto.createVoto);
router.get('/:id', voto.getVoto);
router.put('/:id', voto.editVoto);
router.delete('/:id', voto.deleteVoto);

module.exports = router;