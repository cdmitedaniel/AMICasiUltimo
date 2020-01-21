const Ciudadano = require('../models/ciudadano');

const ciudadanoCtrl = {};

ciudadanoCtrl.getCiudadanos = async (req, res, next) => {
    const ciudadanos = await Ciudadano.find();
    res.json(ciudadanos);
};

ciudadanoCtrl.createCiudadano = async (req, res, next) => {
    const ciudadano = new Ciudadano({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        contrasena: req.body.contrasena,
        cuentatwitter: req.body.cuentatwitter,
        cuentafacebook: req.body.cuentafacebook
    });
    await ciudadano.save();
    res.json({status: 'Ciudadano creada'});
};

ciudadanoCtrl.getCiudadano = async (req, res, next) => {
    const { id } = req.params;
    const ciudadano = await Ciudadano.findById(id);
    res.json(ciudadano);
};

ciudadanoCtrl.editCiudadano = async (req, res, next) => {
    const { id } = req.params;
    const ciudadano = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        contrasena: req.body.contrasena,
        cuentatwitter: req.body.cuentatwitter,
        cuentafacebook: req.body.cuentafacebook
    };
    await Ciudadano.findByIdAndUpdate(id, {$set: ciudadano}, {new: true});
    res.json({status: 'Ciudadano Actualizada'});
};

ciudadanoCtrl.deleteCiudadano = async (req, res, next) => {
    await Ciudadano.findByIdAndRemove(req.params.id);
    res.json({status: 'Ciudadano Eliminada'});
};

module.exports = ciudadanoCtrl;