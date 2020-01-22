const Ley = require('../models/ley');
const Articulo = require('../models/articulo');

const leyCtrl = {};

leyCtrl.getLeyes = async (req, res, next) => {
    const leyes = await Ley.find();
    res.json(leyes);
};

leyCtrl.createLey = async (req, res, next) => {
    const ley = new Ley({

        estado: req.body.estado,
        periodo: req.body.periodo,
        nombre: req.body.nombre,
        cod_decreto: req.body.cod_decreto,
        fecha_publicacion: req.body.fecha_publicacion,
        descripcion: req.body.descripcion,
        proponente: req.body.proponente
    });
    await ley.save();
    res.json({status: 'Ley creada'});
};

leyCtrl.getLey = async (req, res, next) => {
    const { id } = req.params;
    const ley = await Ley.findById(id);
    res.json(ley);
};

leyCtrl.editLey = async (req, res, next) => {
    const { id } = req.params;
    const ley = {
        estado: req.body.estado,
        periodo: req.body.periodo,
        nombre: req.body.nombre,
        cod_decreto: req.body.cod_decreto,
        fecha_publicacion: req.body.fecha_publicacion,
        descripcion: req.body.descripcion,
        proponente: req.body.proponente
    };
    await Ley.findByIdAndUpdate(id, {$set: ley}, {new: true});
    res.json({status: 'Ley Actualizada'});
};

leyCtrl.deleteLey = async (req, res, next) => {
    await Ley.findByIdAndRemove(req.params.id);
    res.json({status: 'Ley Eliminada'});
};

leyCtrl.getLeyEstado = async (req, res, next) => {
    const { id } = req.params;
    const estado = await Ley.find({ 'estado': id}).select({estado: 1});

    const datafinal = [await estado];
    res.json(datafinal);
}

leyCtrl.getLeyArticulo = async (req, res, next) => {
    const { id } = req.params;
    const articulo = await Articulo.find({ 'name': id}).select({name: 1});;
    const dataart = [await articulo];
    res.json(dataart);
}

leyCtrl.getLeyPeriodo = async (req, res, next) => {
    const { id } = req.params;
    const periodo = await Ley.find({ 'periodo': id}).select({periodo: 1});

    const dataper = [await periodo];
    res.json(dataper);
}



module.exports = leyCtrl;