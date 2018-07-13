import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              view: {
                props: {
                  source: 'TEMP',
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
                source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
                  },
                },
              },
            },
            objectNameLevel: {
              [config]: {
                view: {
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            objectNameSystem: {
              [config]: {
                view: {
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            objectNameType: {
              [config]: {
                view: {
                  props: {
                    source: 'TEMP',
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
        objectStatusList: {
          objectStatus: {
            [config]: {
              view: {
                props: {
                  source: 'TEMP',
                },
              },
            },
          },
        },
        sex: {
          [config]: {
            view: {
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        phase: {
          [config]: {
            view: {
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              view: {
                props: {
                  source: 'TEMP',
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
                  type: TextInput, // TO DO: Fix using deep merge
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
                    source: 'TEMP',
                  },
                },
              },
            },
            technicalAttributeMeasurement: {
              [config]: {
                view: {
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            technicalAttributeMeasurementUnit: {
              [config]: {
                view: {
                  props: {
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP', //pahmaInscriptionTypes
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
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
                    source: 'TEMP',
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
                source: 'TEMP',
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
                    source: 'TEMP',
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
        // objectHistoryNote

        // These fields may have to be added to local, leaving it here for now
        ownershipCategory: {
          [config]: {
            view: {
              type: OptionPickerInput,
              props: {
                source: 'ownershipCategories',
              },
            },
          },
        },
        ownershipPlace: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        referenceGroupList: {
          referenceGroup: {
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
                source: 'TEMP',
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
            repeating: true,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_pahma.pahmaEthnographicFileCodeList.name',
                defaultMessage: 'Ethbographic file code',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          pahmaEthnographicFileCode: {
            [config]: {
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
                  name: {
                    id: 'field.collectionobjects_pahma.pahmaAltNum.name',
                    defaultMessage: 'Number',
                  },
                  fullName: {
                    id: 'field.collectionobjects_pahma.pahmaAltNum.fullName',
                    defaultMessage: 'Alternate number',
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
                  name: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumType.name',
                    defaultMessage: 'Type',
                  },
                  fullName: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumType.fullName',
                    defaultMessage: 'Alternate number type',
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
                  name: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumNote.name',
                    defaultMessage: 'Note',
                  },
                  fullName: {
                    id: 'field.collectionobjects_pahma.pahmaAltNumNote.fullName',
                    defaultMessage: 'Alternate number note',
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
                source: 'TEMP',
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
                source: 'TEMP',
              },
            },
          },
        },
        pahmaCollectionList: { // FIX ME ?
          [config]: {
            repeating: true,
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
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'TEMP',
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
                id: 'field.collectionobjects_anthropology.name',
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
      },
      ...extensions['ucbnh-collectionobject'].fields,
    },
  };
};
