const Voto = require('../models/votos');

const votoCtrl = {};

votoCtrl.getVotos = async (req, res, next) => {
    const votos = await Voto.find();
    res.json(votos);
};

votoCtrl.createVoto = async (req, res, next) => {
    const voto = new Voto({
        iduser: req.body.iduser,
        idarticulo: req.body.idarticulo,
        fechavotacion: req.body.fechavotacion,
        voto: req.body.voto,
        ciudadano: req.body.ciudadano
    });
    await voto.save();
    res.json({status: 'Voto creado'});
};

votoCtrl.getVoto = async (req, res, next) => {
    const { id } = req.params;
    const voto = await Voto.findById(id);
    res.json(voto);
};

votoCtrl.editVoto = async (req, res, next) => {
    const { id } = req.params;
    const voto = {
        iduser: req.body.iduser,
        idarticulo: req.body.idarticulo,
        fechavotacion: req.body.fechavotacion,
        voto: req.body.voto,
        ciudadano: req.body.ciudadano
    };
    await Voto.findByIdAndUpdate(id, {$set: voto}, {new: true});
    res.json({status: 'Voto Actualizada'});
};

votoCtrl.deleteVoto = async (req, res, next) => {
    await Voto.findByIdAndRemove(req.params.id);
    res.json({status: 'Voto Eliminada'});
};

module.exports = votoCtrl;