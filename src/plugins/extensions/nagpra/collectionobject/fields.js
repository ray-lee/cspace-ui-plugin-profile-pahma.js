import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

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
                defaultMessage: 'PAHMA cultural determination notes',
              },
            }),
          },
        },
      },
      repatriationNotes: {
        repatriationNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.repatriationNote.name',
                defaultMessage: 'Repatriation notes',
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
                  source: 'concept/ethculture,person/local,person/shared,organization/local,organization/shared',
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
                  source: 'organization/local',
                },
              },
            },
          },
        },
      },
    },
  };
};
