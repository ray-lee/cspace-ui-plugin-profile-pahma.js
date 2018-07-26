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
        path: 'ns2:collectionobjects_pahma/sortableObjectNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_pahma/sortableObjectNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_pahma/pahmaAltNumGroupList/pahmaAltNumGroup/pahmaAltNum',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/isComponent',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/pahmaObjectStatusList/pahmaObjectStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/computedCurrentLocation',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_anthropology/computedCrate',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNameList/objectNameGroup/objectName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/responsibleDepartments/responsibleDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/pahmaEthnographicFileCodeList/pahmaEthnographicFileCode',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocPeopleGroupList/assocPeopleGroup/assocPeople',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/materialGroupList/materialGroup/material',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/titleGroupList/titleGroup/title',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/portfolioSeries',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/pahmaCollectionList/pahmaCollection',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/pahmaTmsLegacyDepartment',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/pahmaFieldCollectionPlaceList/pahmaFieldCollectionPlace',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/fieldCollectionSources/fieldCollectionSource',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/fieldCollectors/fieldCollector',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/fieldColEventNames/fieldColEventName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_anthropology/nagpraInventoryNameList/nagpraInventoryName',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_anthropology/nagpraApplicabilityList/nagpraApplicability',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_pahma/pahmaNagpraCodeLegacyList/pahmaNagpraCodeLegacy',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/sex',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory/taxonomicIdentGroupList/taxonomicIdentGroup/taxon',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectProductionPeopleGroupList/objectProductionPeopleGroup/objectProductionPeople',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/techniqueGroupList/techniqueGroup/technique',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionPersonGroupList/objectProductionPersonGroup/objectProductionPerson',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectProductionPlaceGroupList/objectProductionPlaceGroup/objectProductionPlace',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionOrganizationGroupList/objectProductionOrganizationGroup/objectProductionOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocCulturalContextGroupList/assocCulturalContextGroup/assocCulturalContext',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocOrganizationGroupList/assocOrganizationGroup/assocOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocPersonGroupList/assocPersonGroup/assocPerson',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/assocPlaceGroupList/assocPlaceGroup/assocPlace',
      },
      ...extensions.core.advancedSearch,
      {
        op: OP_RANGE,
        path: 'ns2:collectionspace_core/createdAt',
      },
    ],
  };
};
