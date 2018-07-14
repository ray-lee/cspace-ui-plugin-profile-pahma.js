import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:osteology_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:osteology_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/osteology',
          },
        },
        InventoryID: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.InventoryID.name',
                defaultMessage: 'Inventory ID',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        osteoAgeEstimateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          osteoAgeEstimateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.osteology_common.osteoAgeEstimateGroup.name',
                  defaultMessage: 'Age estimate',
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
            osteoAgeEstimateVerbatim: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateVerbatim.fullName',
                    defaultMessage: 'Age estimate verbatim',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateVerbatim.name',
                    defaultMessage: 'Verbatim',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            osteoAgeEstimateLower: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateLower.fullName',
                    defaultMessage: 'Age estimate lower',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateLower.name',
                    defaultMessage: 'Lower (years)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            osteoAgeEstimateUpper: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateUpper.fullName',
                    defaultMessage: 'Age estimate upper',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateUpper.name',
                    defaultMessage: 'Upper (years)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            osteoAgeEstimateDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateDateGroup.fullName',
                    defaultMessage: 'Age estimate date',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            osteoAgeEstimateAnalyst: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateAnalyst.fullName',
                    defaultMessage: 'Age estimate analyst',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateAnalyst.name',
                    defaultMessage: 'Analyst',
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
            osteoAgeEstimateNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.osteoAgeEstimateNote.fullName',
                    defaultMessage: 'Age estimate note',
                  },
                  name: {
                    id: 'field.osteology_common.osteoAgeEstimateNote.name',
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
        sexDeterminationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sexDeterminationGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.osteology_common.sexDeterminationGroup.name',
                  defaultMessage: 'Sex determination',
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
            sexDetermination: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.osteology_common.sexDetermination.name',
                    defaultMessage: 'Sex',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'sexDeterminations',
                  },
                },
              },
            },
            sexDeterminationDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDeterminationDateGroup.fullName',
                    defaultMessage: 'Sex determination date',
                  },
                  name: {
                    id: 'field.osteology_common.sexDeterminationDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            sexDeterminationAnalyst: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDeterminationAnalyst.fullName',
                    defaultMessage: 'Sex determination analyst',
                  },
                  name: {
                    id: 'field.osteology_common.sexDeterminationAnalyst.name',
                    defaultMessage: 'Analyst',
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
            sexDeterminationNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_common.sexDeterminationNote.fullName',
                    defaultMessage: 'Sex determination note',
                  },
                  name: {
                    id: 'field.osteology_common.sexDeterminationNote.name',
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
        NotesOnElementInventory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.NotesOnElementInventory.name',
                defaultMessage: 'Inventory note',
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
        InventoryIsComplete: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.InventoryIsComplete.name',
                defaultMessage: 'Inventory complete',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        inventoryAnalyst: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.inventoryAnalyst.name',
                defaultMessage: 'Analyst',
              },
            }),
            required: true,
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local',
              },
            },
          },
        },
        inventoryDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.osteology_common.inventoryDate.name',
                defaultMessage: 'Date',
              },
            }),
            required: true,
            view: {
              type: DateInput,
            },
          },
        },
        // TODO: Configure inventory fields. This will be necessary if/when services schema are
        // generated from this config. It's not necessary now, because the fields are hardcoded
        // into OsteoInventoryInput.
      },
      'ns2:osteology_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/osteology/domain/anthropology',
          },
        },
        Notes_DentalPathology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_DentalPathology.name',
                defaultMessage: 'Dental pathology (incl. alveolar)',
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
        Notes_CranialPathology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_CranialPathology.name',
                defaultMessage: 'Cranial bony pathology',
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
        Notes_PostcranialPathology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_PostcranialPathology.name',
                defaultMessage: 'Postcranial bony pathology',
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
        Notes_CulturalModifications: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_CulturalModifications.name',
                defaultMessage: 'Cultural modifications',
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
        Notes_NHTaphonomicAlterations: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_NHTaphonomicAlterations.name',
                defaultMessage: 'Nonhuman taphonomic alterations',
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
        Notes_CuratorialSuffixing: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_CuratorialSuffixing.name',
                defaultMessage: 'Curatorial suffixing notes',
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
        cranialDeformationPresent: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.cranialDeformationPresent.name',
                defaultMessage: 'Is any evidence of cranial deformation present?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        cranialDeformationCategories: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          cranialDeformationCategory: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.osteology_anthropology.cranialDeformationCategory.name',
                  defaultMessage: 'General category',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'cranialdeformationcategory',
                },
              },
            },
          },
        },
        cranialDeformationNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.cranialDeformationNote.name',
                defaultMessage: 'Comments on cranial deformation',
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
        trepanationPresent: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.trepanationPresent.name',
                defaultMessage: 'Is any evidence of trepanation present?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        trepanationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          trepanationGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            trepanationLocation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.osteology_anthropology.trepanationLocation.name',
                    defaultMessage: 'Location (bone and side)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            trepanationDimensionMax: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationDimensionMax.fullName',
                    defaultMessage: 'Trepanation dimension max.',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationDimensionMax.name',
                    defaultMessage: 'Max.',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            trepanationDimensionMin: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationDimensionMin.fullName',
                    defaultMessage: 'Trepanation dimension min.',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationDimensionMin.name',
                    defaultMessage: 'Min.',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            trepanationTechnique: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.osteology_anthropology.trepanationTechnique.name',
                    defaultMessage: 'Technique',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'trepanationtechnique',
                  },
                },
              },
            },
            trepanationHealing: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.osteology_anthropology.trepanationHealing.name',
                    defaultMessage: 'Healing',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'trepanationhealing',
                  },
                },
              },
            },
            trepanationCertainty: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.osteology_anthropology.trepanationCertainty.name',
                    defaultMessage: 'Certainty',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'trepanationcertainty',
                  },
                },
              },
            },
            trepanationNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.osteology_anthropology.trepanationNote.name',
                    defaultMessage: 'Comments',
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
        },
        trepanationGeneralNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.trepanationGeneralNote.name',
                defaultMessage: 'Comments on trepanation',
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
    },
  };
};
