const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    min: 1
  },
  first_name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  last_name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 320,
  },
  gender: {
    type: String,
    required: true
  },
  income: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  car: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  quote: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255
  },
  phone_price: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
