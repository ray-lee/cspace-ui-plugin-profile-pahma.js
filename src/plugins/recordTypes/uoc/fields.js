import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

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
