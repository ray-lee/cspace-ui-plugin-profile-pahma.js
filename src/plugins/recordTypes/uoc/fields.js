import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    TextInput,
    AutocompleteInput,
    IDGeneratorInput,
    TermPickerInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_INT,
    DATA_TYPE_FLOAT,
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:uoc_common': {
        referenceNumber: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:uoc_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/uoc/local/pahma',
          },
        },
        collectionRegion: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.uoc_pahma.collectionRegion.name',
                defaultMessage: 'Region or collection',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'collectionRegions',
              },
            },
          },
        },
      },
    },
  };
};
