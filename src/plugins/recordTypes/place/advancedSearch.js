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
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termDisplayName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termName',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termLanguage',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_anthropology/anthropologyPlaceTypes/anthropologyPlaceType',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_anthropology/anthropologyPlaceOwnerGroupList/anthropologyPlaceOwnerGroup/anthropologyPlaceOwner',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:places_anthropology/placeNoteGroupList/placeNoteGroup/placeNoteText',
      },
      ...extensions.core.advancedSearch,
      {
        op: OP_RANGE,
        path: 'ns2:collectionspace_core/createdAt',
      },
    ],
  };
};
