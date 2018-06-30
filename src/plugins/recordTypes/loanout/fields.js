import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    StructuredDateInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:loansout_common': {
        loanOutNumber: {
          [config]: {
            view: {
              props: {
                source: 'pahma-loanout',
              },
            },
          },
        },
        loanPurpose: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'loanpurpose',
              },
            },
          },
        },
        loanStatusGroupList: {
          loanStatusGroup: {
            loanStatus: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'loanstatus', // FIX ME
                  },
                },
              },
            },
          },
        },
      },
      'ns2:loansout_pahma': {
        [config]: {
          services: {
            ns: 'loansout_pahma:http://collectionspace.org/services/loanout/local/pahma',
          },
        },
        loanOutDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.loansout_pahma.loanOutDateGroup.name',
                defaultMessage: 'Loan date',
              },
            }),
            searchView: {
              type: DateInput,
            },
            view: {
              type: StructuredDateInput,
            },
            ...extensions.structuredDate.fields,
          },
        },
        loanReturnDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.loansout_pahma.loanReturnDateGroup.name',
                defaultMessage: 'Loan return date',
              },
            }),
            searchView: {
              type: DateInput,
            },
            view: {
              type: StructuredDateInput,
            },
            ...extensions.structuredDate.fields,
          },
        },
      },
    },
  };
};
