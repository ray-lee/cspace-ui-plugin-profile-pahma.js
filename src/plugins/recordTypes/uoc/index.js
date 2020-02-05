import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    uoc: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
