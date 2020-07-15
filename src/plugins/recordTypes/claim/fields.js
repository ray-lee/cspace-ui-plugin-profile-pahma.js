import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    IDGeneratorInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:claims_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:claims_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/claim',
          },
        },
        claimNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.claims_common.claimNumber.name',
                defaultMessage: 'Claim number',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'pahmaClaim',
              },
            },
          },
        },
        claimClaimantGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimClaimantGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimClaimantGroup.name',
                  defaultMessage: 'Claimant',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            filedBy: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.claims_common.filedBy.name',
                    defaultMessage: 'Filed by',
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
            filedOnBehalfOf: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.filedOnBehalfOf.fullName',
                    defaultMessage: 'Filed on behalf of',
                  },
                  name: {
                    id: 'field.claims_common.filedOnBehalfOf.name',
                    defaultMessage: 'On behalf of',
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
            claimantNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimantNote.fullName',
                    defaultMessage: 'Claimant note',
                  },
                  name: {
                    id: 'field.claims_common.claimantNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        claimReceivedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimReceivedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimReceivedGroup.name',
                  defaultMessage: 'Claim filed',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            claimReceivedDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimReceivedDate.fullName',
                    defaultMessage: 'Claim filed date',
                  },
                  name: {
                    id: 'field.claims_common.claimReceivedDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            claimReceivedNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimReceivedNote.fullName',
                    defaultMessage: 'Claim filed note',
                  },
                  name: {
                    id: 'field.claims_common.claimReceivedNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
      'ns2:claims_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/claim/local/pahma',
          },
        },
        dispositionPossibilitiesDiscussed: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.dispositionPossibilitiesDiscussed.name',
                defaultMessage: 'Disposition possibilities discussed',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        dispositionPossibilitiesDiscussedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.dispositionPossibilitiesDiscussedNote.name',
                defaultMessage: 'Note',
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
        surroundingTribesContacted: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.surroundingTribesContacted.name',
                defaultMessage: 'Surrounding tribes contacted',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        surroundingTribesContactedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.surroundingTribesContactedNote.name',
                defaultMessage: 'Note',
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
        workingTeamNotified: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.workingTeamNotified.name',
                defaultMessage: 'PAHMA NAGPRA team notified',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        workingTeamNotifiedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.workingTeamNotifiedNote.name',
                defaultMessage: 'Note',
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
        siteFileResearchCompleted: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.siteFileResearchCompleted.name',
                defaultMessage: 'Site file research completed',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        siteFileResearchCompletedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.siteFileResearchCompletedNote.name',
                defaultMessage: 'Note',
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
        accessionFileResearchCompleted: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.accessionFileResearchCompleted.name',
                defaultMessage: 'Accession file research completed',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        accessionFileResearchCompletedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.accessionFileResearchCompletedNote.name',
                defaultMessage: 'Note',
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
        objectsLocatedAndCounted: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsLocatedAndCounted.name',
                defaultMessage: 'Objects located and counted',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        objectsLocatedAndCountedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsLocatedAndCountedNote.name',
                defaultMessage: 'Note',
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
        objectsConsolidated: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsConsolidated.name',
                defaultMessage: 'Objects consolidated',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        objectsConsolidatedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsConsolidatedNote.name',
                defaultMessage: 'Note',
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
        objectsPhotographed: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsPhotographed.name',
                defaultMessage: 'Objects photographed',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        objectsPhotographedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsPhotographedNote.name',
                defaultMessage: 'Note',
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
        registrationDocumentsDrafted: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.registrationDocumentsDrafted.name',
                defaultMessage: 'Registration documents drawn up',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        registrationDocumentsDraftedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.registrationDocumentsDraftedNote.name',
                defaultMessage: 'Note',
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
        tribeContactedForPackingPreferences: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.tribeContactedForPackingPreferences.name',
                defaultMessage: 'Tribe contacted for packing/storage instructions',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        tribeContactedForPackingPreferencesNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.tribeContactedForPackingPreferencesNote.name',
                defaultMessage: 'Note',
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
        dateArrangedForTransfer: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.dateArrangedForTransfer.name',
                defaultMessage: 'Date arranged for pickup/transfer',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        dateArrangedForTransferNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.dateArrangedForTransferNote.name',
                defaultMessage: 'Note',
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
        objectsMarkedAsDeaccessioned: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsMarkedAsDeaccessioned.name',
                defaultMessage: 'Objects marked as deaccessioned',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        objectsMarkedAsDeaccessionedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.objectsMarkedAsDeaccessionedNote.name',
                defaultMessage: 'Note',
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
        documentsArchived: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.documentsArchived.name',
                defaultMessage: 'Claim documents archived',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        documentsArchivedNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_pahma.documentsArchivedNote.name',
                defaultMessage: 'Note',
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
      'ns2:claims_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/claim/domain/anthropology',
          },
        },
        claimName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_anthropology.claimName.name',
                defaultMessage: 'Claim name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        claimAltNameGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimAltNameGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimAltNameGroup.name',
                  defaultMessage: 'Alternate claim name or number',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            claimAltName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.claimAltName.fullName',
                    defaultMessage: 'Alternate claim name or number',
                  },
                  name: {
                    id: 'field.claims_anthropology.claimAltName.name',
                    defaultMessage: 'Name/number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            claimAltNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.claimAltNote.fullName',
                    defaultMessage: 'Alternate claim name or number note',
                  },
                  name: {
                    id: 'field.claims_anthropology.claimAltNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        claimTypeList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimType.name',
                  defaultMessage: 'Claim type',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'anthroClaimTypes',
                },
              },
            },
          },
        },
        claimNoteList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimNote: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimNote.name',
                  defaultMessage: 'Claim note',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        claimInventoryInvolvedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimInventoryInvolvedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimInventoryInvolvedGroup.name',
                  defaultMessage: 'Inventory involved',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            inventoryInvolvedName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.inventoryInvolvedName.fullName',
                    defaultMessage: 'Inventory involved name',
                  },
                  name: {
                    id: 'field.claims_anthropology.inventoryInvolvedName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'pahmaInventoryNames',
                  },
                },
              },
            },
            inventoryInvolvedNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.inventoryInvolvedNote.fullName',
                    defaultMessage: 'Inventory involved note',
                  },
                  name: {
                    id: 'field.claims_anthropology.inventoryInvolvedNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        claimSiteInvolvedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimSiteInvolvedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimSiteInvolvedGroup.name',
                  defaultMessage: 'Site or place involved',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            claimSiteInvolvedName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.claimSiteInvolvedName.fullName',
                    defaultMessage: 'Site or place involved name',
                  },
                  name: {
                    id: 'field.claims_anthropology.claimSiteInvolvedName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
            claimSiteInvolvedNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.claimSiteInvolvedNote.fullName',
                    defaultMessage: 'Site or place involved note',
                  },
                  name: {
                    id: 'field.claims_anthropology.claimSiteInvolvedNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        claimGroupInvolvedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimGroupInvolvedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimGroupInvolvedGroup.name',
                  defaultMessage: 'Cultural group involved',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            groupInvolvedName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.groupInvolvedName.fullName',
                    defaultMessage: 'Cultural group involved name',
                  },
                  name: {
                    id: 'field.claims_anthropology.groupInvolvedName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/ethculture',
                  },
                },
              },
            },
            groupInvolvedNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.groupInvolvedNote.fullName',
                    defaultMessage: 'Cultural group involved note',
                  },
                  name: {
                    id: 'field.claims_anthropology.groupInvolvedNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        claimPeriodInvolvedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimPeriodInvolvedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.claimPeriodInvolvedGroup.name',
                  defaultMessage: 'Time period or date represented',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            claimPeriodInvolvedDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.claimPeriodInvolvedDateGroup.fullName',
                    defaultMessage: 'Time period or date represented',
                  },
                  name: {
                    id: 'field.claims_anthropology.claimPeriodInvolvedDateGroup.name',
                    defaultMessage: 'Period or date',
                  },
                }),
                dataType: DATA_TYPE_STRUCTURED_DATE,
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            claimPeriodInvolvedNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.claimPeriodInvolvedNote.fullName',
                    defaultMessage: 'Time period or date represented note',
                  },
                  name: {
                    id: 'field.claims_anthropology.claimPeriodInvolvedNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        dateOfInitialResponseGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          dateOfInitialResponseGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.dateOfInitialResponseGroup.name',
                  defaultMessage: 'Date of initial response',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            initialResponseDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.initialResponseDate.fullName',
                    defaultMessage: 'Date of initial response',
                  },
                  name: {
                    id: 'field.claims_anthropology.initialResponseDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            initialResponseNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.initialResponseNote.fullName',
                    defaultMessage: 'Date of initial response note',
                  },
                  name: {
                    id: 'field.claims_anthropology.initialResponseNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sentToLocalCommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentToLocalCommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.sentToLocalCommitteeGroup.name',
                  defaultMessage: 'Date sent to UCB-NAGPRA committee',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            sentToLocalCommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.sentToLocalCommitteeDate.fullName',
                    defaultMessage: 'Date sent to UCB-NAGPRA committee',
                  },
                  name: {
                    id: 'field.claims_anthropology.sentToLocalCommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentToLocalCommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.sentToLocalCommitteeNote.fullName',
                    defaultMessage: 'Date sent to UCB-NAGPRA committee note',
                  },
                  name: {
                    id: 'field.claims_anthropology.sentToLocalCommitteeNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sentToOversightCommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentToOversightCommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.sentToOversightCommitteeGroup.name',
                  defaultMessage: 'Date sent to UC systemwide committee',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            sentToOversightCommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.sentToOversightCommitteeDate.fullName',
                    defaultMessage: 'Date sent to UC systemwide committee',
                  },
                  name: {
                    id: 'field.claims_anthropology.sentToOversightCommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentToOversightCommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.sentToOversightCommitteeNote.fullName',
                    defaultMessage: 'Date sent to UC systemwide committee note',
                  },
                  name: {
                    id: 'field.claims_anthropology.sentToOversightCommitteeNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        recommendationOfLocalCommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recommendationOfLocalCommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.recommendationOfLocalCommitteeGroup.name',
                  defaultMessage: 'Recommendation of UCB-NAGPRA committee',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            recommendationOfLocalCommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.recommendationOfLocalCommitteeDate.fullName',
                    defaultMessage: 'Recommendation of UCB-NAGPRA committee date',
                  },
                  name: {
                    id: 'field.claims_anthropology.recommendationOfLocalCommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            recommendationOfLocalCommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.recommendationOfLocalCommitteeNote.fullName',
                    defaultMessage: 'Recommendation of UCB-NAGPRA committee',
                  },
                  name: {
                    id: 'field.claims_anthropology.recommendationOfLocalCommitteeNote.name',
                    defaultMessage: 'Recommendation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sentToNationalNagpraGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sentToNationalNagpraGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.sentToNationalNagpraGroup.name',
                  defaultMessage: 'Date sent to National NAGPRA',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            sentToNationalNagpraDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.sentToNationalNagpraDate.fullName',
                    defaultMessage: 'Date sent to National NAGPRA',
                  },
                  name: {
                    id: 'field.claims_anthropology.sentToNationalNagpraDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            sentToNationalNagpraNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.sentToNationalNagpraNote.fullName',
                    defaultMessage: 'Date sent to National NAGPRA note',
                  },
                  name: {
                    id: 'field.claims_anthropology.sentToNationalNagpraNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        dateOfNationalNagpraApprovalGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          dateOfNationalNagpraApprovalGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.dateOfNationalNagpraApprovalGroup.name',
                  defaultMessage: 'Publication by National NAGPRA',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            dateOfNationalNagpraApprovalDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.dateOfNationalNagpraApprovalDate.fullName',
                    defaultMessage: 'Publication by National NAGPRA date',
                  },
                  name: {
                    id: 'field.claims_anthropology.dateOfNationalNagpraApprovalDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            dateOfNationalNagpraApprovalNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.dateOfNationalNagpraApprovalNote.fullName',
                    defaultMessage: 'Publication by National NAGPRA note',
                  },
                  name: {
                    id: 'field.claims_anthropology.dateOfNationalNagpraApprovalNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        dateOfThirtyDayNoticeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          dateOfThirtyDayNoticeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.dateOfThirtyDayNoticeGroup.name',
                  defaultMessage: 'Start and end dates for National NAGPRA\'s 30-day notice',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            dateOfThirtyDayNoticeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.dateOfThirtyDayNoticeDate.fullName',
                    defaultMessage: 'Date for National NAGPRA\'s 30-day notice',
                  },
                  name: {
                    id: 'field.claims_anthropology.dateOfThirtyDayNoticeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            dateOfThirtyDayNoticeType: {
              [config]: {
                defaultValue: 'begin',
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.dateOfThirtyDayNoticeType.fullName',
                    defaultMessage: 'Date for National NAGPRA\'s 30-day notice type',
                  },
                  name: {
                    id: 'field.claims_anthropology.dateOfThirtyDayNoticeType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'thirtyDayNoticeTypes',
                  },
                },
              },
            },
            dateOfThirtyDayNoticeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.dateOfThirtyDayNoticeNote.fullName',
                    defaultMessage: 'Date for National NAGPRA\'s 30-day notice note',
                  },
                  name: {
                    id: 'field.claims_anthropology.dateOfThirtyDayNoticeNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        anthroTransferGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthroTransferGroupList: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.anthroTransferGroup.name',
                  defaultMessage: 'Date of transfer',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            transferDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.transferDate.fullName',
                    defaultMessage: 'Date of transfer',
                  },
                  name: {
                    id: 'field.claims_anthropology.transferDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            transferNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.transferNote.fullName',
                    defaultMessage: 'Date of transfer note',
                  },
                  name: {
                    id: 'field.claims_anthropology.transferNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        recommendationOfOversightCommitteeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recommendationOfOversightCommitteeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.recommendationOfOversightCommitteeGroup.name',
                  defaultMessage: 'Recommendation of UC systemwide committee',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            recommendationOfOversightCommitteeDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.recommendationOfOversightCommitteeDate.fullName',
                    defaultMessage: 'Recommendation of UC systemwide committee date',
                  },
                  name: {
                    id: 'field.claims_anthropology.recommendationOfOversightCommitteeDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            recommendationOfOversightCommitteeNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.recommendationOfOversightCommitteeNote.fullName',
                    defaultMessage: 'Recommendation of UC systemwide committee',
                  },
                  name: {
                    id: 'field.claims_anthropology.recommendationOfOversightCommitteeNote.name',
                    defaultMessage: 'Recommendation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        responseFromNationalNagpraGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          responseFromNationalNagpraGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_anthropology.responseFromNationalNagpraGroup.name',
                  defaultMessage: 'Response from National NAGPRA',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            responseFromNationalNagpraDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.responseFromNationalNagpraDate.fullName',
                    defaultMessage: 'Response from National NAGPRA date',
                  },
                  name: {
                    id: 'field.claims_anthropology.responseFromNationalNagpraDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            responseFromNationalNagpraNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_anthropology.responseFromNationalNagpraNote.fullName',
                    defaultMessage: 'Response from National NAGPRA',
                  },
                  name: {
                    id: 'field.claims_anthropology.responseFromNationalNagpraNote.name',
                    defaultMessage: 'Response',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
