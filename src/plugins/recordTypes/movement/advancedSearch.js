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
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/inventoryDate',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/inventoryContactList/inventoryContact',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/inventoryActionRequired',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:movements_common/inventoryNote',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:movements_common/movementReferenceNumber',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};


// - Add crate
// - Add locationHanlder
