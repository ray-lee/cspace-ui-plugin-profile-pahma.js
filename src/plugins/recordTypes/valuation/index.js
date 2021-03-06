import fields from './fields';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    valuation: {
      fields: fields(configContext),
    },
  },
});
