import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      StaffName: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUOCbyTypeOfUse.StaffName.name',
              defaultMessage: 'Staff Name',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local',
              showQuickAdd: false,
            },
          },
        },
      },
      VisitDateStart: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUOCbyTypeOfUse.VisitDateStart.name',
              defaultMessage: 'Visit Date Start',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      VisitDateEnd: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUOCbyTypeOfUse.VisitDateEnd.name',
              defaultMessage: 'Visit Date End',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
    },
  };
};
