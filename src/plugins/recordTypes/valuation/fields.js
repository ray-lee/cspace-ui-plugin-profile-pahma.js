export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:valuationcontrols_common': {
        valuationcontrolRefNumber: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
        valueType: {
          [config]: {
            view: {
              props: {
                source: 'pahmaValueTypes',
              },
            },
          },
        },
      },
    },
  };
};
