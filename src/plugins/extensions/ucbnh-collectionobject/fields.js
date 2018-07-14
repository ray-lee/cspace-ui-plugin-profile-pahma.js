export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_naturalhistory': {
      taxonomicIdentGroupList: {
        taxonomicIdentGroup: {
          [config]: {
            view: {
              props: {
                tabular: true,
              },
            },
          },
          notes: {
            [config]: {
              view: {
                props: {
                  multiline: false,
                },
              },
            },
          },
        },
      },
    },
  };
};
