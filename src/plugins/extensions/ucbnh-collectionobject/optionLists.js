import { defineMessages } from 'react-intl';

export default {
  pahmaTaxonQualifiers: {
    values: [
      'affg',
      'aff',
      'cfg',
      'cf',
      'indet',
      'spIndet',
      'spNov',
      'questioned',
      'sensuLatu',
      'sensuStricto',
    ],
    messages: defineMessages({
      affg: {
        id: 'option.pahmaTaxonQualifiers.affg',
        defaultMessage: 'aff. (genus)',
      },
      aff: {
        id: 'option.pahmaTaxonQualifiers.aff',
        defaultMessage: 'aff. (species)',
      },
      cfg: {
        id: 'option.pahmaTaxonQualifiers.cfg',
        defaultMessage: 'cf. (genus)',
      },
      cf: {
        id: 'option.pahmaTaxonQualifiers.cf',
        defaultMessage: 'cf. (species)',
      },
      indet: {
        id: 'option.pahmaTaxonQualifiers.indet',
        defaultMessage: 'indet.',
      },
      spIndet: {
        id: 'option.pahmaTaxonQualifiers.spIndet',
        defaultMessage: 'sp. indet.',
      },
      spNov: {
        id: 'option.pahmaTaxonQualifiers.spNov',
        defaultMessage: 'sp. nov.',
      },
      questioned: {
        id: 'option.pahmaTaxonQualifiers.questioned',
        defaultMessage: '?',
      },
      sensuLatu: {
        id: 'option.pahmaTaxonQualifiers.sensuLatu',
        defaultMessage: 'sensu latu',
      },
      sensuStricto: {
        id: 'option.pahmaTaxonQualifiers.sensuStricto',
        defaultMessage: 'sensu stricto',
      },
    }),
  },
  pahmaTaxonIdentKinds: {
    values: [
      'originalCatalogDetermination',
      'researcherDetermination',
      'fide',
      'nomenclaturalChange',
      'taxonomicChange',
    ],
    messages: defineMessages({
      originalCatalogDetermination: {
        id: 'option.pahmaTaxonIdentKinds.originalCatalogDetermination',
        defaultMessage: 'original catalog determination',
      },
      researcherDetermination: {
        id: 'option.pahmaTaxonIdentKinds.researcherDetermination',
        defaultMessage: 'researcher determination',
      },
      fide: {
        id: 'option.pahmaTaxonIdentKinds.fide',
        defaultMessage: 'fide',
      },
      nomenclaturalChange: {
        id: 'option.pahmaTaxonIdentKinds.nomenclaturalChange',
        defaultMessage: 'nomenclatural change',
      },
      taxonomicChange: {
        id: 'option.pahmaTaxonIdentKinds.taxonomicChange',
        defaultMessage: 'taxonomic change',
      },
    }),
  },
};
