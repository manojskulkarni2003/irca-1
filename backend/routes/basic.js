import express from 'express'
const router=express.Router();

import mongoose from 'mongoose'
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000; // Your desired port
// const cors = require('cors'); //This is used if frontend and backend are running on different port
// Connect to MongoDB


// Create a schema for your data
 const formBasicSchema = new mongoose.Schema({
    name: String,
    maritalStatus: String,
    occupation: String,
    age: Number,
    dob: String,
    dateOfIntake: String,
    dateOfAdmission: Date,
    bpl: String,
    accompaniedBy: String,
    yearOfDrinkingAbuse: String,
    yearOfExcessiveAbuse: String,
    presentPatternAbuse: String,
    presenceOf: String,
    useOfOtherDrugs: String,
    psychiatricProblem: String,
    denial: String,
    physicalProblems: String,
    priorTreatment: String,
    willingnessForTreatment: String,
    motivatingFactor: String,
  // Add more fields based on your form
  issue1: String,
  issue2:String,
  issue3:String,
  issue4:String,
  impression:String,
  action:String,
  address:String,
  mobno1:[{number:String, name:String, relation:String}],
  mobno2:[{number:String, name:String, relation:String}],
  mobno3:[{number:String, name:String, relation:String}],
  landline:[{number:String, name:String, relation:String}],
  remarks:String,
  data1:String,
  date:String,
  name1:String,
  name2:String,
  mobno:String,
  input1:String,
  input2:String,
  input3:String,
  input4:String,

  input5:String,
  input6:String,
  input7:String,

  input8:String,
  input9:String,
  input10:String,
  input11:String,
  input12:String,
  input13:String,
  input14:String,
  input15:String,
  input16:String,
  input17:String,
  input18:String,
  input19:String,

  input20:String,
  input21:String,
  input22:String,

  input23:String,
  input24:String,
  input25:String,
  input26:String,
  input27:String,
  input28:String,
});

// Create a model
export const FormBasicData = mongoose.model('FormBasicData', formBasicSchema);


// app.use(cors());

// app.use(bodyParser.json());

// Handle form data submission
router.post('/api/submitFormData', async (req, res) => {
  try {
    // Combine data from different pages
    const {
      name,
      maritalStatus,
      occupation,
      age,
      dob,
      dateOfIntake,
      dateOfAdmission,
      bpl,
      accompaniedBy,
      yearOfDrinkingAbuse,
      yearOfExcessiveAbuse,
      presentPatternAbuse,
      presenceOf,
      useOfOtherDrugs,
      psychiatricProblem,
      denial,
      physicalProblems,
      priorTreatment,
      willingnessForTreatment,
      motivatingFactor,
      // Add other fields from page 1
      issue1,
      issue2,
      issue3,
      issue4,
      impression,
      action,
      address,
      // Add fields from page 2
      mobno1,
    mobno2,
    mobno3,
    landline,
    remarks,
    data1,
    date,
    name1,
    name2,
    mobno,
    input1,
    input2,
    input3,
    input4,

    input5,
    input6,
    input7,

    input8,
    input9,
    input10,
    input11,
    input12,
    input13,
    input14,
    input15,
    input16,
    input17,
    input18,
    input19,

    input20,
    input21,
    input22,

    input23,
    input24,
    input25,
    input26,
    input27,
    input28,
    } = req.body;


    // Create a new instance of FormData and assign values from different pages
    const formBasicData = new FormBasicData({
      name,
      maritalStatus,
      occupation,
      age,
      dob,
      dateOfIntake,
      dateOfAdmission,
      bpl,
      accompaniedBy,
      yearOfDrinkingAbuse,
      yearOfExcessiveAbuse,
      presentPatternAbuse,
      presenceOf,
      useOfOtherDrugs,
      psychiatricProblem,
      denial,
      physicalProblems,
      priorTreatment,
      willingnessForTreatment,
      motivatingFactor,
      // Assign values from page 1
      issue1,
      issue2,
      issue3,
      issue4,
      impression,
      action,
      address,
      // Assign values from page 2
      mobno1:{
        number:Number,
        name:String,
        relation:String
      },
      mobno2:{
        number:Number,
        name:String,
        relation:String
      },
      mobno3:{
        number:Number,
        name:String,
        relation:String
      },
      landline:{
        number:Number,
        name:String,
        relation:String
      },
      remarks,
      data1,
    date,
    name1,
    name2,
    mobno,
    input1,
    input2,
    input3,
    input14,

    input5,
    input6,
    input7,

    input8,
    input9,
    input10,
    input11,
    input12,
    input13,
    input14,
    input15,
    input16,
    input17,
    input18,
    input19,

    input20,
    input21,
    input22,

    input23,
    input24,
    input25,
    input26,
    input27,
    input28,
    });

    await formBasicData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving form data' });
  }
});

// API endpoint to fetch incomplete data based on name
router.get('/api/getIncompleteData', async (req, res) => {
  const { name } = req.query;

  try {
    // Replace this with your database query logic
    const incompleteData = await FormBasicData.findOne({ name });

    if (!incompleteData) {
      return res.status(404).json({ message: 'Incomplete data not found' });
    }

    return res.status(200).json(incompleteData);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});


router.get('/api/getBasicFormData', async (req, res) => {
  const { name } = req.body;

  try {
    // Replace this with your database query logic
    const basicFormData = await FormBasicData.findOne({ name });

    if (!basicFormData) {
      return res.status(404).json({ message: 'Basic form data not found' });
    }

    return res.status(200).json(basicFormData);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching basic form data' });
  }
});

export default router;