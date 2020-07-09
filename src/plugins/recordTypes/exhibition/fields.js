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
      },
    },
  };
};
