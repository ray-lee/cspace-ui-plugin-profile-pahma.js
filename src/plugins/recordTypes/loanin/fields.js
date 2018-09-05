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
      'ns2:loansin_common': {
        loanInNumber: {
          [config]: {
            view: {
              props: {
                source: 'pahmaLoanin',
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
      'ns2:loansin_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanin/local/pahma',
          },
        },
        loanInDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.loansin_pahma.loanInDateGroup.name',
                defaultMessage: 'Loan receipt date',
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
                id: 'field.loansin_pahma.loanReturnDateGroup.name',
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
