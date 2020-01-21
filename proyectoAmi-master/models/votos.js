const mongoose = require('mongoose');
const { Schema } = mongoose;

const votoSchema = new Schema({

    iduser: { type: String, required: false},
    idarticulo: { type: String, required: false},
    fechavotacion: { type: String, required: false},
    voto: { type: String, required: false},
    ciudadano: { type: String, required: false},

   
});

module.exports = mongoose.model('Voto', votoSchema);