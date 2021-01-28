export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:groups_common': {
        title: {
          [config]: {
            cloneable: false,
          },
        },
        responsibleDepartment: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'GroupPurpose',
              },
            },
          },
        },
      },
    },
  };
};
