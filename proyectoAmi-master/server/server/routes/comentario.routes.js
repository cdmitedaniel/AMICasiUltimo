const express = require('express');
const router = express.Router();

const comentario = require('../controllers/comentario.controller');

router.get('/', comentario.getComentarios);
router.post('/', comentario.createComentario);
router.get('/:id', comentario.getComentario);
router.put('/:id', comentario.editComentario);
router.delete('/:id', comentario.deleteComentario);

module.exports = router;