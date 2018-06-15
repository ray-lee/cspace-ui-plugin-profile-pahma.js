export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
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
        path: 'ns2:locations_common/locTermGroupList/locTermGroup/termDisplayName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:locations_common/locTermGroupList/locTermGroup/termName',
      },
      {
        op: OP_EQ,
        path: 'ns2:locations_common/locTermGroupList/locTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:locations_common/locTermGroupList/locTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:locations_common/locTermGroupList/locTermGroup/termLanguage',
      },
      {
        op: OP_EQ,
        path: 'ns2:locations_common/locationType',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:locations_common/conditionGroupList/conditionGroup/conditionNote',
      },
      ...extensions.core.advancedSearch,
      {
        op: OP_RANGE,
        path: 'ns2:collectionspace_core/createdAt',
      },
    ],
  };
};
