const mongoose = require('mongoose');
const { Schema } = mongoose;

const articuloSchema = new Schema({

    name: { type: String, required: false},
    detalle: { type: String, required: false},
    resumen: { type: String, required: false},
    exp_articulo: { type: String, required: false},
    idley: { type: String, required: false}

    
});

module.exports = mongoose.model('Articulo', articuloSchema);