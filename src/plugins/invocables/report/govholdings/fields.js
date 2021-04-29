import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    pararms: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      'Agency': {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.SystematicInventoryUI.Agency.name',
              defaultMessage: 'Agency name',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'organization/local',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
