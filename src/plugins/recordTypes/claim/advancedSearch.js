export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:claims_common/claimNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:claims_anthropology/claimName',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_anthropology/claimTypeList/claimType',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
