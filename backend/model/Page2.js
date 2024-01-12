import mongoose from 'mongoose'

const page2Schema = new mongoose.Schema({
  causativeFactors: { type: String },
  experienceOfBlackout: {
    tolerance: { type: String },
  },
  behavioralChanges: {
    violent: { type: Boolean, default: false },
    moreTalkative: { type: Boolean, default: false },
    moreFunny: { type: Boolean, default: false },
    angry: { type: Boolean, default: false },
    depressed: { type: Boolean, default: false },
    sleeping: { type: Boolean, default: false },
    grandiosity: { type: Boolean, default: false },
  },
  childhoodAndAdolescence: {
    description: { type: String },
    experiencesBefore15: {
      poverty: { type: String, enum: ['present', 'absent'] },
      parentalLoss: { type: String, enum: ['present', 'absent'] },
      maritalAffairs: { type: String, enum: ['present', 'absent'] },
      brokenHome: { type: String, enum: ['present', 'absent'] },
      violence: { type: String, enum: ['present', 'absent'] },
      sexualAbuse: { type: String, enum: ['present', 'absent'] },
      none: { type: String, enum: ['present', 'absent'] },
      other: { type: String, enum: ['present', 'absent'] },
    },
  },
});

const Page2Model = mongoose.model('Page2', page2Schema);

export default Page2Model;
