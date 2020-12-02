export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      /** the following fields will be added on 6.0-2
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
      */
      material: {
        [config]: {
          view: {
            type: AutocompleteInput,
            props: {
              source: 'concept/material',
            },
          },
        },
      },
      responsibleDepartment: {
        [config]: {
          view: {
            props: {
              source: 'pahmaDepartments',
            },
          },
        },
      },
      objectProductionPlace: {
        [config]: {
          view: {
            type: AutocompleteInput,
            props: {
              source: 'place/local',
            },
          },
        },
      },
      contentPlace: {
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
  };
};
