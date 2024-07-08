import type { VTextField, VTextarea } from 'vuetify/components';

export default {
  variant: 'outlined' as VProps<VTextField>['variant'],
  bgColor: 'secondary' as VProps<VTextField>['bgColor'],
  fields: {
    name: {
      type: 'text',
      required: true,
      maxLength: 60,
    },
    gender: {
      type: 'text',
      required: false,
      maxLength: 30,
    },
    birthday: {
      type: 'date',
      required: false,
    },
    age: {
      type: 'number',
      required: false,
      min: 0,
      max: 999,
    },
    height: {
      type: 'number',
      required: false,
      min: 0,
      max: 999,
    },
    weight: {
      type: 'number',
      required: false,
      min: 0,
      max: 999,
    },
    appearance: {
      type: 'text',
      required: false,
      maxLength: 500,
      noResize: true,
    },
    personality: {
      type: 'text',
      required: false,
      maxLength: 500,
      noResize: true,
    },
    family: {
      type: 'text',
      required: false,
      maxLength: 500,
      noResize: true,
    },
  } as Record<string, Partial<VProps<VTextField | VTextarea>>>,
};
