const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  cin: {
    type: String,
    required: true,
    unique:true
  }
},)

module.exports = mongoose.model('Student', studentSchema)