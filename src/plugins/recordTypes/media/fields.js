import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:media_common': {
        identificationNumber: {
          [config]: {
            required: false,
            view: {
              type: TextInput,
            },
          },
        },
        title: {
          [config]: {
            defaultValue: 'Media record',
          },
        },
        languageList: {
          language: {
            [config]: {
              defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(languages):item:name(eng)\'English\'',
            },
          },
        },
        typeList: {
          type: {
            [config]: {
              view: {
                props: {
                  source: 'pahmaMediaTypes',
                },
              },
            },
          },
        },
        coverage: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
        subjectList: {
          subject: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local,concept/ethculture,concept/archculture,person/local,organization/local,taxon/local,concept/activity,concept/material',
                },
              },
            },
          },
        },
      },
      'ns2:media_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/pahma',
          },
        },
        approvedForWeb: {
          [config]: {
            defaultValue: 'true',
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_pahma.approvedForWeb.name',
                defaultMessage: 'Approved for public?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        primaryDisplay: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_pahma.primaryDisplay.name',
                defaultMessage: 'Primary display?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        documentationImage: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_pahma.documentationImage.name',
                defaultMessage: 'Documentation image?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
    },
  };
};
