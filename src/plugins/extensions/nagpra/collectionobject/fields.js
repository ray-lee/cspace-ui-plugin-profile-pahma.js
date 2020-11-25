import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:collectionobjects_nagpra': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/nagpra',
        },
      },
      nagpraInventoryNames: {
        nagpraInventoryName: {
          [config]: {
            view: {
              props: {
                source: 'nagpraPahmaInventoryNames',
              },
            },
          },
        },
      },
      nagpraCategories: {
        nagpraCategory: {
          [config]: {
            view: {
              props: {
                source: 'nagpraPahmaApplicabilities',
              },
            },
          },
        },
      },
      graveAssocCodes: {
        graveAssocCode: {
          [config]: {
            view: {
              props: {
                source: 'pahmaNagpraCodeLegacies',
              },
            },
          },
        },
      },
      nagpraCulturalDeterminations: {
        nagpraCulturalDetermination: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.nagpraCulturalDetermination.name',
                defaultMessage: 'PAHMA cultural determination',
              },
            }),
          },
        },
      },
      nagpraDetermGroupList: {
        nagpraDetermGroup: {
          nagpraDetermCulture: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermCulture.fullName',
                  defaultMessage: 'Cultural determination affiliation',
                },
                name: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermCulture.name',
                  defaultMessage: 'Cultural affiliation',
                },
              }),
              view: {
                props: {
                  source: 'concept/archculture',
                },
              },
            },
          },
          nagpraDetermType: {
            [config]: {
              view: {
                props: {
                  source: 'nagpradetermtype',
                },
              },
            },
          },
          nagpraDetermBy: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
      },
      nagpraReportFiledGroupList: {
        nagpraReportFiledGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.nagpraReportFiledGroup.name',
                defaultMessage: 'Reporting history',
              },
            }),
          },
          nagpraReportFiledBy: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/local',
                },
              },
            },
          },
          nagpraReportFiledWith: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,organization/local',
                },
              },
            },
          },
        },
      },
    },
  };
};
