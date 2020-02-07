export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:uoc_common': {
        referenceNumber: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
