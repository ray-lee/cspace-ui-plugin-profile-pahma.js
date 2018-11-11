import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    location: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
