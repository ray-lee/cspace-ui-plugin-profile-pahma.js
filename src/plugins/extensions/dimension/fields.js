import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    measuredPartGroupList: {
      measuredPartGroup: {
        measuredPart: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
        dimensionSubGroupList: {
          dimensionSubGroup: {
            dimension: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaDimension',
                  },
                },
              },
            },
            measurementMethod: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
              },
            },
            measurementUnit: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaMeasurementUnits',
                  },
                },
              },
            },
            dimensionNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.ext.dimension.dimensionNote.fullName',
                    defaultMessage: 'Measurement note',
                  },
                  name: {
                    id: 'field.ext.dimension.dimensionNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
