import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:persons_common': {
        personTermGroupList: {
          personTermGroup: {
            title: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaPersonTitles',
                  },
                },
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
        birthPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
        deathPlace: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
      },
      'ns2:persons_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/domain/anthropology',
          },
        },
        altNameNotes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          altNameNote: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_anthropology.altNameNote.name',
                  defaultMessage: 'Alternate name note',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
