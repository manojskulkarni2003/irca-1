import express from 'express'
const router=express.Router();

import mongoose from 'mongoose'
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const { default: router } = require('./basic');
// const cors = require('cors');
// const router=express.Router();

// const app = express();
// const PORT = 5000;

// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const formMedicalSchema = new mongoose.Schema({
  regNo: String,
  name: String,
  age: String,
  dateOfRegistration: String,
  alcoholDrugAbused: {
    depressants: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
    narcoticAnalgesic: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
    cannabis: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
    stimulants: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
    hallucinogens: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
    inhalants: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
    substanceNotClassified: {
      ageOfFirstUse: String,
      yearsOfUse: String,
      yearsOfExcessiveUse: String,
      specificType: String,
      routeOfAdministration: String,
      frequencyLast30Days: String,
      quantityLast30Days: String,
      pastUse: String,
    },
  },
  lastDrinkOrDrugsDaysAgo: String,
  diagnosis: String,
  previousHistory: String,
  alcoholSymptoms: [Boolean],
  drugSymptoms: [Boolean],
  psychiatricComplications: [Boolean],
  medicalProblems: [Boolean],
  chronicProblems: [Boolean],
  tobaccoUse: String,
  allergyKnowledge: String,

  physicalexamination: {
    pulseRate: String,
    bloodPressure: String,
    temperature: String,
    weight: String,
    symptoms: {
      anemia:[Boolean],
      lymphNodes: [Boolean],
      glossitis: [Boolean],
      flushedFace: [Boolean],
      palmarErythema: [Boolean],
      pedalEdema: [Boolean],
      tremors: [Boolean],
      jaundice: [Boolean],
      lossOfBodyHair: [Boolean],
      wastingOfMuscles: [Boolean],
      abscess: [Boolean],
      hallucination: [Boolean],
      malnutrition: [Boolean],
      clubbingOfNails: [Boolean],
      spiderNaevi: [Boolean],
      gynaecomastia: [Boolean],
      injectionMarks: [Boolean],
    },
    abnormalities: {
      respiratorySystem: String,
      cardiovascularSystem: String,
      gastrointestinalSystem: String,
      nervousSystem: String,
    },
    untowardIncident: [Boolean],
    incidentDescription: String,
    actionTaken: String,
    impression: String,
    investigation: String,
    certificateDetails: String,
    date: Date,
  },

  date: Date,
  complaints: String,
  medicationReasons: String,
  signature: String,
});

const FormMedicalData = mongoose.model('FormmedicalData', formMedicalSchema);

// app.use(cors());
// app.use(bodyParser.json());

router.post('/api/submitFormData', async (req, res) => {
  try {
    const {
      regNo,
      name,
      age,
      dateOfRegistration,
      alcoholDrugAbused,
      lastDrinkOrDrugsDaysAgo,
      diagnosis,
      previousHistory,
      alcoholSymptoms,
      drugSymptoms,
      psychiatricComplications,
      medicalProblems,
      chronicProblems,
      tobaccoUse,
      allergyKnowledge,
      physicalexamination,
      date,
      complaints,
      medicationReasons,
      signature,
    } = req.body;


    const formMedicalData = new FormMedicalData({
      regNo,
      name,
      age,
      dateOfRegistration,
      alcoholDrugAbused,
      lastDrinkOrDrugsDaysAgo,
      diagnosis,
      previousHistory,
      alcoholSymptoms,
      drugSymptoms,
      psychiatricComplications,
      medicalProblems,
      chronicProblems,
      tobaccoUse,
      allergyKnowledge,
      physicalexamination,
      date,
      complaints,
      medicationReasons,
      signature,
    });

    await formMedicalData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while saving form data' });
  }
});


router.get('/api/getMedicalFormData', async (req, res) => {
  const { name } = req.query;

  try {
    // Replace this with your database query logic
    const medicalFormData = await FormMedicalData.findOne({ name });

    if (!medicalFormData) {
      return res.status(404).json({ message: 'Medical form data not found' });
    }

    return res.status(200).json(medicalFormData);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while fetching medical form data' });
  }
});


export default router;
