import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
    DateInput,
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
              id: 'field.pahmaUoCbyStudentVisits.StaffName.name',
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
      VisitStartDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUoCbyStudentVisits.VisitStartDate.name',
              defaultMessage: 'Visit Start Date',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      VisitEndDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.pahmaUoCbyStudentVisits.VisitEndDate.name',
              defaultMessage: 'Visit End Date',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
    },
  };
};
