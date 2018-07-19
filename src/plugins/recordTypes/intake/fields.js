import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    AutocompleteInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:intakes_common': {
        entryNumber: {
          [config]: {
            view: {
              props: {
                source: 'pahmaIntake',
              },
            },
          },
        },
        entryReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'objentryreason',
              },
            },
          },
        },
        fieldCollectionPlace: {
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
      'ns2:intakes_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/intake/local/pahma',
          },
        },
        expectedReturnDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.intakes_pahma.expectedReturnDate.name',
                defaultMessage: 'Expected return date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
      },
    },
  };
};
