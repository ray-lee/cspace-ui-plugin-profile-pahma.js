import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    loanin: {
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
