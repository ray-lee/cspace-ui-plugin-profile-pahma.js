import fields from './fields';
import forms from './forms';

export default () => (configContext) => ({
  invocables: {
    report: {
      pahmaUoCbyStudentVisits: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
