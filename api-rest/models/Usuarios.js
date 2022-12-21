const mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    name: String,
    surname: String,
    email:String,
    password:String,
    image:String,
    role:String
})

module.exports = mongoose.model("Usuario", UsuarioSchema);