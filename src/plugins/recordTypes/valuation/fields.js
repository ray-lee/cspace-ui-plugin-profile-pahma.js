export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:valuationcontrols_common': {
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
