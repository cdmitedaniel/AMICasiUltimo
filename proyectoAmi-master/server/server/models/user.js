const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    idpersona: { type: String, required: false},
    rol: { type: String, required: false },
    user: { type: String, required: false },
    password: { type: String, required: false}
});

module.exports = mongoose.model('User', userSchema);