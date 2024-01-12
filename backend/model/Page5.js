import mongoose from 'mongoose'

const adjustmentPatternsSchema = new mongoose.Schema({
  relationshipWithFamily: {
    noFamily: {
      parents: { type: String, default: '' },
      siblings: { type: String, default: '' },
      spouse: { type: String, default: '' },
      children: { type: String, default: '' },
    },
    disownedByFamily: {
      parents: { type: String, default: '' },
      siblings: { type: String, default: '' },
      spouse: { type: String, default: '' },
      children: { type: String, default: '' },
    },
    usuallyFriendlyMinorConflicts: {
      parents: { type: String, default: '' },
      siblings: { type: String, default: '' },
      spouse: { type: String, default: '' },
      children: { type: String, default: '' },
    },
    mixedOrIndifferentFeelings: {
      parents: { type: String, default: '' },
      siblings: { type: String, default: '' },
      spouse: { type: String, default: '' },
      children: { type: String, default: '' },
    },
    supportive: {
      parents: { type: String, default: '' },
      siblings: { type: String, default: '' },
      spouse: { type: String, default: '' },
      children: { type: String, default: '' },
    },
    notApplicable: {
      parents: { type: String, default: '' },
      siblings: { type: String, default: '' },
      spouse: { type: String, default: '' },
      children: { type: String, default: '' },
    },
  },
  familyDamage: { type: String, enum: ['mild', 'moderate', 'severe'], default: 'mild' },
  sexualHistory: {
    extraMaritalExperiences: {
      present: {
        ageOfPartner: { type: String, default: '' },
        sustainedRelationship: { type: String, default: '' },
        yearsKnown: { type: String, default: '' },
        livingArrangement: { type: String, default: '' },
        anyChildren: { type: String, default: '' },
      },
    },
    highRiskSexualActivities: {
      present: {
        commercial: { type: String, enum: ['always', 'sometimes', 'never'], default: 'never' },
        casualAcquaintance: { type: String, enum: ['always', 'sometimes', 'never'], default: 'never' },
      },
    },
    HIVTest: {
      present: {
        HIVStatus: { type: String, enum: ['positive', 'negative', 'notWillingToReveal', 'notCollectedReports', 'notApplicable'], default: 'notApplicable' },
      },
    },
    sexualProblems: {
      present: {
        reducedLibido: { type: String, enum: ['yes', 'no'], default: 'no' },
        impotency: { type: String, enum: ['yes', 'no'], default: 'no' },
        excessiveSexualUrge: { type: String, enum: ['yes', 'no'], default: 'no' },
        completeAbstinence: { type: String, enum: ['yes', 'no'], default: 'no' },
        anyOther: { type: String, enum: ['yes', 'no'], default: 'no' },
      },
    },
  },
});

const AdjustmentPatternsModel = mongoose.model('AdjustmentPatterns', adjustmentPatternsSchema);

export default AdjustmentPatternsModel;
