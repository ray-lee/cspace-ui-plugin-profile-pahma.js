import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    CheckboxInput,
    TermPickerInput,
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
      'ns2:acquisitions_common': {
        acquisitionReferenceNumber: {
          [config]: {
            view: {
              props: {
                source: 'pahma-accession',
              },
            },
          },
        },
        acquisitionMethod: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'accaquisitionmethod',
              },
            },
          },
        },
        acquisitionSources: {
          acquisitionSource: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared,concept/local',
                },
              },
            },
          },
        },
        owners: {
          owner: {
            [config]: {
              repeating: true,
              view: {
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared,concept/local',
                },
              },
            },
          },
        },
        objectOfferPriceCurrency: {
          [config]: {
            defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(currency):item:name(usd)\'US Dollar ($)\'',
          },
        },
        objectPurchaseOfferPriceCurrency: {
          [config]: {
            defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(currency):item:name(usd)\'US Dollar ($)\'',
          },
        },
        objectPurchasePriceCurrency: {
          [config]: {
            defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(currency):item:name(usd)\'US Dollar ($)\'',
          },
        },
        originalObjectPurchasePriceCurrency: {
          [config]: {
            defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(currency):item:name(usd)\'US Dollar ($)\'',
          },
        },
        acquisitionFundingList: {
          acquisitionFunding: {
            acquisitionFundingCurrency: {
              [config]: {
                defaultValue: 'urn:cspace:pahma.cspace.berkeley.edu:vocabularies:name(currency):item:name(usd)\'US Dollar ($)\'',
              },
            },
          },
        },
      },
      'ns2:acquisitions_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/local/pahma',
          },
        },
        acquisitionDonorGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionDonorGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_pahma.acquisitionDonorGroup.name',
                  defaultMessage: 'Previous owner (donor)',
                },
              }),
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            donor: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.acquisitions_pahma.donor.name',
                    defaultMessage: 'Donor',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            donorAnon: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  name: {
                    id: 'field.acquisitions_pahma.donorAnon.name',
                    defaultMessage: 'Anonymous',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
          },
        },
      },
      'ns2:acquisitions_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/domain/anthropology',
          },
        },
        acquisitionDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_anthropology.acquisitionDescription.name',
                defaultMessage: 'Accession description',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
    },
  };
};
