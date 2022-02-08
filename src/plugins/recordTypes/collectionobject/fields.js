import { defineMessages } from 'react-intl';
import { transformSortableObjectNumberSearch, computeSortableObjectNumber } from './utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  const {
    lodash,
    Immutable,
  } = configContext.lib;

  // Make a copy of dimension extension fields, but make measuredPartGroupList not cloneable. This
  // config can't be done in the dimension extension itself, because measuredPartGroupList should
  // remain cloneable in other record types (e.g. media).

  const customizedDimensionFields = lodash.merge({}, extensions.dimension.fields, {
    measuredPartGroupList: {
      [config]: {
        cloneable: false,
      },
    },
  });

  return {
    document: {
      [config]: {
        compute: (args) => computeSortableObjectNumber(args, Immutable),
      },
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              view: {
                props: {
                  source: 'pahmaDepartments',
                },
              },
            },
          },
        },
        collection: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'objecttype',
              },
            },
          },
        },
        recordStatus: {
          [config]: {
            defaultValue: 'minimalInProgress',
            view: {
              props: {
                source: 'pahmaRecordStatuses',
              },
            },
          },
        },
        briefDescriptions: {
          [config]: {
            cloneable: false,
          },
        },
        titleGroupList: {
          [config]: {
            cloneable: false,
          },
          titleGroup: {
            titleLanguage: {
              [config]: {
                defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(languages):item:name(eng)\'English\'',
              },
            },
            titleTranslationSubGroupList: {
              titleTranslationSubGroup: {
                titleTranslationLanguage: {
                  [config]: {
                    defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(languages):item:name(eng)\'English\'',
                  },
                },
              },
            },
            titleType: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaTitleTypes',
                  },
                },
              },
            },
          },
        },
        objectNameList: {
          [config]: {
            cloneable: false,
          },
          objectNameGroup: {
            objectNameCurrency: {
              [config]: {
                defaultValue: 'current',
                view: {
                  props: {
                    source: 'pahmaNameCurrencies',
                  },
                },
              },
            },
            objectNameLevel: {
              [config]: {
                defaultValue: 'whole',
                view: {
                  props: {
                    source: 'pahmaNameLevels',
                  },
                },
              },
            },
            objectNameSystem: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaNameSystems',
                  },
                },
              },
            },
            objectNameType: {
              [config]: {
                defaultValue: 'simple',
                view: {
                  props: {
                    source: 'pahmaNameTypes',
                  },
                },
              },
            },
            objectNameLanguage: {
              [config]: {
                defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(languages):item:name(eng)\'English\'',
              },
            },
          },
        },
        sex: {
          [config]: {
            cloneable: false,
            view: {
              props: {
                source: 'pahmaSexes',
              },
            },
          },
        },
        phase: {
          [config]: {
            view: {
              props: {
                source: 'pahmaPhases',
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              view: {
                props: {
                  source: 'pahmaForms',
                },
              },
            },
          },
        },
        materialGroupList: {
          materialGroup: {
            material: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/material',
                  },
                },
              },
            },
          },
        },
        objectComponentGroupList: {
          objectComponentGroup: {
            objectComponentName: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
          },
        },
        technicalAttributeGroupList: {
          technicalAttributeGroup: {
            technicalAttribute: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaTechnicalAttributes',
                  },
                },
              },
            },
            technicalAttributeMeasurement: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaTechnicalAttributeMeasurements',
                  },
                },
              },
            },
            technicalAttributeMeasurementUnit: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaTechnicalAttributeMeasurementUnits',
                  },
                },
              },
            },
          },
        },
        ...customizedDimensionFields,
        contentLanguages: {
          contentLanguage: {
            [config]: {
              defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(languages):item:name(eng)\'English\'',
            },
          },
        },
        contentPositions: {
          contentPosition: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'contentposition',
                },
              },
            },
          },
        },
        contentObjectGroupList: {
          contentObjectGroup: {
            contentObjectType: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaContentObjectTypes',
                  },
                },
              },
            },
          },
        },
        contentPeoples: {
          contentPeople: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethculture,concept/archculture',
                },
              },
            },
          },
        },
        contentPlaces: {
          contentPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        contentScripts: {
          contentScript: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'depictedscripttype',
                },
              },
            },
          },
        },
        contentEventNameGroupList: {
          contentEventNameGroup: {
            contentEventNameType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaContentEventTypes',
                  },
                },
              },
            },
          },
        },
        textualInscriptionGroupList: {
          textualInscriptionGroup: {
            inscriptionContentInscriber: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/local,concept/ethculture,concept/archculture',
                  },
                },
              },
            },
            inscriptionContentLanguage: {
              [config]: {
                defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(languages):item:name(eng)\'English\'',
              },
            },
            inscriptionContentPosition: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'inscriptionposition',
                  },
                },
              },
            },
            inscriptionContentScript: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaScripts',
                  },
                },
              },
            },
            inscriptionContentType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'inscriptiontype',
                  },
                },
              },
            },
            inscriptionContentMethod: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'inscriptionmethod',
                  },
                },
              },
            },
          },
        },
        nonTextualInscriptionGroupList: {
          nonTextualInscriptionGroup: {
            inscriptionDescriptionInscriber: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,organization/local,concept/ethculture,concept/archculture',
                  },
                },
              },
            },
            inscriptionDescriptionPosition: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'contentposition',
                  },
                },
              },
            },
            inscriptionDescriptionType: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaInscriptionTypes',
                  },
                },
              },
            },
            inscriptionDescriptionMethod: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'inscriptionmethod',
                  },
                },
              },
            },
          },
        },
        techniqueGroupList: {
          techniqueGroup: {
            techniqueType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaProdTechniqueTypes',
                  },
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
            objectProductionPlaceRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionplacerole',
                  },
                },
              },
            },
          },
        },
        objectProductionPeopleGroupList: {
          objectProductionPeopleGroup: {
            objectProductionPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/ethculture,concept/archculture',
                  },
                },
              },
            },
            objectProductionPeopleRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodcultgrouprole',
                  },
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          objectProductionPersonGroup: {
            objectProductionPersonRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpersonrole',
                  },
                },
              },
            },
          },
        },
        objectProductionOrganizationGroupList: {
          objectProductionOrganizationGroup: {
            objectProductionOrganizationRole: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaProdOrgRoles',
                  },
                },
              },
            },
          },
        },
        assocActivityGroupList: {
          assocActivityGroup: {
            assocActivityType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAssocActivityTypes',
                  },
                },
              },
            },
          },
        },
        assocObjectGroupList: {
          assocObjectGroup: {
            assocObjectType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAssocObjectTypes',
                  },
                },
              },
            },
            assocObjectNote: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        assocConceptGroupList: {
          assocConceptGroup: {
            assocConcept: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
            assocConceptType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAssocConceptTypes',
                  },
                },
              },
            },
          },
        },
        assocCulturalContextGroupList: {
          assocCulturalContextGroup: {
            assocCulturalContext: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/ethculture,concept/archculture',
                  },
                },
              },
            },
            assocCulturalContextType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAssocCulturalContextTypes',
                  },
                },
              },
            },
          },
        },
        assocOrganizationGroupList: {
          assocOrganizationGroup: {
            assocOrganizationType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'assocorgtype',
                  },
                },
              },
            },
          },
        },
        assocPeopleGroupList: {
          assocPeopleGroup: {
            assocPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/ethculture,concept/archculture',
                  },
                },
              },
            },
            assocPeopleType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAssocPeopleTypes',
                  },
                },
              },
            },
          },
        },
        assocPersonGroupList: {
          assocPersonGroup: {
            assocPersonType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'assocpersontype',
                  },
                },
              },
            },
          },
        },
        assocPlaceGroupList: {
          assocPlaceGroup: {
            assocPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
            assocPlaceType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'assocplacetype',
                  },
                },
              },
            },
          },
        },
        assocEventNameType: {
          [config]: {
            view: {
              type: OptionPickerInput,
              props: {
                source: 'pahmaAssocEventTypes',
              },
            },
          },
        },
        assocEventPeoples: {
          assocEventPeople: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethculture',
                },
              },
            },
          },
        },
        assocEventPlaces: {
          assocEventPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        assocDateGroupList: {
          assocDateGroup: {
            assocDateType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAssocDateTypes',
                  },
                },
              },
            },
          },
        },
        usageGroupList: {
          usageGroup: {
            usage: {
              [config]: {
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            usageNote: {
              [config]: {
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
          },
        },
        fieldCollectionSources: {
          fieldCollectionSource: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,concept/ethculture',
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/pahma',
          },
        },
        pahmaObjectStatusList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaObjectStatus: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaObjectStatus.name',
                  defaultMessage: 'Object status',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'pahmaObjectStatuses',
                },
              },
            },
          },
        },
        pahmaTmsLegacyDepartment: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaTmsLegacyDepartment.name',
                defaultMessage: 'Legacy department',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'pahmaTmsLegacyDepartments',
              },
            },
          },
        },
        inventoryCount: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.inventoryCount.name',
                defaultMessage: 'Count note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        isComponent: {
          [config]: {
            defaultValue: 'no',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.isComponent.name',
                defaultMessage: 'Is component?',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'yesNoValues',
              },
            },
          },
        },
        pahmaEthnographicFileCodeList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaEthnographicFileCode: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaEthnographicFileCodeList.name',
                  defaultMessage: 'Ethnographic file code',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethusecode',
                },
              },
            },
          },
        },
        pahmaAltNumGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaAltNumGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaAltNumGroup.name',
                  defaultMessage: 'Alternate number',
                },
              }),
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            pahmaAltNum: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.pahmaAltNum.fullName',
                    defaultMessage: 'Alternate number',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.pahmaAltNum.name',
                    defaultMessage: 'Number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            pahmaAltNumType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumType.fullName',
                    defaultMessage: 'Alternate number type',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'pahmaaltnumber',
                  },
                },
              },
            },
            pahmaAltNumNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumNote.fullName',
                    defaultMessage: 'Alternate number note',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        portfolioSeries: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.portfolioSeries.name',
                defaultMessage: 'R. Keeling audio series',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'pahmaPortfolioSeries',
              },
            },
          },
        },
        pahmaTms2003DataSource: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaTms2003DataSource.name',
                defaultMessage: 'TMS primary data source',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'pahmaTms2003DataSources',
              },
            },
          },
        },
        pahmaCollectionList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaCollection: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaCollection.name',
                  defaultMessage: 'Collection',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'pahmaCollections',
                },
              },
            },
          },
        },
        pahmaFieldCollectionDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaFieldCollectionDateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaFieldCollectionDateGroup.name',
                  defaultMessage: 'Field collection date',
                },
              }),
              repeating: true,
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
        },
        ownershipHistoryGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          ownershipHistoryGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.ownershipHistoryGroup.name',
                  defaultMessage: 'Previous owners',
                },
              }),
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            previousOwner: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.previousOwner.fullName',
                    defaultMessage: 'Previous owner name',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.previousOwner.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local,concept/ethculture',
                  },
                },
              },
            },
            ownershipDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipDateGroup.fullName',
                    defaultMessage: 'Previous ownership date',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            ownershipCategory: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipCategory.fullName',
                    defaultMessage: 'Previous ownerhip category',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipCategory.name',
                    defaultMessage: 'Category',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaOwnershipCategories',
                  },
                },
              },
            },
            ownershipPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipPlace.fullName',
                    defaultMessage: 'Previous ownership place',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
            ownershipMethod: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipMethod.fullName',
                    defaultMessage: 'Previous ownership exchange method',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipMethod.name',
                    defaultMessage: 'Exchg. meth.',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaOwnershipExchangeMethods',
                  },
                },
              },
            },
            ownershipPriceCurrency: {
              [config]: {
                defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(currency):item:name(usd)\'US Dollar ($)\'',
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipPriceCurrency.fullName',
                    defaultMessage: 'Previous ownership price (currency)',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipPriceCurrency.name',
                    defaultMessage: 'Price (currency)',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            ownershipPriceAmount: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipPriceAmount.fullName',
                    defaultMessage: 'Previous ownership price (amount)',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipPriceAmount.name',
                    defaultMessage: 'Price (amount)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            ownershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ownershipNote.fullName',
                    defaultMessage: 'Previous ownership note',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        ageEstimateGroupList: {
          [config]: {
            cloneable: false,
            view: {
              type: CompoundInput,
            },
          },
          ageEstimateGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.ageEstimateGroup.name',
                  defaultMessage: 'Age estimate',
                },
              }),
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            ageEstimate: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ageEstimate.fullName',
                    defaultMessage: 'Age estimate',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ageEstimate.name',
                    defaultMessage: 'Estimate',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            ageEstimateQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ageEstimateQualifier.fullName',
                    defaultMessage: 'Age estimate qualifier',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ageEstimateQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ageEstimateQualifiers',
                  },
                },
              },
            },
            ageEstimateUnit: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ageEstimateUnit.fullName',
                    defaultMessage: 'Age estimate unit',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ageEstimateUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ageUnits',
                  },
                },
              },
            },
            ageEstimateNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.ageEstimateNote.fullName',
                    defaultMessage: 'Age estimate note',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ageEstimateNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        pahmaFieldCollectionPlaceList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaFieldCollectionPlace: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaFieldCollectionPlace.name',
                  defaultMessage: 'Field collection place',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        pahmaFieldLocVerbatim: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaFieldLocVerbatim.name',
                defaultMessage: 'Field collection place (verbatim)',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sortableObjectNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.sortableObjectNumber.name',
                defaultMessage: 'Museum number',
              },
            }),
            searchTransform: transformSortableObjectNumberSearch,
            view: {
              type: TextInput,
            },
          },
        },
        objectClassGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          objectClassGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.objectClassGroup.name',
                  defaultMessage: 'Object class',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectClassName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.objectClassName.fullName',
                    defaultMessage: 'Object class name',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.objectClassName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/objectclass',
                  },
                },
              },
            },
            objectClassNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_pahma.objectClassNote.fullName',
                    defaultMessage: 'Object class note',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.objectClassNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        pahmaAbbreviatedDescriptions: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaAbbreviatedDescription: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_pahma.pahmaAbbreviatedDescriptions.name',
                  defaultMessage: 'Abbreviated description',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/anthropology',
          },
        },
        computedCrate: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthropology.computedCrate.name',
                defaultMessage: 'Current box or container',
              },
            }),
            searchView: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
            },
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
                readOnly: true,
              },
            },
          },
        },
        contentWorks: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          contentWork: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.contentWork.name',
                  defaultMessage: 'Work depicted',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'work/local',
                },
              },
            },
          },
        },
        culturalCareNoteList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          culturalCareNote: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.culturalCareNote.name',
                  defaultMessage: 'Cultural care note',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        accessRestrictionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          accessRestrictionGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.accessRestrictionGroup.name',
                  defaultMessage: 'Access limitation',
                },
              }),
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            accessRestrictionType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionType.fullName',
                    defaultMessage: 'Access limitation type',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'accessRestrictionTypes',
                  },
                },
              },
            },
            accessRestrictionLevel: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionLevel.fullName',
                    defaultMessage: 'Access limitation level',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionLevel.name',
                    defaultMessage: 'Level',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'accessRestrictionLevels',
                  },
                },
              },
            },
            accessRestrictionDetails: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDetails.fullName',
                    defaultMessage: 'Access limitation detail',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDetails.name',
                    defaultMessage: 'Detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            accessRestrictionRequestor: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionRequestor.fullName',
                    defaultMessage: 'Access limitation requestor (person)',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionRequestor.name',
                    defaultMessage: 'Requestor (person)',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            accessRestrictionOnBehalfOf: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionOnBehalfOf.fullName',
                    defaultMessage: 'Access limitation on behalf of (organization)',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionOnBehalfOf.name',
                    defaultMessage: 'On behalf of (organization)',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local',
                  },
                },
              },
            },
            accessRestrictionDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDate.fullName',
                    defaultMessage: 'Access limitation date',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        archeologicalProvenienceList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          archeologicalProvenience: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthropology.archeologicalProvenience.name',
                  defaultMessage: 'Archeological provenience',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      ...extensions['ucbnh-collectionobject'].fields,
      ...extensions.annotation.collectionobject.fields,
      ...extensions.nagpra.collectionobject.fields,
    },
  };
};
