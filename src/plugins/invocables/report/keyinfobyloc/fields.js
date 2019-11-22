import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      'Start Location': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.keyinfobyloc.Start Location.name',
              defaultMessage: 'Start location',
            },
          }),
          required: true,
          view: {
            type: AutocompleteInput,
            props: {
              source: 'location/local,location/crate',
              showQuickAdd: false,
            },
          },
        },
      },
      'End Location': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.keyinfobyloc.End Location.name',
              defaultMessage: 'End location',
            },
          }),
          required: true,
          view: {
            type: AutocompleteInput,
            props: {
              source: 'location/local,location/crate',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
