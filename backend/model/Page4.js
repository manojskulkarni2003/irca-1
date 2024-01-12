import mongoose from 'mongoose'

const page4Schema = new mongoose.Schema({
  spouseDetails: {
    yearsOfMarriedLife: { type: String, default: '' },
    marriageType: { type: String, enum: ['arranged', 'byChoice'], default: 'arranged' },
    acceptedByFamily: { type: String, enum: ['yes', 'no'], default: 'yes' },
    previousSubsequentMarriages: { type: String, enum: ['yes', 'no'], default: 'no' },
    separatedDueToAddiction: { type: String, enum: ['yes', 'no'], default: 'no' },
    suspiciousOfWife: {
      whileInfluenceOfAlcoholDrugs: { type: String, default: '' },
      abstinence: { type: String, default: '' },
    },
    familyViolence: { type: String, enum: ['yes', 'no'], default: 'no' },
    physicalViolence: { type: String, enum: ['yes', 'no'], default: 'no' },
    verballyAbusive: { type: String, enum: ['yes', 'no'], default: 'no' },
    violentIncident: { type: String, enum: ['yes', 'no'], default: 'no' },
    breakingArticles: { type: String, enum: ['yes', 'no'], default: 'no' },
    childrenDetails: {
      male: { type: Number, default: 0 },
      female: { type: Number, default: 0 },
    },
  },
  familyHealthStatus: {
    parentsSiblings: {
      majorDepression: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      suicideAttempted: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      psychiatricIllnesses: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      alcoholDependence: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      drugDependence: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      anyOther: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
    },
    wifeChildren: {
      majorDepression: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      suicideAttempted: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      psychiatricIllnesses: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      alcoholDependence: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      drugDependence: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
      anyOther: { type: String, enum: ['yes', 'no', 'dontKnow'], default: 'dontKnow' },
    },
  },
});

const Page4Model = mongoose.model('Page4', page4Schema);

export default Page4Model;
