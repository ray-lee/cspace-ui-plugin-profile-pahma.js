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
        path: 'ns2:conditionchecks_common/conditionCheckRefNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_common/conditionCheckGroupList/conditionCheckGroup/condition',
      },
      {
        op: OP_EQ,
        path: 'ns2:conditionchecks_common/conservationTreatmentPriority',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conditionchecks_common/nextConditionCheckDate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:conditionchecks_common/conditionCheckAssessmentDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
