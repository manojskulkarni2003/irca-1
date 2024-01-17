// import express from 'express'
// const router=express.Router();

// import mongoose from 'mongoose';

// // import  express = require('express');
// // import mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const { default: router } = require('./basic');
// // const router=express.Router();



// // const app = express();
// // const PORT = 5000;
// // const cors = require('cors');
// // mongoose.connect('mongodb://127.0.0.1:27017/IRCA', { useNewUrlParser: true, useUnifiedTopology: true });

// // const formPastSchema = new mongoose.Schema({
// //   t1: String,
// //   t2: String,
// //   t3: String,
// //   t4: String,
// //   c1: [String],
// //   respiratory_system: String,
// //   cardiovascular_system: String,
// //   gastrointestinal_system: String,
// //   nervous_system: String,
// //   incident: String,
// //   incidentDescription: String,
// //   actionTaken: String,
// //   counselorImpression: String,
// //   severity: String,
// //   investigation: String,
// //   certificateDetails: String,
// //   date: Date,
// //   complaints: String,
// //   medication: String,
// //   signature: String,
// //   name: String,
// //   age: Number,
// //   dateOfAdmission: Date,
// //   historyOfAlcoholismOrSubstanceAbuse: String,
// //   physicalComplications: String,
// //   pastHistory: String,
// //   psychiatricProblems: String,
// //   withdrawalSymptoms: String,
// //   treatment: String,
// //   date2: Date,
// //   complaints2: String,
// //   medication2: String,
// //   signature2: String,
// // });

// // const FormPastData = mongoose.model('FormPastData', formPastSchema);

// // // app.use(cors());
// // // app.use(bodyParser.json());

// // router.post('/api/submitFormPastData.', async (req, res) => {
// //   try {
// //     const {
// //       t1, t2, t3, t4, c1, respiratory_system, cardiovascular_system,
// //       gastrointestinal_system, nervous_system, incident, incidentDescription,
// //       actionTaken, counselorImpression, severity, investigation, certificateDetails,
// //       date, complaints, medication, signature, name, age, dateOfAdmission,
// //       historyOfAlcoholismOrSubstanceAbuse, physicalComplications, pastHistory,
// //       psychiatricProblems, withdrawalSymptoms, treatment, date2, complaints2,
// //       medication2, signature2,
// //     } = req.body;

// //     const formPastData = new FormPastData({
// //       t1, t2, t3, t4, c1, respiratory_system, cardiovascular_system,
// //       gastrointestinal_system, nervous_system, incident, incidentDescription,
// //       actionTaken, counselorImpression, severity, investigation, certificateDetails,
// //       date, complaints, medication, signature, name, age, dateOfAdmission,
// //       historyOfAlcoholismOrSubstanceAbuse, physicalComplications, pastHistory,
// //       psychiatricProblems, withdrawalSymptoms, treatment, date2, complaints2,
// //       medication2, signature2,
// //     });

// //     await formPastData.save();
// //     res.status(201).json({ message: 'Form data saved successfully' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'An error occurred while saving form data' });
// //   }
// // });


// import {Form1Model} from '../model/Form1.js';
// import {Form2Model} from '../model/Form2.js';
// import {Form3Model} from '../model/Form3.js';
// import {Form4Model} from '../model/Form4.js';

// router.post('/form1', async (req, res) => {
//   const formData = req.body;
//   console.log(formData)

//   try {
//     const savedData = await Form1Model.create(formData);
//     res.status(201).json(savedData);
//   } catch (error) {
//     console.error('Error saving Form1 data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// })

// router.post('/form2', async (req, res) => {
//   const formData = req.body;

//   try {
//     const savedData = await Form2Model.create(formData);
//     res.status(201).json(savedData);
//   } catch (error) {
//     console.error('Error saving Form2 data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// router.post('/form3', async (req, res) => {
//   const formData = req.body;

//   try {
//     const savedData = await Form3Model.create(formData);
//     res.status(201).json(savedData);
//   } catch (error) {
//     console.error('Error saving Form3 data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// router.post('/form4', async (req, res) => {
//   const formData = req.body;

//   try {
//     const savedData = await Form4Model.create(formData);
//     res.status(201).json(savedData);
//   } catch (error) {
//     console.error('Error saving Form4 data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// export default router;