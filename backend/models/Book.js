const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    bookId: {
        type: Number,
        required:true,
        unique:true
    },
    title: {
        type: String,
        equired:true
    },
    type: {
        type: String,
        equired:true
    },
    numberPage: {
        type: Number,
        equired:true
    },
    auteur: {
        type: String,
        equired:true
    }
 
}, {
    collection: 'book'
  })

module.exports = mongoose.model('book', BookSchema)