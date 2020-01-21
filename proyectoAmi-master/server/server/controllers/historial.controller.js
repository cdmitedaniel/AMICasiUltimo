const Historial = require('../models/historial');

const historialCtrl = {};

historialCtrl.getHistorials = async (req, res, next) => {
    const historials = await Historial.find();
    res.json(historials);
};

historialCtrl.createHistorial = async (req, res, next) => {
    const historial = new Historial({
        iduser: req.body.iduser,
        idley: req.body.idley,
        fecha_publicacion: req.body.fecha_publicacion,
        detalle: req.body.detalle,
        estado: req.body.estado,
        expl_estado: req.body.expl_estado
    });
    await historial.save();
    res.json({status: 'Historial creada'});
};

historialCtrl.getHistorial = async (req, res, next) => {
    const { id } = req.params;
    const historial = await Historial.findById(id);
    res.json(historial);
};

historialCtrl.editHistorial = async (req, res, next) => {
    const { id } = req.params;
    const historial = {
        iduser: req.body.iduser,
        idley: req.body.idley,
        fecha_publicacion: req.body.fecha_publicacion,
        detalle: req.body.detalle,
        estado: req.body.estado,
        expl_estado: req.body.expl_estado
    };
    await Historial.findByIdAndUpdate(id, {$set: historial}, {new: true});
    res.json({status: 'Historial Actualizada'});
};

historialCtrl.deleteHistorial = async (req, res, next) => {
    await Historial.findByIdAndRemove(req.params.id);
    res.json({status: 'Historial Eliminada'});
};

module.exports = historialCtrl;