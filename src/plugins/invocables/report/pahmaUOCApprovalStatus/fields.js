import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    OptionPickerInput,
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
      OutputMIME: {
        [config]: {
          defaultValue: 'application/pdf',
          messages: defineMessages({
            name: {
              id: 'field.report.pahmaUOCApprovalStatus.OutputMIME.name',
              defaultMessage: 'Format as',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'uocApprovalStatusMIMETypes',
            },
          },
        },
      },
    },
  };
};
