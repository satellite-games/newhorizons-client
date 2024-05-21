import type { VNumberInput } from 'vuetify/labs/components';

export default {
  variant: 'outlined' as VProps<VNumberInput>['variant'],
  fields: {
    attributePoints: {
      min: 0,
      max: 99,
    },
    traitPoints: {
      min: -99,
      max: 99,
    },
    interestPoints: {
      min: 0,
      max: 999,
    },
    traitsMinimum: {
      min: 0,
      max: 99,
    },
    traitsMaximum: {
      min: 0,
      max: 99,
    },
    abilitiesMaximum: {
      min: 0,
      max: 99,
    },
    bonusCredits: {
      min: 0,
      max: 9999999,
    },
    startExperience: {
      min: 0,
      max: 99999,
    },
    startFatePoints: {
      min: 0,
      max: 5,
    },
  },
};
