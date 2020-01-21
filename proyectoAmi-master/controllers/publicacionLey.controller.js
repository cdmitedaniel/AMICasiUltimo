const Publicacion = require('../models/publicacionLey');

const publicacionCtrl = {};

publicacionCtrl.getPublicacions = async (req, res, next) => {
    const publicacions = await Publicacion.find();
    res.json(publicacions);
};

publicacionCtrl.createPublicacion = async (req, res, next) => {
    const publicacion = new Publicacion({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fechaPublicacion: req.body.fechaPublicacion,
        likesTotal: req.body.likesTotal,
        idley: req.body.idley,
        idarticulo: req.body.idarticulo,
        dislikesTotales: req.body.dislikesTotales

    });
    await publicacion.save();
    res.json({status: 'Publicacionley creada'});
};

publicacionCtrl.getPublicacion = async (req, res, next) => {
    const { id } = req.params;
    const publicacion = await Publicacion.findById(id);
    res.json(publicacion);
};

publicacionCtrl.editPublicacion = async (req, res, next) => {
    const { id } = req.params;
    const publicacion = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fechaPublicacion: req.body.fechaPublicacion,
        likesTotal: req.body.likesTotal,
        idley: req.body.idley,
        idarticulo: req.body.idarticulo,
        dislikesTotales: req.body.dislikesTotales
    };
    await Publicacion.findByIdAndUpdate(id, {$set: publicacion}, {new: true});
    res.json({status: 'Publicacionley Actualizada'});
};

publicacionCtrl.deletePublicacion = async (req, res, next) => {
    await Publicacion.findByIdAndRemove(req.params.id);
    res.json({status: 'Publicacionley Eliminada'});
};

module.exports = publicacionCtrl;