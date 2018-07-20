import { defineMessages } from 'react-intl';

export default {
  anthroClaimTypes: {
    values: [
      'affiliatedHsr',
      'unaffiliatedCuiHsr',
      'afo',
      'ufo',
      'sacredObject',
      'objectOfCulturalPatrimony',
      'nonNagpra',
      'needsFurtherResearch',
      'unknown',
    ],
    messages: defineMessages({
      affiliatedHsr: {
        id: 'option.anthroClaimTypes.affiliatedHsr',
        defaultMessage: 'affiliated human skeletal remains (HSR)',
      },
      unaffiliatedCuiHsr: {
        id: 'option.anthroClaimTypes.unaffiliatedCuiHsr',
        defaultMessage: 'unaffiliated human skeletal remains (HSR) (=CUI)',
      },
      afo: {
        id: 'option.anthroClaimTypes.afo',
        defaultMessage: 'associated funerary object (AFO)',
      },
      ufo: {
        id: 'option.anthroClaimTypes.ufo',
        defaultMessage: 'unassociated funerary object (UFO)',
      },
      sacredObject: {
        id: 'option.anthroClaimTypes.sacredObject',
        defaultMessage: 'sacred object',
      },
      objectOfCulturalPatrimony: {
        id: 'option.anthroClaimTypes.objectOfCulturalPatrimony',
        defaultMessage: 'object of cultural patrimony',
      },
      nonNagpra: {
        id: 'option.anthroClaimTypes.nonNagpra',
        defaultMessage: 'not subject to NAGPRA',
      },
      needsFurtherResearch: {
        id: 'option.anthroClaimTypes.needsFurtherResearch',
        defaultMessage: 'needs further research',
      },
    }),
  },
  thirtyDayNoticeTypes: {
    values: [
      'begin',
      'end',
    ],
    messages: defineMessages({
      begin: {
        id: 'option.thirtyDayNoticeTypes.begin',
        defaultMessage: 'period begins',
      },
      end: {
        id: 'option.thirtyDayNoticeTypes.end',
        defaultMessage: 'period ends',
      },
    }),
  },
};
