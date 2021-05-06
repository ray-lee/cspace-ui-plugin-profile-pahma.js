export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:hits_common': {
        hitNumber: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        internalApprovalGroupList: {
          internalApprovalGroup: {
            internalApprovalStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmahitintapprovaltypes',
                  },
                },
              },
            },
          },
        },
        externalApprovalGroupList: {
          externalApprovalGroup: {
            externalApprovalStatus: {
              [config]: {
                view: {
                  props: {
                    source: 'pahmahitextapprovaltypes',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
