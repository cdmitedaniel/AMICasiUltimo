const mongoose = require('mongoose');
const { Schema } = mongoose;

const comentarioSchema = new Schema({

    idpublicacionley: { type: String, required: false},
    like: { type: String, required: false},
    dislike: { type: String, required: false},
    comentarios: { type: String, required: false},

});

module.exports = mongoose.model('Comentario', comentarioSchema);