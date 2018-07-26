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
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: args => computeSortableObjectNumber(args, Immutable),
      },
      'ns2:collectionobjects_common': {
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              view: {
                props: {
                  source: 'pahmaResponsibleDepartments',
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
            view: {
              props: {
                source: 'pahmaRecordStatuses',
              },
            },
          },
        },
        titleGroupList: {
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
          objectNameGroup: {
            objectNameCurrency: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaObjectNameCurrencies',
                  },
                },
              },
            },
            objectNameLevel: {
              [config]: {
                defaultValue: 'whole',
                view: {
                  props: {
                    source: 'pahmaObjectNameLevels',
                  },
                },
              },
            },
            objectNameSystem: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaObjectNameSystems',
                  },
                },
              },
            },
            objectNameType: {
              [config]: {
                defaultValue: 'simple',
                view: {
                  props: {
                    source: 'pahmaObjectNameTypes',
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
            view: {
              props: {
                source: 'pahmaSexCategories',
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
                    source: 'concept/material_ca',
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
                    source: 'pahmaTechnicalAttributeMeasurementTypes',
                  },
                },
              },
            },
            technicalAttributeMeasurementUnit: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaTechnicalMeasurementUnits',
                  },
                },
              },
            },
          },
        },
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
                  source: 'concept/local,concept/archculture',
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
                    source: 'pahmaContentEventNameTypes',
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
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local,concept/local,concept/archculture',
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
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaInscriptionScriptTypes',
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
                    source: 'person/local,organization/local,concept/local,concept/archculture',
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
                    source: 'pahmaInscriptionDescriptionTypes',
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
                    source: 'concept/local,concept/archculture',
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
                    source: 'pahmaObjProductionOrgRoles',
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
                  type: TextInput, // TO DO: fix using deep merge
                  props: null, // TO DO: fix?
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
                    source: 'concept/local,concept/archculture',
                  },
                },
              },
            },
            assocCulturalContextType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'assocCulturalContextTypes',
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
                    source: 'concept/local,concept/archculture',
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
                  source: 'concept/local',
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
        referenceGroupList: {
          referenceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.referenceGroup.name',
                  defaultMessage: 'Bibliographic reference',
                },
              }),
            },
            reference: {
              [config]: {
                view: {
                  props: {
                    source: 'citation/local',
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
                  source: 'person/local,concept/local',
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
                  id: 'field.collectionobjects_common.pahmaObjectStatus.name',
                  defaultMessage: 'Object status',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
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
              type: OptionPickerInput,
              props: {
                source: 'pahmaTmsLegacyDepartments',
              },
            },
          },
        },
        inventoryCount: {
          [config]: {
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
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaEthnographicFileCodeList.name',
                defaultMessage: 'Ethnographic file code',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          pahmaEthnographicFileCode: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_pahma.pahmaEthnographicFileCodeList.fullName',
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
                source: 'pahmaPortfolioSeriesTypes',
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
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaCollectionList.name',
                defaultMessage: 'Collection',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          pahmaCollection: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_pahma.pahmaCollection.fullName',
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
        pahmaFieldCollectionDate: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.collectionobjects_pahma.pahmaFieldCollectionDate.fullName',
                defaultMessage: 'Field collection date',
              },
              name: {
                id: 'field.collectionobjects_pahma.pahmaFieldCollectionDate.name',
                defaultMessage: 'Field collection date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
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
                    source: 'person/local,organization/local,concept/local',
                  },
                },
              },
            },
            ownershipDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_common.ownershipDateGroup.fullName',
                    defaultMessage: 'Previous ownership date',
                  },
                  name: {
                    id: 'field.collectionobjects_common.ownershipDateGroup.name',
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
                    defaultMessage: 'Previous ownership price (currency)',
                  },
                  name: {
                    id: 'field.collectionobjects_pahma.ownershipPriceAmount.name',
                    defaultMessage: 'Price (currency)',
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
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaFieldCollectionPlaceList.name',
                defaultMessage: 'Field collection place',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          pahmaFieldCollectionPlace: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_pahma.pahmaFieldCollectionPlace.fullName',
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
        pahmaNagpraCodeLegacyList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaNagpraCodeLegacyList.name',
                defaultMessage: 'Grave association code',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          pahmaNagpraCodeLegacy: {
            [config]: {
              defaultValue: 'noCode',
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_pahma.pahmaNagpraCodeLegacy.fullName',
                  defaultMessage: 'Grave association code',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'pahmaNagpraCodeLegacyCategories',
                },
              },
            },
          },
        },
        sortableObjectNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.sortableObjectNumber.name',
                defaultMessage: 'Museum number',
              },
            }),
            searchTransform: transformSortableObjectNumberSearch,
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
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
        culturalCareNoteList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthropology.culturalCareNoteList.name',
                defaultMessage: 'Cultural care note',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          culturalCareNote: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_anthropology.culturalCareNote.fullName',
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
                  defaultMessage: 'Access limitations',
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
                    defaultMessage: 'Access restriction type',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAccessRestrictionTypes',
                  },
                },
              },
            },
            accessRestrictionLevel: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionLevel.fullName',
                    defaultMessage: 'Access restriction level',
                  },
                  name: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionLevel.name',
                    defaultMessage: 'Level',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaAccessLevels',
                  },
                },
              },
            },
            accessRestrictionDetails: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDetails.fullName',
                    defaultMessage: 'Access restriction Detail',
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
                    defaultMessage: 'Access restriction requestor (person)',
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
                    defaultMessage: 'Access restriction on behalf of (organization)',
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
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthropology.accessRestrictionDate.fullName',
                    defaultMessage: 'Access restriction date',
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
        nagpraInventoryNameList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthropology.nagpraInventoryName.name',
                defaultMessage: 'NAGPRA inventory',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          nagpraInventoryName: {
            [config]: {
              defaultValue: 'notOnAnInventory',
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_pahma.nagpraInventoryName.fullName',
                  defaultMessage: 'NAGPRA inventory',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'pahmaInventoryNames',
                },
              },
            },
          },
        },
        nagpraApplicabilityList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthropology.nagpraApplicabilityList.name',
                defaultMessage: 'Museum\'s NAGPRA category det.',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          nagpraApplicability: {
            [config]: {
              defaultValue: 'nonNagpra',
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_anthropology.nagpraApplicability.fullName',
                  defaultMessage: 'Museum\'s NAGPRA category det.',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'nagpraApplicabilityCategories',
                },
              },
            },
          },
        },
        nagpraCulturalDeterminationList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthropology.nagpraCulturalDeterminationList.name',
                defaultMessage: 'NAGPRA cultural determination',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          nagpraCulturalDetermination: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_anthropology.nagpraCulturalDetermination.fullName',
                  defaultMessage: 'NAGPRA cultural determination',
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
        repatriationNoteList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthropology.repatriationNoteList.name',
                defaultMessage: 'Repatriation code',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          repatriationNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_anthropology.repatriationNote.fullName',
                  defaultMessage: 'Repatriation code',
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
      ...extensions['ucbnh-collectionobject'].fields,
    },
  };
};
