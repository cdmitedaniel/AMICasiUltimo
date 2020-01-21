const mongoose = require('mongoose');
const { Schema } = mongoose;

const interaccionSchema = new Schema({

    idusuario: { type: String, required: false},
    idley: { type: String, required: false},
    likes: { type: String, required: false},
    comentariostotales: { type: String, required: false},
    compartidastotales: { type: String, required: false},



});

module.exports = mongoose.model('Interaccion', interaccionSchema);