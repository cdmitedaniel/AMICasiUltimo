const mongoose = require('mongoose');
const { Schema } = mongoose;

const publicacionSchema = new Schema({

    titulo: { type: String, required: false},
    descripcion: { type: String, required: false},
    likesTotal: { type: String, required: false},
    idley: { type: String, required: false},
    idarticulo: { type: String, required: false},
    dislikesTotales: { type: String, required: false},


});

module.exports = mongoose.model('Publicacion', publicacionSchema);