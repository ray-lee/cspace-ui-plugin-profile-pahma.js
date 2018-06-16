import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
    StructuredDateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCT_DATE,
  } = configContext.dataTypes;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  return {
    document: {
      'ns2:places_common': {
        placeTermGroupList: {
          placeTermGroup: {
            termDisplayName: {
              [config]: {
                searchTransform: ({ data }) => getDisplayName(data),
                searchView: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
        placeType: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'PlaceType',
              },
            },
          },
        },
        vCoordSource: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'citation/local',
              },
            },
          },
        },
        placeGeoRefGroupList: {
          placeGeoRefGroup: {
            geoRefSource: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:places_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/domain/anthropology',
          },
        },
        placeNoteGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placeNoteGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.placeNoteGroup.name',
                  defaultMessage: 'Place note',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            placeNoteText: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeNoteText.fullName',
                    defaultMessage: 'Place note',
                  },
                  name: {
                    id: 'field.places_anthropology.placeNoteText.name',
                    defaultMessage: 'Note',
                  },
                }),
                searchView: {
                  type: TextInput,
                },
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            placeNoteAuthor: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeNoteAuthor.fullName',
                    defaultMessage: 'Place note author',
                  },
                  name: {
                    id: 'field.places_anthropology.placeNoteAuthor.name',
                    defaultMessage: 'Author',
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
            placeNoteDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeNoteDate.fullName',
                    defaultMessage: 'Place note date',
                  },
                  name: {
                    id: 'field.places_anthropology.placeNoteDate.name',
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
        placeReferenceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placeReferenceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.placeReferenceGroup.name',
                  defaultMessage: 'Reference',
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
            placeReference: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeReference.fullName',
                    defaultMessage: 'Reference',
                  },
                  name: {
                    id: 'field.places_anthropology.placeReference.name',
                    defaultMessage: 'Reference',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/worldcat',
                  },
                },
              },
            },
            placeReferenceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeReferenceNote.fullName',
                    defaultMessage: 'Reference note',
                  },
                  name: {
                    id: 'field.places_anthropology.placeReferenceNote.name',
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
        anthropologyPlaceTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthropologyPlaceType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.anthropologyPlaceType.name',
                  defaultMessage: 'Place type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'PlaceType',
                },
              },
            },
          },
        },
        placeAssocGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placeAssocGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.placeAssocGroup.name',
                  defaultMessage: 'Associated person/organization',
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
            placeAssocName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssocName.fullName',
                    defaultMessage: 'Associated person/organization name',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssocName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/ulan,organization/local,organization/ulan',
                  },
                },
              },
            },
            placeAssociation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssociation.fullName',
                    defaultMessage: 'Associated person/organization association',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssociation.name',
                    defaultMessage: 'Association',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'placeassociation',
                  },
                },
              },
            },
            placeAssocDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCT_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssocDateGroup.fullName',
                    defaultMessage: 'Associated person/organization date',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssocDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            placeAssocNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssocNote.fullName',
                    defaultMessage: 'Associated person/organization note',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssocNote.name',
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
        anthropologyPlaceOwnerGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthropologyPlaceOwnerGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.anthropologyPlaceOwnerGroup.name',
                  defaultMessage: 'Ownership',
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
            anthropologyPlaceOwner: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwner.name',
                    defaultMessage: 'Owner',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            anthropologyPlaceOwnershipStartDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCT_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipStartDateGroup.fullName',
                    defaultMessage: 'Owner start date',
                  },
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipStartDateGroup.name',
                    defaultMessage: 'Start date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            anthropologyPlaceOwnershipEndDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCT_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipEndDateGroup.fullName',
                    defaultMessage: 'Owner end date',
                  },
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipEndDateGroup.name',
                    defaultMessage: 'End date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            anthropologyPlaceOwnershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipNote.fullName',
                    defaultMessage: 'Owner note',
                  },
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipNote.name',
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
        township: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_anthropology.township.name',
                defaultMessage: 'Township',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        range: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_anthropology.range.name',
                defaultMessage: 'Range',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        section: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_anthropology.section.name',
                defaultMessage: 'Section',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:places_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/local/pahma',
          },
        },
        verbatimQuarterSection: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_pahma.verbatimQuarterSection.name',
                defaultMessage: 'Verbatim quarter section',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
