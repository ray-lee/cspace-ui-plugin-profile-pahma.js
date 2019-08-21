import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      pahmaUOCbyRequesterObject: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
