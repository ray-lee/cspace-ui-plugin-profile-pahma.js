export default (configContext) => {
  const {
    OP_EQ,
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
        op: OP_EQ,
        path: 'ns2:movements_common/currentLocation',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_anthropology/crate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/locationDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_anthropology/locationHandlers/locationHandler',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/movementMethods/movementMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/reasonForMove',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
