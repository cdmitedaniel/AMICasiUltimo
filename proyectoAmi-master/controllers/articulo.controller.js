const Articulo = require('../models/articulo');

const articuloCtrl = {};

articuloCtrl.getArticulos = async (req, res, next) => {
    const articulos = await Articulo.find();
    res.json(articulos);
};

articuloCtrl.createArticulo = async (req, res, next) => {
    const articulo = new Articulo({
        name: req.body.name,
        detalle: req.body.detalle,
        resumen: req.body.resumen,
        exp_articulo: req.body.exp_articulo,
        idley: req.body.idley

    });
    await articulo.save();
    res.json({status: 'Articulo creada'});
};

articuloCtrl.getArticulo = async (req, res, next) => {
    const { id } = req.params;
    const articulo = await Articulo.findById(id);
    res.json(articulo);
};

articuloCtrl.editArticulo = async (req, res, next) => {
    const { id } = req.params;
    const articulo = {
        name: req.body.name,
        detalle: req.body.detalle,
        resumen: req.body.resumen,
        exp_articulo: req.body.exp_articulo,
        idley: req.body.idley

    };
    await Articulo.findByIdAndUpdate(id, {$set: articulo}, {new: true});
    res.json({status: 'Articulo Actualizada'});
};

articuloCtrl.deleteArticulo = async (req, res, next) => {
    await Articulo.findByIdAndRemove(req.params.id);
    res.json({status: 'Articulo Eliminada'});
};


articuloCtrl.getArticuloley = async (req, res) => {
    const { id } = req.params;
    const articulo = await Articulo.find({ 'ley': id});
    res.json(articulo);
}

module.exports = articuloCtrl;