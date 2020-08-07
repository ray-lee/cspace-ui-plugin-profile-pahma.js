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
                source: 'pahmaLoanout',
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
                  props: {
                    // The shortid of this list was changed to loanstatus in the app layer, in the
                    // tenant override of base-instance-vocabularies.xml. This needs to match.
                    source: 'loanstatus',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:loansout_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/local/pahma',
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
          },
          ...extensions.structuredDate.fields,
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
          },
          ...extensions.structuredDate.fields,
        },
      },
    },
  };
};
