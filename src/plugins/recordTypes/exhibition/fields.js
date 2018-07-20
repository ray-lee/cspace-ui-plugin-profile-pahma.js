import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
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
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:exhibitions_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/exhibition/local/pahma',
          },
        },
        // TODO: The below fields went into exhibitions_common when exhibition was contributed to
        // core. To avoid having to migrate data, we're keeping these fields in exhibitions_pahma.
        // At some point the data should be migrated into the fields in exhibitions_common, so
        // that these extension fields won't need to be maintained.
        galleryRotationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          galleryRotationGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_pahma.galleryRotationGroup.name',
                  defaultMessage: 'Gallery rotation',
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
            galleryRotationName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.galleryRotationName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            galleryRotationStartDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_pahma.galleryRotationStartDateGroup.fullName',
                    defaultMessage: 'Gallery rotation start date',
                  },
                  name: {
                    id: 'field.exhibitions_pahma.galleryRotationStartDateGroup.name',
                    defaultMessage: 'Start date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            galleryRotationEndDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.exhibitions_pahma.galleryRotationEndDateGroup.fullName',
                    defaultMessage: 'Gallery rotation end date',
                  },
                  name: {
                    id: 'field.exhibitions_pahma.galleryRotationEndDateGroup.name',
                    defaultMessage: 'End date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            galleryRotationNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.galleryRotationNote.name',
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
        exhibitionSectionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionSectionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_pahma.exhibitionSectionGroup.name',
                  defaultMessage: 'Exhibition section',
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
            exhibitionSectionName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionSectionName.name',
                    defaultMessage: 'Section',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSectionLocation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionSectionLocation.name',
                    defaultMessage: 'Location',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSectionObjects: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionSectionObjects.name',
                    defaultMessage: 'Objects',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionSectionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionSectionNote.name',
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
        exhibitionStatusGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionStatusGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_pahma.exhibitionStatusGroup.name',
                  defaultMessage: 'Exhibition status',
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
            exhibitionStatus: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'exhibitionstatus',
                  },
                },
              },
            },
            exhibitionStatusDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionStatusDate.name',
                    defaultMessage: 'Date',
                  },
                  fullName: {
                    id: 'field.exhibitions_pahma.exhibitionStatusDate.fullName',
                    defaultMessage: 'Exhibition status date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            exhibitionStatusNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionStatusNote.name',
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
        exhibitionObjectGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          exhibitionObjectGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.exhibitions_pahma.exhibitionObjectGroup.name',
                  defaultMessage: 'Object checklist',
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
            exhibitionObjectNumber: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectNumber.name',
                    defaultMessage: 'Object',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectConsCheckDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectConsCheckDate.name',
                    defaultMessage: 'Cons. check',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            exhibitionObjectConsTreatment: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectConsTreatment.name',
                    defaultMessage: 'Cons. treatment',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'exhibitionConsTreatmentStatuses',
                  },
                },
              },
            },
            exhibitionObjectMount: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectMount.name',
                    defaultMessage: 'Mount',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'exhibitionMountStatuses',
                  },
                },
              },
            },
            exhibitionObjectSection: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectSection.name',
                    defaultMessage: 'Section',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectCase: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectCase.name',
                    defaultMessage: 'Case',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectSeqNum: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectSeqNum.name',
                    defaultMessage: 'Seq. #',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectRotation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectRotation.name',
                    defaultMessage: 'Rotation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            exhibitionObjectNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.exhibitions_pahma.exhibitionObjectNote.name',
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
      },
    },
  };
};
