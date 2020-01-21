const mongoose = require('mongoose');
const { Schema } = mongoose;

const ciudadanoSchema = new Schema({

    nombre: { type: String, required: false},
    apellido: { type: String, required: false},
    cedula: { type: String, required: false},
    contrasena: { type: String, required: false},
    cuentatwitter: { type: String, required: false},
    cuentafacebook: { type: String, required: false},

});

module.exports = mongoose.model('Ciudadano', ciudadanoSchema);