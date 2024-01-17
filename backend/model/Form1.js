const mongoose = require('mongoose');

const Form1 = new mongoose.Schema({
  t1: String,
  t2: String,
  t3: String,
  t4: String,
  c1: [String],
  respiratory_system: String,
  cardiovascular_system: String,
  gastrointestinal_system: String,
  nervous_system: String,
  incident: String,
  incidentDescription: String,
  actionTaken: String,
  severity: String,
  investigation: String,
  certificateDetails: String,
});

const Form1Model = mongoose.model('Form1', Form1);

module.exports = Form1Model;
