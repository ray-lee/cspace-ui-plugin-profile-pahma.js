import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    hit: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
