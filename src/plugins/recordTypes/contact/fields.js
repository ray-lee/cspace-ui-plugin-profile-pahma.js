import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:contacts_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/contact/domain/anthropology',
          },
        },
        addressNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.contacts_anthropology.addressNote.name',
                defaultMessage: 'Address note',
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
