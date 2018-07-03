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
        op: OP_RANGE,
        path: 'ns2:acquisitions_common/accessionDateGroup',
      },
      {
        op: OP_RANGE,
        path: 'ns2:acquisitions_common/acquisitionDateGroupList/acquisitionDateGroup',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:acquisitions_common/acquisitionReferenceNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_common/acquisitionSources/acquisitionSource',
      },
      {
        op: OP_EQ,
        path: 'ns2:acquisitions_pahma/acquisitionDonorGroupList/acquisitionDonorGroup/donor',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:acquisitions_common/creditLine',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:acquisitions_common/fieldCollectionEventNames/fieldCollectionEventName',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionspace_core/createdAt',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
