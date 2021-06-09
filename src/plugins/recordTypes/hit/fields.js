import { defineMessages } from 'react-intl';
import { computeAgreementDate } from './utils';

export default (configContext) => {
  const {
    TextInput,
    DateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  const {
    Immutable,
  } = configContext.lib;

  return {
    document: {
      [config]: {
        compute: (args) => computeAgreementDate(args, formatRefName, Immutable),
      },
      'ns2:hits_common': {
        hitNumber: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
        internalApprovalGroupList: {
          internalApprovalGroup: {
            internalApprovalStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmahitintapprovaltypes',
                  },
                },
              },
            },
          },
        },
        externalApprovalGroupList: {
          externalApprovalGroup: {
            externalApprovalStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmahitextapprovaltypes',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:hits_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/hit/local/pahma',
          },
        },
        agreementDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.hits_pahma.agreementDate.name',
                defaultMessage: 'Agreement date',
              },
            }),
            view: {
              type: DateInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
      },
    },
  };
};
