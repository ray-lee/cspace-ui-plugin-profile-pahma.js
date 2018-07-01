import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    TermPickerInput,
  } = configContext.inputComponents;

  return {
    document: {
      'ns2:conditionchecks_common': {
        conditionCheckAssessmentDate: {
          [config]: {
            required: true,
          },
        },
        conditionCheckGroupList: {
          conditionCheckGroup: {
            condition: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmaConditions',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:conditionchecks_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/conditioncheck/domain/anthropology',
          },
        },
        tempRequirement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_anthropology.tempRequirement.name',
                defaultMessage: 'Temperature',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'temperaturelevel',
              },
            },
          },
        },
        humidityRequirement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_anthropology.humidityRequirement.name',
                defaultMessage: 'Humidity',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'humiditylevel',
              },
            },
          },
        },
        lightRequirement: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.conditionchecks_anthropology.lightRequirement.name',
                defaultMessage: 'Light',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'lightlevel',
              },
            },
          },
        },
      },
    },
  };
};
