import { intl } from '@spuxx/browser-utils';

/**
 * Creates a set of rules for a select field.
 * @param options The options for the select field.
 */
export const createSelectValidationRules = (options: { required: boolean }) => {
  const { required } = options;
  const rules: Array<(value: string) => string | true> = [];
  if (required) {
    rules.push((value: string) => (value ? true : intl('validation.selection-required')));
  }
  return rules;
};

/**
 * Creates a set of rules for a generic input field.
 * @param options The options for the input field.
 */
export const createInputValidationRules = (options: {
  required?: boolean;
  type?: 'text' | 'number';
  min?: number;
  max?: number;
}) => {
  const { required, type, min, max } = options;
  const rules: Array<(value: string | number) => string | true> = [];
  if (type === 'number') {
    rules.push((value: string | number) =>
      !isNaN(parseInt(value.toString())) ? true : intl('validation.input-number'),
    );
  }
  if (required) {
    rules.push((value: string | number) =>
      value?.toString() ? true : intl('validation.input-required'),
    );
  }
  if (typeof min === 'number') {
    rules.push((value: string | number) =>
      parseInt(value.toString()) >= min
        ? true
        : intl('validation.input-minimum', { min: min.toString() }),
    );
  }
  if (typeof max === 'number') {
    rules.push((value: string | number) =>
      parseInt(value.toString()) <= max
        ? true
        : intl('validation.input-maximum', { max: max.toString() }),
    );
  }
  return rules;
};
