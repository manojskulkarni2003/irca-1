import mongoose from 'mongoose'

// Define a schema for the family history data
const familyHistorySchema = new mongoose.Schema({
  name: { type: String },
  relation: { type: String },
  age: { type: String },
  income: { type: String },
  education: { type: String },
  occupation: { type: String },
  intoxicants: { type: String },
});

// Define a schema for the overall data
const page1Schema = new mongoose.Schema({
  familyHistoryRows: [familyHistorySchema],
  fatherDeathReason: { type: String },
  motherDeathReason: { type: String },
  fatherDeathAge: { type: String },
  motherDeathAge: { type: String },
  motherTongue: { type: String },
  languagesKnown: { type: String },
  denialStatus: { type: String },
});

// Create a model based on the schema
const Page1Model = mongoose.model('Page1', page1Schema);

export default Page1Model;