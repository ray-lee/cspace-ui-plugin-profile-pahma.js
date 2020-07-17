import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
    TextInput,
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
      Requester: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUOCbyRequesterObject.Requester.name',
              defaultMessage: 'Requester',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,organization/local',
              showQuickAdd: false,
            },
          },
        },
      },
      ObjectNumber: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUOCbyRequesterObject.ObjectNumber.name',
              defaultMessage: 'Object number',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
    },
  };
};
