const mongoose = require('mongoose');
const { Schema } = mongoose;

const rolSchema = new Schema({
    idpersona: { type: String, required: false},
    descripcion: { type: String, required: false }
    
});

module.exports = mongoose.model('Rol', rolSchema);