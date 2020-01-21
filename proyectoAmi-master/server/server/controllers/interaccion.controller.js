const Interaccion = require('../models/interaccion.js');

const interaccionCtrl = {};

interaccionCtrl.getInteraccions = async (req, res, next) => {
    const interaccions = await Interaccion.find();
    res.json(interaccions);
};



interaccionCtrl.createInteraccion = async (req, res, next) => {
    const interaccion = new Interaccion({
        idusuario: req.body.idusuario,
        idley: req.body.idley,
        likes: req.body.likes,
        comentariostotales: req.body.comentariostotales,
        compartidastotales: req.body.compartidastotales

        
    });
    await interaccion.save();
    res.json({status: 'Interaccion creada'});
};

interaccionCtrl.getInteraccion = async (req, res, next) => {
    const { id } = req.params;
    const interaccion = await Interaccion.findById(id);
    res.json(interaccion);
};

interaccionCtrl.editInteraccion = async (req, res, next) => {
    const { id } = req.params;
    const interaccion = {
        idusuario: req.body.idusuario,
        idley: req.body.idley,
        likes: req.body.likes,
        comentariostotales: req.body.comentariostotales,
        compartidastotales: req.body.compartidastotales
    };
    await Interaccion.findByIdAndUpdate(id, {$set: interaccion}, {new: true});
    res.json({status: 'Interaccion Actualizada'});
};

interaccionCtrl.deleteInteraccion = async (req, res, next) => {
    await Interaccion.findByIdAndRemove(req.params.id);
    res.json({status: 'Interaccion Eliminada'});
};

module.exports = interaccionCtrl;