const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmpreintSchema = new Schema({
    idEmpreint: {
        type: Number,
        required:true,
        unique:true
    },
    dateEmpreint: {
        type: date,
        default : date.now,
        required:true
    },
    dateRendu: {
        type: date
    },
    cneEtudiant: {
        type: String,
        required:true
    },
    IdBook: {
        type: Number,
        required:true
    }
 
}, {
    collection: 'Empreint'
  })

module.exports = mongoose.model('Empreint', EmpreintSchema)