const mongoose = require('mongoose');

const Form3 = new mongoose.Schema({
  name: String,
  age: String,
  dateOfAdmission: String,
  historyOfAlcoholismOrSubstanceAbuse: String,
  physicalComplications: String,
  pastHistory: String,
  psychiatricProblems: String,
  withdrawalSymptoms: String,
  treatment: String,
});

const Form3Model = mongoose.model('Form3', Form3);

module.exports = Form3Model;
