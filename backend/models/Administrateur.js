const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdministrateurSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
 
}, {
    collection: 'Administrateur'
  })
var User=mongoose.model('Administrateur', AdministrateurSchema);
module.exports = User