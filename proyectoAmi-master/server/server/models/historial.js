const mongoose = require('mongoose');
const { Schema } = mongoose;

const historialSchema = new Schema({

    iduser: { type: String, required: false},
    idley: { type: String, required: false},
    fecha_publicacion: { type: String, required: false},
    detalle: { type: String, required: false},
    estado: { type: String, required: false},
    expl_estado: { type: String, required: false},
});

module.exports = mongoose.model('Historial', historialSchema);