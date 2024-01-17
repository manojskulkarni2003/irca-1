const mongoose = require('mongoose');

const Form2 = new mongoose.Schema({
  date: String,
  complaints: String,
  medication: String,
  signature: String,
});

const Form2Model = mongoose.model('Form2', Form2);

module.exports = Form2Model;
