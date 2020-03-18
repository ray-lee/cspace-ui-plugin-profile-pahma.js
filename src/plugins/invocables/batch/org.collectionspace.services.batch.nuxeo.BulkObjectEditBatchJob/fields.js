import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      inventoryCount: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.BulkObjectEditBatchJob.inventoryCount.name',
              defaultMessage: 'Count',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      pahmaFieldLocVerbatim: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.BulkObjectEditBatchJob.pahmaFieldLocVerbatim.name',
              defaultMessage: 'Field collection place (verbatim)',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      pahmaEthnographicFileCodeList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        pahmaEthnographicFileCode: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.BulkObjectEditBatchJob.pahmaEthnographicFileCodeList.name',
                defaultMessage: 'Ethnographic file code',
              },
            }),
            repeating: true,
            view: {
              type: AutocompleteInput,
              props: {
                source: 'concept/ethusecode',
              },
            },
          },
        },
      },
    },
  };
};
