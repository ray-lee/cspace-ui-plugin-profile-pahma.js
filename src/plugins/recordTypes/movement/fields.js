import { defineMessages } from 'react-intl';
import { computeMovementSummary } from './utils';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    formatHelpers,
  } = configContext;

  return {
    document: {
      'ns2:movements_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement',
          },
        },
        currentLocation: {
          [config]: {
            view: {
              props: {
                source: 'location/local,organization/local',
              },
            },
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'reasonformove',
              },
            },
          },
        },
        movementMethods: {
          movementMethod: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'movementmethod',
                },
              },
            },
          },
        },
        locationDate: {
          [config]: {
            required: true,
          },
        },
      },
      'ns2:movements_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/domain/anthropology',
          },
        },
        locationHandlers: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          locationHandler: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.movements_anthropology.locationHandler.name',
                  defaultMessage: 'Location handler',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
        crate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_anthropology.crate.name',
                defaultMessage: 'Crate',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
            },
          },
        },
        computedSummary: {
          [config]: {
            view: {
              type: TextInput,
            },
            compute: args => computeMovementSummary(args, formatHelpers),
          },
        },
      },
    },
  };
};
