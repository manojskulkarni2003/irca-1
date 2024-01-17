const mongoose = require('mongoose');

const Form4 = new mongoose.Schema({
  date2: String,
  complaints2: String,
  medication2: String,
  signature2: String,
});

const Form4Model = mongoose.model('Form4', Form4);

module.exports = Form4Model;
