import columns from './columns';

export default () => (configContext) => ({
  recordTypes: {
    all: {
      columns: columns(configContext),
    },
  },
});
