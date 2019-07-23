export default (configContext) => {

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:uoc_common': {
        occasionList: {
          occasion: {
            [config]: {
              view: {
                props: {
                  source: 'concept/activity,concept/archculture,concept/ethculture,concept/ethusecode,concept/material,concept/objectclass,concept/objectname',
                },
              },
            },
          },
        },
      },
    },
  };
};