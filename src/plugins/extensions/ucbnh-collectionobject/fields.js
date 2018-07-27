export default (configContext) => {
  const {
    AutocompleteInput,
    TermPickerInput,
  } = configContext.inputComponents;

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
          qualifier: {
            [config]: {
              view: {
                props: {
                  source: 'pahmaTaxonQualifiers',
                },
              },
            },
          },
          identKind: {
            [config]: {
              view: {
                props: {
                  source: 'pahmaTaxonIdentKinds',
                },
              },
            },
          },
          reference: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'citation/local',
                },
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
      annotationGroupList: {
        annotationGroup: {
          annotationType: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'annotationtype',
                },
              },
            },
          },
        },
      },
    },
  };
};
