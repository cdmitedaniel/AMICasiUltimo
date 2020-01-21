const Persona = require('../models/persona');

const personaCtrl = {};

personaCtrl.getPersonas = async (req, res, next) => {
    const personas = await Persona.find();
    res.json(personas);
};

personaCtrl.createPersona = async (req, res, next) => {
    const persona = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        fecha_nacimiento: req.body.fecha_nacimiento,
        lugar_nacimiento: req.body.lugar_nacimiento,
        correo: req.body.correo,
        sexo: req.body.sexo,
        domicilio: req.body.domicilio
    });
    await persona.save();
    res.json({status: 'Persona creada'});
};

personaCtrl.getPersona = async (req, res, next) => {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    res.json(persona);
};

personaCtrl.editPersona = async (req, res, next) => {
    const { id } = req.params;
    const persona = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        fecha_nacimiento: req.body.fecha_nacimiento,
        lugar_nacimiento: req.body.lugar_nacimiento,
        correo: req.body.correo,
        sexo: req.body.sexo,
        domicilio: req.body.domicilio
    };
    await Persona.findByIdAndUpdate(id, {$set: persona}, {new: true});
    res.json({status: 'Persona Actualizada'});
};

personaCtrl.deletePersona = async (req, res, next) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({status: 'Persona Eliminada'});
};

module.exports = personaCtrl;