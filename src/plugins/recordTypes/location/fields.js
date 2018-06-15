import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:locations_common': {
        locTermGroupList: {
          locTermGroup: {
            termName: {
              [config]: {
                searchView: {
                  type: TextInput,
                },
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
          },
        },
      },
      'ns2:locations_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/location/domain/anthropology',
          },
        },
        locNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.locations_common.locNote.name',
                defaultMessage: 'Location note',
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
        moveableContainer: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.locations_common.moveableContainer.name',
                defaultMessage: 'Moveable/container',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
    },
  };
};
