import mongoose from 'mongoose'

const page3Schema = new mongoose.Schema({
  educationalHistory: {
    yearsOfEducation: { type: Number, default: 0 },
    achievements: { type: String, default: '' },
    activities: {
      goodAcademicRecords: { type: String, enum: ['present', 'absent'], default: 'absent' },
      highAchieverInActivities: { type: String, enum: ['present', 'absent'], default: 'absent' },
    },
  },
  maritalHistory: {
    spouse: {
      name: { type: String, default: '' },
      age: { type: String, default: '' },
      religionCommunity: { type: String, default: '' },
      education: { type: String, default: '' },
      occupation: { type: String, default: '' },
      incomePerMonth: { type: String, default: '' },
    },
  },
});

const Page3Model = mongoose.model('Page3', page3Schema);

export default Page3Model;
