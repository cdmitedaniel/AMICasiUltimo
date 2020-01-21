const Comentario = require('../models/comentario');

const comentarioCtrl = {};

comentarioCtrl.getComentarios = async (req, res, next) => {
    const comentarios = await Comentario.find();
    res.json(comentarios);
};

comentarioCtrl.createComentario = async (req, res, next) => {
    const comentario = new Comentario({
        idpublicacionley: req.body.idpublicacionley,
        like: req.body.like,
        dislike: req.body.dislike,
        comentarios: req.body.comentarios
    });
    await comentario.save();
    res.json({status: 'Comentario creada'});
};

comentarioCtrl.getComentario = async (req, res, next) => {
    const { id } = req.params;
    const comentario = await Comentario.findById(id);
    res.json(comentario);
};

comentarioCtrl.editComentario = async (req, res, next) => {
    const { id } = req.params;
    const comentario = {
        idpublicacionley: req.body.idpublicacionley,
        like: req.body.like,
        dislike: req.body.dislike,
        comentarios: req.body.comentarios
    };
    await Comentario.findByIdAndUpdate(id, {$set: comentario}, {new: true});
    res.json({status: 'Comentario Actualizada'});
};

comentarioCtrl.deleteComentario = async (req, res, next) => {
    await Comentario.findByIdAndRemove(req.params.id);
    res.json({status: 'Comentario Eliminada'});
};

module.exports = comentarioCtrl;