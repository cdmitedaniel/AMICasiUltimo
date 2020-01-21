const mongoose = require('mongoose');
const { Schema } = mongoose;

const personaSchema = new Schema({
    nombre: { type: String, required: false},
    apellido: { type: String, required: false},
    cedula: { type: String, required: false},
    fecha_nacimiento: { type: String, required: false},
    lugar_nacimiento: { type: String, required: false},
    correo: { type: String, required: false},
    sexo: { type: String, required: false},
    domicilio: { type: String, required: false}
});

module.exports = mongoose.model('Persona', personaSchema);