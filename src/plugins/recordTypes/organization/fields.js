import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:organizations_common': {
        foundingPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
        groups: {
          group: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethculture',
                },
              },
            },
          },
        },
      },
      'ns2:organizations_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/organization/domain/anthropology',
          },
        },
        orgType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_anthropology.orgType.name',
                defaultMessage: 'Organization type',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'anthroOrgTypes',
              },
            },
          },
        },
        orgNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.organizations_anthropology.orgNote.name',
                defaultMessage: 'Note',
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
