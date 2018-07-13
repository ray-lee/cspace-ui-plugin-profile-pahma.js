import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:objectexit_common': {
        exitNumber: {
          [config]: {
            view: {
              props: {
                source: 'pahma-objectexit',
              },
            },
          },
        },
        exitMethods: {
          exitMethod: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'objexitmethod',
                },
              },
            },
          },
        },
        exitReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'objexitreason',
              },
            },
          },
        },
      },
      'ns2:objectexit_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/objectexit/domain/anthropology',
          },
        },
        newOwnerList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          newOwner: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.objectexit_anthropology.newOwner.name',
                  defaultMessage: 'Current or new owner',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,organization/local',
                },
              },
            },

          },
        },
      },
    },
  };
};
