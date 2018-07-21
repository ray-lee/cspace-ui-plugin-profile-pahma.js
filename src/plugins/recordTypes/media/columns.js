export default () => ({
  default: {
    primaryDisplay: {
      // This column is used only for sorting related media snapshots.
      // It is disabled so it doesn't appear in search result tables.
      disabled: true,
      sortBy: 'media_pahma:primaryDisplay',
    },
  },
});
