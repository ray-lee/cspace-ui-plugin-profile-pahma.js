export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      targetCSID: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,concept/activity,concept/archculture,concept/ethculture,concept/ethusecode,concept/material,concept/objectclass,concept/objectname,concept/occasion,organization/local,person/local,place/local,location/local,location/crate,taxon/local,work/local',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
