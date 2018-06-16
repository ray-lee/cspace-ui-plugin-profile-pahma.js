export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:taxon_common': {
        taxonRank: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'taxonrank',
              },
            },
          },
        },
      },
    },
  };
};
