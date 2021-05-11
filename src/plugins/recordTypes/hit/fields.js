import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    DateInput,
    TextInput,
    CompoundInput,
    TermPickerInput,
    StructuredDateInput
  } = configContext.inputComponents;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCTURED_DATE
  } = configContext.dataTypes;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
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
        pahmaAgreementRenewalDates: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaAgreementRenewalDate: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.hits_pahma.pahmaAgreementRenewalDate.name',
                  defaultMessage: 'Agreement renewal date',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        pahmaHitAgreementGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          pahmaHitAgreementGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.hits_pahma.pahmaHitAgreementGroup.name',
                  defaultMessage: 'Agreement status',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            pahmaAgreementStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.hits_pahma.pahmaAgreementStatus.fullName',
                    defaultMessage: 'Agreement status',
                  },
                  name: {
                    id: 'field.hits_pahma.pahmaAgreementStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'pahmaagreementstatuses',
                  },
                },
              },
            },
            pahmaAgreementStatusDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.hits_pahma.pahmaAgreementStatusDate.fullName',
                    defaultMessage: 'Agreement status date',
                  },
                  name: {
                    id: 'field.hits_pahma.pahmaAgreementStatusDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            pahmaAgreementStatusNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.hits_pahma.pahmaAgreementStatusNote.fullName',
                    defaultMessage: 'Agreement status note',
                  },
                  name: {
                    id: 'field.hits_pahma.pahmaAgreementStatusNote.name',
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
