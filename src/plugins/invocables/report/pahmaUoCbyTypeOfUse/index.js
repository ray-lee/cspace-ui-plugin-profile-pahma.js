import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      pahmaUOCbyTypeOfUse: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
