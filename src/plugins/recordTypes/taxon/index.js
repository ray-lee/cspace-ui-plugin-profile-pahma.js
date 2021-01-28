import fields from './fields';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    taxon: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
