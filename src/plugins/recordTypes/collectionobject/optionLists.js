import { defineMessages } from 'react-intl';

export default {
  pahmaDepartments: {
    values: [
      'Natasha Johnson',
      'Leslie Freund',
      'Victoria Bradshaw',
      'Alicja Egbert',
      'No collection manager (Registration)',
      'uncertain',
    ],
    messages: defineMessages({
      'No collection manager (Registration)': {
        id: 'option.pahmaDepartments.No collection manager (Registration)',
        defaultMessage: 'no collection manager (Registration)',
      },
    }),
  },
  pahmaRecordStatuses: {
    values: [
      'minimalInProgress',
      'minimal',
      'basicInProgess',
      'basic',
      'fullInProgess',
      'full',
    ],
    messages: defineMessages({
      minimalInProgress: {
        id: 'option.pahmaRecordStatuses.minimalInProgress',
        defaultMessage: 'minimal (in progress)',
      },
      basicInProgess: {
        id: 'option.pahmaRecordStatuses.basicInProgess',
        defaultMessage: 'basic (in progress)',
      },
      fullInProgess: {
        id: 'option.pahmaRecordStatuses.fullInProgess',
        defaultMessage: 'full/curatorial (in progress)',
      },
      full: {
        id: 'option.pahmaRecordStatuses.full',
        defaultMessage: 'full/curatorial',
      },
    }),
  },
  pahmaTitleTypes: {
    values: [
      'Artist\'s Label',
      'Culture Groups on Tape',
      'Inventory Name',
      'Title',
      'Title Subject',
    ],
    messages: defineMessages({
      'Artist\'s Label': {
        id: 'option.pahmaTitleTypes.Artist\'s Label',
        defaultMessage: 'artist\'s label',
      },
      'Culture Groups on Tape': {
        id: 'option.pahmaTitleTypes.Culture Groups on Tape',
        defaultMessage: 'culture groups on tape',
      },
      'Inventory Name': {
        id: 'option.pahmaTitleTypes.Inventory Name',
        defaultMessage: 'inventory name',
      },
      Title: {
        id: 'option.pahmaTitleTypes.Title',
        defaultMessage: 'title',
      },
      'Title Subject': {
        id: 'option.pahmaTitleTypes.Title Subject',
        defaultMessage: 'title subject',
      },
    }),
  },
  pahmaNameCurrencies: {
    values: [
      'current',
      'outOfDate',
      'unknown',
    ],
    messages: defineMessages({
      outOfDate: {
        id: 'option.pahmaNameCurrencies.outOfDate',
        defaultMessage: 'out of date',
      },
    }),
  },
  pahmaNameLevels: {
    values: [
      'whole',
      'part/fragment',
      'shardSherd',
      'chip',
      'dust',
      'residue',
    ],
    messages: defineMessages({
      shardSherd: {
        id: 'option.pahmaNameLevels.shardSherd',
        defaultMessage: 'shard/sherd',
      },
    }),
  },
  pahmaNameSystems: {
    values: [
      'aaslhNomenclature',
      'bennyhoffOlivellaBeads',
      'artAndArchitectureThesaurus',
      'giffordWorkedBone',
      'giffordWorkedShell',
      'heizerProjectilePoint',
      'justiceProjectilePoint',
      'meighanHistoricGlass',
      'pahmaObjectNames',
      'treganzaClayArtifact',
      'noSystem',
    ],
    messages: defineMessages({
      aaslhNomenclature: {
        id: 'option.pahmaNameSystems.aaslhNomenclature',
        defaultMessage: 'AASLH nomenclature',
      },
      bennyhoffOlivellaBeads: {
        id: 'option.pahmaNameSystems.bennyhoffOlivellaBeads',
        defaultMessage: 'Bennyhoff Olivella bead typology',
      },
      artAndArchitectureThesaurus: {
        id: 'option.pahmaNameSystems.artAndArchitectureThesaurus',
        defaultMessage: 'Getty Art & Architecture Thesaurus',
      },
      giffordWorkedBone: {
        id: 'option.pahmaNameSystems.giffordWorkedBone',
        defaultMessage: 'Gifford worked bone typology',
      },
      giffordWorkedShell: {
        id: 'option.pahmaNameSystems.giffordWorkedShell',
        defaultMessage: 'Gifford worked shell typology',
      },
      heizerProjectilePoint: {
        id: 'option.pahmaNameSystems.heizerProjectilePoint',
        defaultMessage: 'Heizer projectile point typology',
      },
      justiceProjectilePoint: {
        id: 'option.pahmaNameSystems.justiceProjectilePoint',
        defaultMessage: 'Justice projectile point typology',
      },
      meighanHistoricGlass: {
        id: 'option.pahmaNameSystems.meighanHistoricGlass',
        defaultMessage: 'Meighan historic glass bead typology',
      },
      pahmaObjectNames: {
        id: 'option.pahmaNameSystems.pahmaObjectNames',
        defaultMessage: 'PAHMA object names',
      },
      treganzaClayArtifact: {
        id: 'option.pahmaNameSystems.treganzaClayArtifact',
        defaultMessage: 'Treganza clay artifact typology',
      },
      noSystem: {
        id: 'option.pahmaNameSystems.noSystem',
        defaultMessage: 'no system',
      },
    }),
  },
  pahmaNameTypes: {
    values: [
      'classificatory',
      'denomination',
      'native name',
      'simple',
      'taxonomic',
      'typological',
    ],
  },
  pahmaTms2003DataSources: {
    values: [
      'AC',
      'BM',
      'BS',
      'BY',
      'CC',
      'CD',
      'CM',
      'CM_AA',
      'CM_AO',
      'CM_BM',
      'CM_BT',
      'CM_CE',
      'CM_DC',
      'CM_DH',
      'CM_FA',
      'CM_FI',
      'CM_OU',
      'CM_PL',
      'CM_RT',
      'CM_S1',
      'CM_S2',
      'CM_SN',
      'CM_TQ',
      'CN',
      'DD',
      'FA',
      'FL',
      'GP',
      'HI',
      'KE',
      'MO',
      'NG',
      'PH',
      'RG',
      'SS',
    ],
    messages: defineMessages({
      AC: {
        id: 'option.pahmaTms2003DataSources.AC',
        defaultMessage: 'Alaska Commercial Company',
      },
      BM: {
        id: 'option.pahmaTms2003DataSources.BM',
        defaultMessage: 'Basket Move Project',
      },
      BS: {
        id: 'option.pahmaTms2003DataSources.BS',
        defaultMessage: 'Barrett Slide',
      },
      BY: {
        id: 'option.pahmaTms2003DataSources.BY',
        defaultMessage: 'Bernard-Murray Tibetan Collection',
      },
      CC: {
        id: 'option.pahmaTms2003DataSources.CC',
        defaultMessage: 'Classical Coin Rehousing',
      },
      CD: {
        id: 'option.pahmaTms2003DataSources.CD',
        defaultMessage: 'Collections Management/Design Department (Inventory entries that matched original DD database)',
      },
      CM: {
        id: 'option.pahmaTms2003DataSources.CM',
        defaultMessage: 'Collections Management',
      },
      CM_AA: {
        id: 'option.pahmaTms2003DataSources.CM_AA',
        defaultMessage: 'Collections Management: AA Inventory',
      },
      CM_AO: {
        id: 'option.pahmaTms2003DataSources.CM_AO',
        defaultMessage: 'Collections Management: Archaeology Object Use',
      },
      CM_BM: {
        id: 'option.pahmaTms2003DataSources.CM_BM',
        defaultMessage: 'Collections Management: BLM Project',
      },
      CM_BT: {
        id: 'option.pahmaTms2003DataSources.CM_BT',
        defaultMessage: 'Collections Management: Boxed Textile Move',
      },
      CM_CE: {
        id: 'option.pahmaTms2003DataSources.CM_CE',
        defaultMessage: 'Collections Management: Centennial Exhibit',
      },
      CM_DC: {
        id: 'option.pahmaTms2003DataSources.CM_DC',
        defaultMessage: 'Collections Management: Duct Cleaning Project',
      },
      CM_DH: {
        id: 'option.pahmaTms2003DataSources.CM_DH',
        defaultMessage: 'Collections Management: Dave Hill Inventory',
      },
      CM_FA: {
        id: 'option.pahmaTms2003DataSources.CM_FA',
        defaultMessage: 'Collections Management: Fire Alarm Project',
      },
      CM_FI: {
        id: 'option.pahmaTms2003DataSources.CM_FI',
        defaultMessage: 'Collections Management: F-29 Inventory',
      },
      CM_OU: {
        id: 'option.pahmaTms2003DataSources.CM_OU',
        defaultMessage: 'Collections Management: General Object Use',
      },
      CM_PL: {
        id: 'option.pahmaTms2003DataSources.CM_PL',
        defaultMessage: 'Collections Management: Pacific Legacy',
      },
      CM_RT: {
        id: 'option.pahmaTms2003DataSources.CM_RT',
        defaultMessage: 'Collections Management: Rolled Textile Move',
      },
      CM_S1: {
        id: 'option.pahmaTms2003DataSources.CM_S1',
        defaultMessage: 'Collections Management: Study Locker 8, 9, 14 Inventory',
      },
      CM_S2: {
        id: 'option.pahmaTms2003DataSources.CM_S2',
        defaultMessage: 'Collections Management: Study Locker 10 – 13 Inventory',
      },
      CM_SN: {
        id: 'option.pahmaTms2003DataSources.CM_SN',
        defaultMessage: 'Collections Management: Son-299',
      },
      CM_TQ: {
        id: 'option.pahmaTms2003DataSources.CM_TQ',
        defaultMessage: 'Collections Management: Turquoise Loan',
      },
      CN: {
        id: 'option.pahmaTms2003DataSources.CN',
        defaultMessage: 'Conservation',
      },
      DD: {
        id: 'option.pahmaTms2003DataSources.DD',
        defaultMessage: 'Design Department',
      },
      FA: {
        id: 'option.pahmaTms2003DataSources.FA',
        defaultMessage: 'Fauna Rehousing',
      },
      FL: {
        id: 'option.pahmaTms2003DataSources.FL',
        defaultMessage: 'Floppy Disk',
      },
      GP: {
        id: 'option.pahmaTms2003DataSources.GP',
        defaultMessage: 'Gene Prince',
      },
      HI: {
        id: 'option.pahmaTms2003DataSources.HI',
        defaultMessage: 'Hearst Inventory',
      },
      KE: {
        id: 'option.pahmaTms2003DataSources.KE',
        defaultMessage: 'Keeling Binder Data',
      },
      MO: {
        id: 'option.pahmaTms2003DataSources.MO',
        defaultMessage: 'MOAC Project',
      },
      NG: {
        id: 'option.pahmaTms2003DataSources.NG',
        defaultMessage: 'NAGPRA',
      },
      PH: {
        id: 'option.pahmaTms2003DataSources.PH',
        defaultMessage: 'Original PHOEBE database',
      },
      RG: {
        id: 'option.pahmaTms2003DataSources.RG',
        defaultMessage: 'Registration',
      },
      SS: {
        id: 'option.pahmaTms2003DataSources.SS',
        defaultMessage: 'Steve Shackley',
      },
    }),
  },
  pahmaTmsLegacyDepartments: {
    values: [
      'Audio recordings',
      'Casts and molds',
      'Cat.  1: California (archaeology and ethnology)',
      'Cat.  2 - North America (except Mexico and Central America)',
      'Cat.  3 - Mexico, Central America, and Caribbean Area',
      'Cat.  4 - South America (Uhle Collection)',
      'Cat.  5 - Africa (except the Hearst Reisner Egyptian Collection)',
      'Cat.  6 - Ancient Egypt (the Hearst Reisner Egyptian Collection)',
      'Cat.  7 - Europe (incl. Russia west of Urals, north of Caucasus)',
      'Cat.  8 - Classical Mediterranean regions',
      'Cat.  9 - Asia (incl. Russia east of Urals)',
      'Cat. 10 - Philippine Islands',
      'Cat. 11 - Oceania (incl. Australia)',
      'Cat. 13 - Photographic prints (without negatives)',
      'Cat. 15 - Photographic negatives',
      'Cat. 16 - South America (except Uhle Collection)',
      'Cat. 17 - Drawings and Paintings',
      'Cat. 18 - Malaysia (incl. Indonesia, excl. Philippine Islands)',
      'Cat. 22 - Rubbings of Greek & Latin Inscriptions',
      'Cat. 23 - No provenience (most of catalog deleted)',
      'Cat. 25 - Kodachrome color transparencies',
      'Cat. 26 - Motion picture film',
      'Cat. 28 - unknown (retired catalog)',
      'Cat. B - Barr collection',
      'Cat. Bascom',
      'Cat. E',
      'Cat. K - Kelly collection',
      'Cat. L - Lillard Collection',
      'Cat. NO',
      'Cat. TB',
      'Faunal Remains',
      'Human Remains',
      'Loans In',
      'Maps',
      'Mixed faunal and human remains',
      'Mounts',
      'NAGPRA-associated Funerary Objects',
      'Registration',
    ],
  },
  pahmaCollections: {
    values: [
      'Albert M. Bender Collection',
      'Bascom Collection',
      'Bennyhoff Olivella Shell Bead Collection',
      'Bernard-Murray Collection',
      'California Teaching Collection',
      'Collection of Photographs by Carleton E. Watkins, ca. 1874-1890',
      'Early Man Cast Points Collection',
      'Edra Moore Central California Archaeology Type Collection',
      'Edra Moore Study Collection',
      'Gifford Type Specimen Collection: California bones',
      'Gifford Type Specimen Collection: Shell',
      'Great Basin Teaching Kit',
      'Harner\'s Study Collection',
      'Juvenile Osteological Growth Series',
      'Malcolm Rogers ceramic type collection',
      'Meighan Historic Glass Bead Collection',
      'Mossman-Vitale Collection',
      'Niloufer Ichaporia (Hirschmann) collection',
      'Paleopathology Collection',
      'Panama Pacific International Exposition Collection',
      'Pilling Historic Artifact Collection',
      'Reisner\'s Egyptian Collection',
      'Richard Lerner collection',
      'Ronald Maduro collection',
      'Southwest Type Sherd Collection, Corrugated',
      'Treganza Clay Artifact Collection',
      'Uhle\'s Peruvian Collection',
    ],
  },
  pahmaObjectStatuses: {
    values: [
      '(unknown)',
      'accession status unclear',
      'accessioned',
      'culturally affiliated',
      'culturally unaffiliated',
      'deaccessioned',
      'destroyed',
      'destructive analysis',
      'discarded',
      'exchanged',
      'intended for repatriation',
      'intended for transfer',
      'irregular Museum number',
      'missing',
      'missing in inventory',
      'not cataloged',
      'not located',
      'not received',
      'number not used',
      'object mount',
      'on loan (=borrowed)',
      'partially deaccessioned',
      'partially exchanged',
      'partially recataloged',
      'pending repatriation',
      'recataloged',
      'red-lined',
      'repatriated',
      'returned loan object',
      'sold',
      'stolen',
      'transferred',
    ],
  },
  pahmaPortfolioSeries: {
    values: [
      '1',
      '2',
      '3',
      '4',
      '5A',
      '5B',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12A',
      '12B',
      '12C',
      '12D',
      '12E',
      '12F',
      '12G',
      '12H',
      '12I',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19A',
      '19B',
      '19C',
      '19D',
      '19E',
      '19F',
      '19G',
      '19H',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52A',
      '52B',
      '52C',
      '52D',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67',
      '68',
      '69',
      '70',
      '71',
      '72',
      '73',
      '74',
      '75',
      '76',
      '77',
      '78',
      '79',
      '80',
      '81',
      '82',
      '83',
      '84',
      '85',
      '86',
      '87',
      '88',
      '89',
      '90',
      '91',
      '92',
      '93',
      '94',
      '95',
      '96',
      '97',
      '98',
      '99',
      '100',
      '101',
      '102',
      '103',
      '104',
      '105',
      '106',
      '107',
      '108',
      '109',
      '110',
      '111',
      '112',
      '113',
    ],
    messages: defineMessages({
      1: {
        id: 'option.pahmaPortfolioSeries.1',
        defaultMessage: 'Keeling Series 1: Yuki (1902)',
      },
      2: {
        id: 'option.pahmaPortfolioSeries.2',
        defaultMessage: 'Keeling Series 2: Costanoan (1902)',
      },
      3: {
        id: 'option.pahmaPortfolioSeries.3',
        defaultMessage: 'Keeling Series 3: Yurok (1902)',
      },
      4: {
        id: 'option.pahmaPortfolioSeries.4',
        defaultMessage: 'Keeling Series 4: Tule River Yokuts (1903)',
      },
      '5A': {
        id: 'option.pahmaPortfolioSeries.5A',
        defaultMessage: 'Keeling Series 5A: Mohave (1903)— Recordings of Jo Nelson (Mohave) collected by A.L. Kroeber in November 1903',
      },
      '5B': {
        id: 'option.pahmaPortfolioSeries.5B',
        defaultMessage: 'Keeling Series 5B: Mohave (1903)— Recordings of Ashpashakam (Mohave) collected by A.L. Kroeber in November 1905',
      },
      6: {
        id: 'option.pahmaPortfolioSeries.6',
        defaultMessage: 'Keeling Series 6: Yurok (1906)',
      },
      7: {
        id: 'option.pahmaPortfolioSeries.7',
        defaultMessage: 'Keeling Series 7: Luiseño (1906)',
      },
      8: {
        id: 'option.pahmaPortfolioSeries.8',
        defaultMessage: 'Keeling Series 8: Southern Pomo (1906)',
      },
      9: {
        id: 'option.pahmaPortfolioSeries.9',
        defaultMessage: 'Keeling Series 9: Yurok (1907)',
      },
      10: {
        id: 'option.pahmaPortfolioSeries.10',
        defaultMessage: 'Keeling Series 10: Diegueño (1907)',
      },
      11: {
        id: 'option.pahmaPortfolioSeries.11',
        defaultMessage: 'Keeling Series 11: Yurok (1907)',
      },
      '12A': {
        id: 'option.pahmaPortfolioSeries.12A',
        defaultMessage: 'Keeling Series 12A: Mohave (1908)— Mohave songs of the Ahta ("Cane") cycle, sung by Chiyerekavasuk ("Slue Bird") and collected by A.L. Kroeber in February 1908',
      },
      '12B': {
        id: 'option.pahmaPortfolioSeries.12B',
        defaultMessage: 'Keeling Series 12B: Mohave (1908)— Mohave songs of the Chiyere ("Birds") cycle, sung (or told) by Guy Howard and collected by A.L. Kroeber in March 1908',
      },
      '12C': {
        id: 'option.pahmaPortfolioSeries.12C',
        defaultMessage: 'Keeling Series 12C: Mohave (1908)— Mohave songs of the Tumanpa Vanyume cycle, sung by Bill Mellon (Hispanyemehevik) and collected by A.L. Kroeber in March 1908',
      },
      '12D': {
        id: 'option.pahmaPortfolioSeries.12D',
        defaultMessage: 'Keeling Series 12D: Mohave (1908)— Mohave songs of the Kapeta ("Turtle") cycle sung by Kwathiheingehamalye ("Doctor\'s Sack") and collected by A.L. Kroeber in March 1908',
      },
      '12E': {
        id: 'option.pahmaPortfolioSeries.12E',
        defaultMessage: 'Keeling Series 12E: Mohave (1908)— Mohave songs of the Vinimulya-hapacha cycle, sung by Kutene and collected by A.L. Kroeber in March 1908',
      },
      '12F': {
        id: 'option.pahmaPortfolioSeries.12F',
        defaultMessage: 'Keeling Series 12F: Mohave (1908)— Mohave songs of the Yellaka ("Goose") cycle, sung by Hakwe and collected by A.L. Kroeber in March 1908',
      },
      '12G': {
        id: 'option.pahmaPortfolioSeries.12G',
        defaultMessage: 'Keeling Series 12G: Mohave (1908)— Mohave songs of the Yellaka ("Goose") cycle, sung by Ashpashakam and collected by A.L. Kroeber in March 1908',
      },
      '12H': {
        id: 'option.pahmaPortfolioSeries.12H',
        defaultMessage: 'Keeling Series 12H: Mohave (1908)— Mohave songs of the Nyohaiva cycle, sung by Ashpashakam and collected by A.L. Kroeber in March 1908',
      },
      '12I': {
        id: 'option.pahmaPortfolioSeries.12I',
        defaultMessage: 'Keeling Series 12I: Mohave (1908)— Three recordings of Mohave flute music performed by Chiyerekavasuk or by Guy Howard and collected by A.L. Kroeber in March 1908',
      },
      13: {
        id: 'option.pahmaPortfolioSeries.13',
        defaultMessage: 'Keeling Series 13: Yuki (1907)',
      },
      14: {
        id: 'option.pahmaPortfolioSeries.14',
        defaultMessage: 'Keeling Series 14: Northeastern Pomo (1907)',
      },
      15: {
        id: 'option.pahmaPortfolioSeries.15',
        defaultMessage: 'Keeling Series 15: Wasco (1907)',
      },
      16: {
        id: 'option.pahmaPortfolioSeries.16',
        defaultMessage: 'Keeling Series 16: Klamath Lake (1907)',
      },
      17: {
        id: 'option.pahmaPortfolioSeries.17',
        defaultMessage: 'Keeling Series 17: Northern Paiute (1907)',
      },
      18: {
        id: 'option.pahmaPortfolioSeries.18',
        defaultMessage: 'Keeling Series 18: Modoc (1907)',
      },
      '19A': {
        id: 'option.pahmaPortfolioSeries.19A',
        defaultMessage: 'Keeling Series 19A: Mohave (1908)— Songs of the Ath\'i ("Salt") cycle, sung by an Indian identified as "Doctor Sack\'s half-brother" (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19B': {
        id: 'option.pahmaPortfolioSeries.19B',
        defaultMessage: 'Keeling Series 19B: Mohave (1908)— Songs of the "Frog" cycle, sung by Ateyeg (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19C': {
        id: 'option.pahmaPortfolioSeries.19C',
        defaultMessage: 'Keeling Series 19C: Mohave (1908)— Songs of the Akwaka ("Deer") cycle, sung by Kunalye (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19D': {
        id: 'option.pahmaPortfolioSeries.19D',
        defaultMessage: 'Keeling Series 19D: Mohave (1908)— Songs of the Ohwera cycle, sung by Kupahwai (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19E': {
        id: 'option.pahmaPortfolioSeries.19E',
        defaultMessage: 'Keeling Series 19E: Mohave (1908)— Songs of the Alysa cycle, sung by Kunalye (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19F': {
        id: 'option.pahmaPortfolioSeries.19F',
        defaultMessage: 'Keeling Series 19F: Mohave (1908)— Songs of the Chuhuecha cycle, sung by Achora Hanyava (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19G': {
        id: 'option.pahmaPortfolioSeries.19G',
        defaultMessage: 'Keeling Series 19G: Mohave (1908)— Songs of the Tumanpa Uta\'uta cycle, sung by Achora Hanyava (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19H': {
        id: 'option.pahmaPortfolioSeries.19H',
        defaultMessage: 'Keeling Series 19H: Mohave (1908)— Recording of Chiyerekavasuk or "Bluebird" (Mohave) collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      20: {
        id: 'option.pahmaPortfolioSeries.20',
        defaultMessage: 'Keeling Series 20: Northern Sierra Miwok (1908)',
      },
      21: {
        id: 'option.pahmaPortfolioSeries.21',
        defaultMessage: 'Keeling Series 21: Central Pomo (1908)',
      },
      22: {
        id: 'option.pahmaPortfolioSeries.22',
        defaultMessage: 'Keeling Series 22: Sioux (1908)',
      },
      23: {
        id: 'option.pahmaPortfolioSeries.23',
        defaultMessage: 'Keeling Series 23: Diegueño (1906)',
      },
      24: {
        id: 'option.pahmaPortfolioSeries.24',
        defaultMessage: 'Keeling Series 24: Luiseño (1906)',
      },
      25: {
        id: 'option.pahmaPortfolioSeries.25',
        defaultMessage: 'Keeling Series 25: Papago (1909)',
      },
      26: {
        id: 'option.pahmaPortfolioSeries.26',
        defaultMessage: 'Keeling Series 26: Hupa (1901)',
      },
      27: {
        id: 'option.pahmaPortfolioSeries.27',
        defaultMessage: 'Keeling Series 27: Wailaki (1901)',
      },
      28: {
        id: 'option.pahmaPortfolioSeries.28',
        defaultMessage: 'Keeling Series 28: Hupa (1901)',
      },
      29: {
        id: 'option.pahmaPortfolioSeries.29',
        defaultMessage: 'Keeling Series 29: Nongatl (1907)',
      },
      30: {
        id: 'option.pahmaPortfolioSeries.30',
        defaultMessage: 'Keeling Series 30: Whilkut (1908)',
      },
      31: {
        id: 'option.pahmaPortfolioSeries.31',
        defaultMessage: 'Keeling Series 31: Chilula and Hupa (1908)',
      },
      32: {
        id: 'option.pahmaPortfolioSeries.32',
        defaultMessage: 'Keeling Series 32: Hupa (1905)',
      },
      33: {
        id: 'option.pahmaPortfolioSeries.33',
        defaultMessage: 'Keeling Series 33: Hupa (1902)',
      },
      34: {
        id: 'option.pahmaPortfolioSeries.34',
        defaultMessage: 'Keeling Series 34: Tolowa (1903)',
      },
      35: {
        id: 'option.pahmaPortfolioSeries.35',
        defaultMessage: 'Keeling Series 35: Yurok (1909)',
      },
      36: {
        id: 'option.pahmaPortfolioSeries.36',
        defaultMessage: 'Keeling Series 36: Yurok (1909)',
      },
      37: {
        id: 'option.pahmaPortfolioSeries.37',
        defaultMessage: 'Keeling Series 37: Bannock (1908)',
      },
      38: {
        id: 'option.pahmaPortfolioSeries.38',
        defaultMessage: 'Keeling Series 38: Shoshone (1908)',
      },
      39: {
        id: 'option.pahmaPortfolioSeries.39',
        defaultMessage: 'Keeling Series 39: Chukchi of Siberia (1909)',
      },
      40: {
        id: 'option.pahmaPortfolioSeries.40',
        defaultMessage: 'Keeling Series 40: Southeastern Pomo (1902)',
      },
      41: {
        id: 'option.pahmaPortfolioSeries.41',
        defaultMessage: 'Keeling Series 41: Yurok (1908)',
      },
      42: {
        id: 'option.pahmaPortfolioSeries.42',
        defaultMessage: 'Keeling Series 42: Pomo (1909)',
      },
      43: {
        id: 'option.pahmaPortfolioSeries.43',
        defaultMessage: 'Keeling Series 43: Yokuts (1909)',
      },
      44: {
        id: 'option.pahmaPortfolioSeries.44',
        defaultMessage: 'Keeling Series 44: Hupa (1902)',
      },
      45: {
        id: 'option.pahmaPortfolioSeries.45',
        defaultMessage: 'Keeling Series 45: Japan (n.d.)',
      },
      46: {
        id: 'option.pahmaPortfolioSeries.46',
        defaultMessage: 'Keeling Series 46: Wintun (1909)',
      },
      47: {
        id: 'option.pahmaPortfolioSeries.47',
        defaultMessage: 'Keeling Series 47: Wintun (1909 and 1910)',
      },
      48: {
        id: 'option.pahmaPortfolioSeries.48',
        defaultMessage: 'Keeling Series 48: Northern Paiute (1910)',
      },
      49: {
        id: 'option.pahmaPortfolioSeries.49',
        defaultMessage: 'Keeling Series 49: Hupa (n.d.)',
      },
      50: {
        id: 'option.pahmaPortfolioSeries.50',
        defaultMessage: 'Keeling Series 50: Ntlakapanuk and Chinook Jargon (n.d.)',
      },
      51: {
        id: 'option.pahmaPortfolioSeries.51',
        defaultMessage: 'Keeling Series 51: Maidu (1902)',
      },
      '52A': {
        id: 'option.pahmaPortfolioSeries.52A',
        defaultMessage: 'Keeling Series 52A: Mohave (1910)— Songs of the Tumanpa cycle sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      '52B': {
        id: 'option.pahmaPortfolioSeries.52B',
        defaultMessage: 'Keeling Series 52B: Mohave (1910)— Doctoring songs sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      '52C': {
        id: 'option.pahmaPortfolioSeries.52C',
        defaultMessage: 'Keeling Series 52C: Mohave (1910)— Mohave songs of the Ath\'l ("Salt") cycle sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      '52D': {
        id: 'option.pahmaPortfolioSeries.52D',
        defaultMessage: 'Keeling Series 52D: Mohave (1910)— Mohave songs of the Chuhuecha cycle sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      53: {
        id: 'option.pahmaPortfolioSeries.53',
        defaultMessage: 'Keeling Series 53: Salinan (1910)',
      },
      54: {
        id: 'option.pahmaPortfolioSeries.54',
        defaultMessage: 'Keeling Series 54: laluit of Marshall Islands (1911)',
      },
      55: {
        id: 'option.pahmaPortfolioSeries.55',
        defaultMessage: 'Keeling Series 55: Yana/Yahi (1911)',
      },
      56: {
        id: 'option.pahmaPortfolioSeries.56',
        defaultMessage: 'Keeling Series 56: Northern Yana (1911)',
      },
      57: {
        id: 'option.pahmaPortfolioSeries.57',
        defaultMessage: 'Keeling Series 57: Yana/Yahi (1911)',
      },
      58: {
        id: 'option.pahmaPortfolioSeries.58',
        defaultMessage: 'Keeling Series 58: Northern Yana (1911)',
      },
      59: {
        id: 'option.pahmaPortfolioSeries.59',
        defaultMessage: 'Keeling Series 59: Yana/Yahi (1912)',
      },
      60: {
        id: 'option.pahmaPortfolioSeries.60',
        defaultMessage: 'Keeling Series 60: Yana/Yahi (1912)',
      },
      61: {
        id: 'option.pahmaPortfolioSeries.61',
        defaultMessage: 'Keeling Series 61: Yuki (1912)',
      },
      62: {
        id: 'option.pahmaPortfolioSeries.62',
        defaultMessage: 'Keeling Series 62: Experimental Recordings (n.d.)',
      },
      63: {
        id: 'option.pahmaPortfolioSeries.63',
        defaultMessage: 'Keeling Series 63: Central Sierra Miwok (1913)',
      },
      64: {
        id: 'option.pahmaPortfolioSeries.64',
        defaultMessage: 'Keeling Series 64: Experimental Recording (n.d.)',
      },
      65: {
        id: 'option.pahmaPortfolioSeries.65',
        defaultMessage: 'Keeling Series 65: Athabaskan (1913)',
      },
      66: {
        id: 'option.pahmaPortfolioSeries.66',
        defaultMessage: 'Keeling Series 66: Yana/Yahi (1914)',
      },
      67: {
        id: 'option.pahmaPortfolioSeries.67',
        defaultMessage: 'Keeling Series 67: Central Sierra Miwok (1914)',
      },
      68: {
        id: 'option.pahmaPortfolioSeries.68',
        defaultMessage: 'Keeling Series 68: Northern Paiute (1914)',
      },
      69: {
        id: 'option.pahmaPortfolioSeries.69',
        defaultMessage: 'Keeling Series 69: Owens Valley Paiute (1915)',
      },
      70: {
        id: 'option.pahmaPortfolioSeries.70',
        defaultMessage: 'Keeling Series 70: Central and Southern Sierra Miwok (1908)',
      },
      71: {
        id: 'option.pahmaPortfolioSeries.71',
        defaultMessage: 'Keeling Series 71: North Fork Mono (1916)',
      },
      72: {
        id: 'option.pahmaPortfolioSeries.72',
        defaultMessage: 'Keeling Series 72: Cahuilla (1918)',
      },
      73: {
        id: 'option.pahmaPortfolioSeries.73',
        defaultMessage: 'Keeling Series 73: Western Mono (1926)',
      },
      74: {
        id: 'option.pahmaPortfolioSeries.74',
        defaultMessage: 'Keeling Series 74: Papago (1919)',
      },
      75: {
        id: 'option.pahmaPortfolioSeries.75',
        defaultMessage: 'Keeling Series 75: Eastern Porno (1919)',
      },
      76: {
        id: 'option.pahmaPortfolioSeries.76',
        defaultMessage: 'Keeling Series 76: Eskimo (1907-1908)',
      },
      77: {
        id: 'option.pahmaPortfolioSeries.77',
        defaultMessage: 'Keeling Series 77: Northern Paiute (1913)',
      },
      78: {
        id: 'option.pahmaPortfolioSeries.78',
        defaultMessage: 'Keeling Series 78: Wiyot (1923)',
      },
      79: {
        id: 'option.pahmaPortfolioSeries.79',
        defaultMessage: 'Keeling Series 79: Snoqualemie (1923)',
      },
      80: {
        id: 'option.pahmaPortfolioSeries.80',
        defaultMessage: 'Keeling Series 80: Yuki (1902 and 1912)',
      },
      81: {
        id: 'option.pahmaPortfolioSeries.81',
        defaultMessage: 'Keeling Series 81: Hopi and Navajo (1925)',
      },
      82: {
        id: 'option.pahmaPortfolioSeries.82',
        defaultMessage: 'Keeling Series 82: Nomlaki (1925)',
      },
      83: {
        id: 'option.pahmaPortfolioSeries.83',
        defaultMessage: 'Keeling Series 83: Wiyot (n.d.)',
      },
      84: {
        id: 'option.pahmaPortfolioSeries.84',
        defaultMessage: 'Keeling Series 84: Northern Wintun (1929)',
      },
      85: {
        id: 'option.pahmaPortfolioSeries.85',
        defaultMessage: 'Keeling Series 85: Otomi of Mexico (1929)',
      },
      86: {
        id: 'option.pahmaPortfolioSeries.86',
        defaultMessage: 'Keeling Series 86: Southern Athabaskan (1929)',
      },
      87: {
        id: 'option.pahmaPortfolioSeries.87',
        defaultMessage: 'Keeling Series 87: Coast Miwok (1932)',
      },
      88: {
        id: 'option.pahmaPortfolioSeries.88',
        defaultMessage: 'Keeling Series 88: Yavapai (1932)',
      },
      89: {
        id: 'option.pahmaPortfolioSeries.89',
        defaultMessage: 'Keeling Series 89: Eastern Porno (1926 and 1927)',
      },
      90: {
        id: 'option.pahmaPortfolioSeries.90',
        defaultMessage: 'Keeling Series 90: Eastern Porno (1927 and 1929)',
      },
      91: {
        id: 'option.pahmaPortfolioSeries.91',
        defaultMessage: 'Keeling Series 91: Karok (1926 and 1927)',
      },
      92: {
        id: 'option.pahmaPortfolioSeries.92',
        defaultMessage: 'Keeling Series 92: Yurok (1926-1932)',
      },
      93: {
        id: 'option.pahmaPortfolioSeries.93',
        defaultMessage: 'Keeling Series 93: Maidu (1931)',
      },
      94: {
        id: 'option.pahmaPortfolioSeries.94',
        defaultMessage: 'Keeling Series 94: Sierra Miwok (1927)',
      },
      95: {
        id: 'option.pahmaPortfolioSeries.95',
        defaultMessage: 'Keeling Series 95: Navajo (1928)',
      },
      96: {
        id: 'option.pahmaPortfolioSeries.96',
        defaultMessage: 'Keeling Series 96: Santa Clara Pueblo (1926)',
      },
      97: {
        id: 'option.pahmaPortfolioSeries.97',
        defaultMessage: 'Keeling Series 97: Papago (1928)',
      },
      98: {
        id: 'option.pahmaPortfolioSeries.98',
        defaultMessage: 'Keeling Series 98: Sioux (1928)',
      },
      99: {
        id: 'option.pahmaPortfolioSeries.99',
        defaultMessage: 'Keeling Series 99: Blackfoot (1926 and 1927)',
      },
      100: {
        id: 'option.pahmaPortfolioSeries.100',
        defaultMessage: 'Keeling Series 100: Crow (1926-1927)',
      },
      101: {
        id: 'option.pahmaPortfolioSeries.101',
        defaultMessage: 'Keeling Series 101: Crow (1927)',
      },
      102: {
        id: 'option.pahmaPortfolioSeries.102',
        defaultMessage: 'Keeling Series 102: Mono Lake Paiute (1927-1928)',
      },
      103: {
        id: 'option.pahmaPortfolioSeries.103',
        defaultMessage: 'Keeling Series 103: Owens Valley Paiute and Mono Lake Paiute (1927-1928)',
      },
      104: {
        id: 'option.pahmaPortfolioSeries.104',
        defaultMessage: 'Keeling Series 104: Northern Paiute (1938)',
      },
      105: {
        id: 'option.pahmaPortfolioSeries.105',
        defaultMessage: 'Keeling Series 105: Washo (1938)',
      },
      106: {
        id: 'option.pahmaPortfolioSeries.106',
        defaultMessage: 'Keeling Series 106: Uintah Ute (1938)',
      },
      107: {
        id: 'option.pahmaPortfolioSeries.107',
        defaultMessage: 'Keeling Series 107: Washo (1938)',
      },
      108: {
        id: 'option.pahmaPortfolioSeries.108',
        defaultMessage: 'Keeling Series 108: Northern Paiute (1938)',
      },
      109: {
        id: 'option.pahmaPortfolioSeries.109',
        defaultMessage: 'Keeling Series 109: Shoshone (1938)',
      },
      110: {
        id: 'option.pahmaPortfolioSeries.110',
        defaultMessage: 'Keeling Series 110: Chukchansi Yokuts (1949)',
      },
      111: {
        id: 'option.pahmaPortfolioSeries.111',
        defaultMessage: 'Keeling Series 111: Coast Miwok (n.d.)',
      },
      112: {
        id: 'option.pahmaPortfolioSeries.112',
        defaultMessage: 'Keeling Series 112: Yuman/Maricopa (1929-1932)',
      },
      113: {
        id: 'option.pahmaPortfolioSeries.113',
        defaultMessage: 'Keeling Series 113: Miscellaneous',
      },
    }),
  },
  pahmaSexes: {
    values: [
      'male',
      'probable-male',
      'possible-male',
      'female',
      'probable-female',
      'possible-female',
      'asexual',
      'hermaphrodite',
      'multiple',
      'indeterminate',
      'not-applicable',
      'unknown',
    ],
    messages: defineMessages({
      'probable-male': {
        id: 'option.pahmaSexes.probable-male',
        defaultMessage: 'probable male',
      },
      'possible-male': {
        id: 'option.pahmaSexes.possible-male',
        defaultMessage: 'possible male',
      },
      'probable-female': {
        id: 'option.pahmaSexes.probable-female',
        defaultMessage: 'probable female',
      },
      'possible-female': {
        id: 'option.pahmaSexes.possible-female',
        defaultMessage: 'possible female',
      },
      'not-applicable': {
        id: 'option.pahmaSexes.not-applicable',
        defaultMessage: 'not applicable',
      },
    }),
  },
  pahmaPhases: {
    values: [
      'adult-mature',
      'subadult-immature',
      'egg',
      'larva',
      'seed',
      'indeterminate',
      'multiple',
      'unknown',
    ],
    messages: defineMessages({
      'adult-mature': {
        id: 'option.pahmaPhases.adult-mature',
        defaultMessage: 'adult/mature',
      },
      'subadult-immature': {
        id: 'option.pahmaPhases.subadult-immature',
        defaultMessage: 'subadult/immature',
      },
    }),
  },
  pahmaForms: {
    values: [
      'bagged',
      'bottled',
      'boxed',
      'in-can-or-tin',
      'in-drum',
      'dry',
      'ground',
      'mounted',
      'pinned',
      'thin-section',
      'wet',
      'wrapped',
      'unknown',
    ],
    messages: defineMessages({
      'in-can-or-tin': {
        id: 'option.pahmaForms.in-can-or-tin',
        defaultMessage: 'in can or tin',
      },
      'in-drum': {
        id: 'option.pahmaForms.in-drum',
        defaultMessage: 'in drum',
      },
      'thin-section': {
        id: 'option.pahmaForms.thin-section',
        defaultMessage: 'thin section',
      },
    }),
  },
  pahmaTechnicalAttributeMeasurements: {
    values: [
      '33',
      '45',
      '78',
    ],
  },
  pahmaTechnicalAttributeMeasurementUnits: {
    values: [
      'rpm',
    ],
  },
  pahmaContentObjectTypes: {
    values: [
      'animal',
      'artwork',
      'book',
      'bone',
      'burial',
      'building',
      'clothing',
      'container',
      'document',
      'furniture',
      'food',
      'game',
      'jewelry',
      'musicalInstrument',
      'plant',
      'rawMaterial',
      'regalia',
      'ritualObject',
      'textile',
      'tool',
      'vehicle',
      'watercraft',
      'weapon',
    ],
    messages: defineMessages({
      musicalInstrument: {
        id: 'option.pahmaContentObjectTypes.musicalInstrument',
        defaultMessage: 'musical instrument',
      },
      rawMaterial: {
        id: 'option.pahmaContentObjectTypes.rawMaterial',
        defaultMessage: 'raw material',
      },
      ritualObject: {
        id: 'option.pahmaContentObjectTypes.ritualObject',
        defaultMessage: 'ritual object',
      },
    }),
  },
  pahmaContentEventTypes: {
    values: [
      'ceremony',
      'classVisit',
      'dance',
      'exhibit',
      'healingDoctoring',
      'lecture',
      'memberEvent',
      'nagpraConsultation',
      'reception',
      'researchVisit',
      'tour',
      'tribalVisit',
    ],
    messages: defineMessages({
      classVisit: {
        id: 'option.pahmaContentEventTypes.classVisit',
        defaultMessage: 'class visit',
      },
      healingDoctoring: {
        id: 'option.pahmaContentEventTypes.healingDoctoring',
        defaultMessage: 'healing/doctoring',
      },
      memberEvent: {
        id: 'option.pahmaContentEventTypes.memberEvent',
        defaultMessage: 'member event',
      },
      nagpraConsultation: {
        id: 'option.pahmaContentEventTypes.nagpraConsultation',
        defaultMessage: 'NAGPRA consultation',
      },
      researchVisit: {
        id: 'option.pahmaContentEventTypes.researchVisit',
        defaultMessage: 'research visit',
      },
      tribalVisit: {
        id: 'option.pahmaContentEventTypes.tribalVisit',
        defaultMessage: 'tribal visit',
      },
    }),
  },
  pahmaScripts: {
    values: [
      'beneventanScript',
      'blackletter',
      'carolingianMiniscule',
      'chanceryHand',
      'courtHand',
      'germanicMiniscule',
      'gothicScript',
      'unspecifiedHandwriting',
      'humanistMiniscule',
      'insularScript',
      'libraryHand',
      'merovingianScript',
      'palmerMethod',
      'romanCursive',
      'roundHand',
      'uncialScript',
      'secretaryHand',
      'rusticCapitals',
      'spencerianMethod',
      'squareCapitals',
      'visigothicScript',
    ],
    messages: defineMessages({
      beneventanScript: {
        id: 'option.pahmaScripts.beneventanScript',
        defaultMessage: 'Beneventan script',
      },
      blackletter: {
        id: 'option.pahmaScripts.blackletter',
        defaultMessage: 'blackletter',
      },
      carolingianMiniscule: {
        id: 'option.pahmaScripts.carolingianMiniscule',
        defaultMessage: 'Carolingian miniscule',
      },
      chanceryHand: {
        id: 'option.pahmaScripts.chanceryHand',
        defaultMessage: 'chancery hand',
      },
      courtHand: {
        id: 'option.pahmaScripts.courtHand',
        defaultMessage: 'court hand',
      },
      germanicMiniscule: {
        id: 'option.pahmaScripts.germanicMiniscule',
        defaultMessage: 'Germanic miniscule',
      },
      gothicScript: {
        id: 'option.pahmaScripts.gothicScript',
        defaultMessage: 'Gothic script',
      },
      unspecifiedHandwriting: {
        id: 'option.pahmaScripts.unspecifiedHandwriting',
        defaultMessage: 'handwriting (unspecified)',
      },
      humanistMiniscule: {
        id: 'option.pahmaScripts.humanistMiniscule',
        defaultMessage: 'humanist miniscule',
      },
      insularScript: {
        id: 'option.pahmaScripts.insularScript',
        defaultMessage: 'insular script',
      },
      libraryHand: {
        id: 'option.pahmaScripts.libraryHand',
        defaultMessage: 'library hand',
      },
      merovingianScript: {
        id: 'option.pahmaScripts.merovingianScript',
        defaultMessage: 'Merovingian script',
      },
      palmerMethod: {
        id: 'option.pahmaScripts.palmerMethod',
        defaultMessage: 'Palmer method',
      },
      romanCursive: {
        id: 'option.pahmaScripts.romanCursive',
        defaultMessage: 'Roman cursive',
      },
      roundHand: {
        id: 'option.pahmaScripts.roundHand',
        defaultMessage: 'round hand',
      },
      uncialScript: {
        id: 'option.pahmaScripts.uncialScript',
        defaultMessage: 'uncial script',
      },
      secretaryHand: {
        id: 'option.pahmaScripts.secretaryHand',
        defaultMessage: 'secretary hand',
      },
      rusticCapitals: {
        id: 'option.pahmaScripts.rusticCapitals',
        defaultMessage: 'rustic capitals',
      },
      spencerianMethod: {
        id: 'option.pahmaScripts.spencerianMethod',
        defaultMessage: 'Spencerian method',
      },
      squareCapitals: {
        id: 'option.pahmaScripts.squareCapitals',
        defaultMessage: 'square capitals',
      },
      visigothicScript: {
        id: 'option.pahmaScripts.visigothicScript',
        defaultMessage: 'Visigothic script',
      },
    }),
  },
  pahmaInscriptionTypes: {
    values: [
      'brand',
      'decoration',
      'epitaph',
      'estateStamp',
      'exLibris',
      'graffiti',
      'incisedMark',
      'label',
      'makersMark',
      'mementoMori',
      'monumentalInscription',
      'ostracon',
      'tattoo',
    ],
    messages: defineMessages({
      estateStamp: {
        id: 'option.pahmaInscriptionTypes.estateStamp',
        defaultMessage: 'estate stamp',
      },
      exLibris: {
        id: 'option.pahmaInscriptionTypes.exLibris',
        defaultMessage: 'ex libris',
      },
      incisedMark: {
        id: 'option.pahmaInscriptionTypes.incisedMark',
        defaultMessage: 'incised mark',
      },
      makersMark: {
        id: 'option.pahmaInscriptionTypes.makersMark',
        defaultMessage: 'maker\'s mark',
      },
      mementoMori: {
        id: 'option.pahmaInscriptionTypes.mementoMori',
        defaultMessage: 'memento mori',
      },
      monumentalInscription: {
        id: 'option.pahmaInscriptionTypes.monumentalInscription',
        defaultMessage: 'monumental inscription',
      },
    }),
  },
  pahmaProdOrgRoles: {
    values: [
      'maker',
      'manufacturer',
      'performer',
      'photographer',
      'supplier',
    ],
  },
  pahmaAssocActivityTypes: {
    values: [
      'played',
      'recorded',
      'sung',
      'used',
      'viewed',
      'worn',
      'unknown',
    ],
  },
  pahmaAssocObjectTypes: {
    values: [
      'adhering',
      'associatedWith',
      'embedded',
      'foundNear',
    ],
    messages: defineMessages({
      associatedWith: {
        id: 'option.pahmaAssocObjectTypes.associatedWith',
        defaultMessage: 'associated with',
      },
      foundNear: {
        id: 'option.pahmaAssocObjectTypes.foundNear',
        defaultMessage: 'found near',
      },
    }),
  },
  pahmaAssocConceptTypes: {
    values: [
      'causedBy',
      'dependsOn',
      'effectOf',
      'exampleOf',
      'influencedBy',
      'inspiredBy',
      'partOf',
      'relatedTo',
      'reminiscentOf',
      'sameAs',
      'sameClassAs',
      'similarTo',
    ],
    messages: defineMessages({
      causedBy: {
        id: 'option.pahmaAssocConceptTypes.causedBy',
        defaultMessage: 'caused by',
      },
      dependsOn: {
        id: 'option.pahmaAssocConceptTypes.dependsOn',
        defaultMessage: 'depends on',
      },
      effectOf: {
        id: 'option.pahmaAssocConceptTypes.effectOf',
        defaultMessage: 'effect of',
      },
      exampleOf: {
        id: 'option.pahmaAssocConceptTypes.exampleOf',
        defaultMessage: 'example of',
      },
      influencedBy: {
        id: 'option.pahmaAssocConceptTypes.influencedBy',
        defaultMessage: 'influenced by',
      },
      inspiredBy: {
        id: 'option.pahmaAssocConceptTypes.inspiredBy',
        defaultMessage: 'inspired by',
      },
      partOf: {
        id: 'option.pahmaAssocConceptTypes.partOf',
        defaultMessage: 'part of',
      },
      relatedTo: {
        id: 'option.pahmaAssocConceptTypes.relatedTo',
        defaultMessage: 'related to',
      },
      reminiscentOf: {
        id: 'option.pahmaAssocConceptTypes.reminiscentOf',
        defaultMessage: 'reminiscent of',
      },
      sameAs: {
        id: 'option.pahmaAssocConceptTypes.sameAs',
        defaultMessage: 'same as',
      },
      sameClassAs: {
        id: 'option.pahmaAssocConceptTypes.sameClassAs',
        defaultMessage: 'same class as',
      },
      similarTo: {
        id: 'option.pahmaAssocConceptTypes.similarTo',
        defaultMessage: 'similar to',
      },
    }),
  },
  pahmaAssocCulturalContextTypes: {
    values: [
      'descendedFrom',
      'exampleOf',
      'inspiredBy',
      'relatedTo',
      'similarTo',
      'identicalTo',
      'influencedBy',
      'reminiscentOf',
    ],
    messages: defineMessages({
      descendedFrom: {
        id: 'option.pahmaAssocCulturalContextTypes.descendedFrom',
        defaultMessage: 'descended from',
      },
      exampleOf: {
        id: 'option.pahmaAssocCulturalContextTypes.exampleOf',
        defaultMessage: 'example of',
      },
      inspiredBy: {
        id: 'option.pahmaAssocCulturalContextTypes.inspiredBy',
        defaultMessage: 'inspired by',
      },
      relatedTo: {
        id: 'option.pahmaAssocCulturalContextTypes.relatedTo',
        defaultMessage: 'related to',
      },
      similarTo: {
        id: 'option.pahmaAssocCulturalContextTypes.similarTo',
        defaultMessage: 'typologically similar to',
      },
      identicalTo: {
        id: 'option.pahmaAssocCulturalContextTypes.identicalTo',
        defaultMessage: 'typologically identical to',
      },
      influencedBy: {
        id: 'option.pahmaAssocCulturalContextTypes.influencedBy',
        defaultMessage: 'influenced by',
      },
      reminiscentOf: {
        id: 'option.pahmaAssocCulturalContextTypes.reminiscentOf',
        defaultMessage: 'reminiscent of',
      },
    }),
  },
  pahmaAssocPeopleTypes: {
    values: [
      'gatheredCollectedBy',
      'inspiredBy',
      'nagpraCulturalAffiliation',
      'traditionalMakers',
      'inTheStyleOf',
      'attributedMakers',
      'made by',
      'traditionallyMadeBy',
      'usedButNotMadeBy',
      'usedButNotMadeByAttributed',
    ],
    messages: defineMessages({
      gatheredCollectedBy: {
        id: 'option.pahmaAssocPeopleTypes.gatheredCollectedBy',
        defaultMessage: 'gathered/collected by',
      },
      inspiredBy: {
        id: 'option.pahmaAssocPeopleTypes.inspiredBy',
        defaultMessage: 'inspired by',
      },
      nagpraCulturalAffiliation: {
        id: 'option.pahmaAssocPeopleTypes.nagpraCulturalAffiliation',
        defaultMessage: 'NAGPRA cultural affiliation',
      },
      traditionalMakers: {
        id: 'option.pahmaAssocPeopleTypes.traditionalMakers',
        defaultMessage: 'traditional makers',
      },
      inTheStyleOf: {
        id: 'option.pahmaAssocPeopleTypes.inTheStyleOf',
        defaultMessage: 'in the style of',
      },
      attributedMakers: {
        id: 'option.pahmaAssocPeopleTypes.attributedMakers',
        defaultMessage: 'made by (attributed)',
      },
      traditionallyMadeBy: {
        id: 'option.pahmaAssocPeopleTypes.traditionallyMadeBy',
        defaultMessage: 'traditionally made by',
      },
      usedButNotMadeBy: {
        id: 'option.pahmaAssocPeopleTypes.usedButNotMadeBy',
        defaultMessage: 'used, but not made, by',
      },
      usedButNotMadeByAttributed: {
        id: 'option.pahmaAssocPeopleTypes.usedButNotMadeByAttributed',
        defaultMessage: 'used, but not made, by (attributed)',
      },
    }),
  },
  pahmaAssocEventTypes: {
    values: [
      'ceremony',
      'classVisit',
      'courtesyVisit',
      'dance',
      'exhibit',
      'lecture',
      'memberEvent',
      'nagpraConsultation',
      'reception',
      'researchVisit',
      'tour',
      'tribalVisit',
    ],
    messages: defineMessages({
      classVisit: {
        id: 'option.pahmaAssocEventTypes.classVisit',
        defaultMessage: 'class visit',
      },
      courtesyVisit: {
        id: 'option.pahmaAssocEventTypes.courtesyVisit',
        defaultMessage: 'courtesy visit',
      },
      memberEvent: {
        id: 'option.pahmaAssocEventTypes.memberEvent',
        defaultMessage: 'member event',
      },
      nagpraConsultation: {
        id: 'option.pahmaAssocEventTypes.nagpraConsultation',
        defaultMessage: 'NAGPRA consultation',
      },
      researchVisit: {
        id: 'option.pahmaAssocEventTypes.researchVisit',
        defaultMessage: 'research visit',
      },
      tribalVisit: {
        id: 'option.pahmaAssocEventTypes.tribalVisit',
        defaultMessage: 'tribal visit',
      },
    }),
  },
  pahmaAssocDateTypes: {
    values: [
      'conservation date',
      'date missing',
      'date of analysis',
      'date photographed',
      'date received',
      'date used',
      'deaccession date',
      'destruction date',
      'immured',
      'material date',
      'minting',
      'mounted',
      'partial deaccession/loss/destruc',
      'patent date',
      'published',
      'recatalogued date',
      'ruler date',
    ],
  },
  pahmaOwnershipCategories: {
    values: [
      'corporate',
      'private',
      'government',
      'foreign',
      'nonProfit',
      'museum',
      'university',
      'unknown',
    ],
    messages: defineMessages({
      government: {
        id: 'option.pahmaOwnershipCategories.government',
        defaultMessage: 'government/public',
      },
      nonProfit: {
        id: 'option.pahmaOwnershipCategories.nonProfit',
        defaultMessage: 'non-profit',
      },
    }),
  },
  pahmaOwnershipExchangeMethods: {
    values: [
      'bequest',
      'exchange',
      'gift',
      'purchase',
      'transfer',
    ],
  },
  ageEstimateQualifiers: {
    values: [
      'approximately',
      'exactly',
      'olderThan',
      'youngerThan',
    ],
    messages: defineMessages({
      olderThan: {
        id: 'option.ageEstimateQualifiers.olderThan',
        defaultMessage: 'older than',
      },
      youngerThan: {
        id: 'option.ageEstimateQualifiers.youngerThan',
        defaultMessage: 'younger than',
      },
    }),
  },
  pahmaNagpraCodeLegacyCategories: {
    values: [
      'noCode',
      'associatedFuneraryObject',
      'unassociatedFuneraryObjectWithDesignatedBurial',
      'unassociatedFuneraryObjectWithUndesignatedBurial',
      'unassociatedFuneraryObjectWithCemetery',
      'lacksClearFuneraryStatusNearCemetery',
      'needsFurtherResearch',
      'codedInError',
      'needsCheckOfObject',
      'wasRecataloged',
      'notReportable',
      'unknownMeaning777',
      'needsRecatalog',
      'unknown',
    ],
    messages: defineMessages({
      noCode: {
        id: 'option.pahmaNagpraCodeLegacyCategories.noCode',
        defaultMessage: 'no code assigned',
      },
      associatedFuneraryObject: {
        id: 'option.pahmaNagpraCodeLegacyCategories.associatedFuneraryObject',
        defaultMessage: '1: associated funerary object (AFO)',
      },
      unassociatedFuneraryObjectWithDesignatedBurial: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unassociatedFuneraryObjectWithDesignatedBurial',
        defaultMessage: '2: unassociated funerary object (UFO) with designated burial',
      },
      unassociatedFuneraryObjectWithUndesignatedBurial: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unassociatedFuneraryObjectWithUndesignatedBurial',
        defaultMessage: '3: unassociated funerary object (UFO) with undesignated burial',
      },
      unassociatedFuneraryObjectWithCemetery: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unassociatedFuneraryObjectWithCemetery',
        defaultMessage: '4: unassociated funerary object (UFO)/cemetery',
      },
      lacksClearFuneraryStatusNearCemetery: {
        id: 'option.pahmaNagpraCodeLegacyCategories.lacksClearFuneraryStatusNearCemetery',
        defaultMessage: '5: lacks clear funerary status/near cemetery',
      },
      needsFurtherResearch: {
        id: 'option.pahmaNagpraCodeLegacyCategories.needsFurtherResearch',
        defaultMessage: '6: needs further research',
      },
      codedInError: {
        id: 'option.pahmaNagpraCodeLegacyCategories.codedInError',
        defaultMessage: '7: coded in error',
      },
      needsCheckOfObject: {
        id: 'option.pahmaNagpraCodeLegacyCategories.needsCheckOfObject',
        defaultMessage: '8: needs check of object',
      },
      wasRecataloged: {
        id: 'option.pahmaNagpraCodeLegacyCategories.wasRecataloged',
        defaultMessage: '9: was recataloged',
      },
      notReportable: {
        id: 'option.pahmaNagpraCodeLegacyCategories.notReportable',
        defaultMessage: '10: not reportable',
      },
      unknownMeaning777: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unknownMeaning777',
        defaultMessage: '777: __________',
      },
      needsRecatalog: {
        id: 'option.pahmaNagpraCodeLegacyCategories.needsRecatalog',
        defaultMessage: '999: needs recatalog',
      },
    }),
  },
  nagpraApplicabilityCategories: {
    values: [
      'nonNagpra',
      'affiliatedHsr',
      'unaffiliatedCuiHsr',
      'afo',
      'ufo',
      'sacredObject',
      'objectOfCulturalPatrimony',
      'subjectToNAGPRA',
      'needsFurtherResearch',
      'unknown',
    ],
    messages: defineMessages({
      nonNagpra: {
        id: 'option.nagpraApplicabilityCategories.nonNagpra',
        defaultMessage: 'not subject to NAGPRA',
      },
      affiliatedHsr: {
        id: 'option.nagpraApplicabilityCategories.affiliatedHsr',
        defaultMessage: 'affiliated human skeletal remains (HSR)',
      },
      unaffiliatedCuiHsr: {
        id: 'option.nagpraApplicabilityCategories.unaffiliatedCuiHsr',
        defaultMessage: 'unaffiliated human skeletal remains (HSR) (=CUI)',
      },
      afo: {
        id: 'option.nagpraApplicabilityCategories.afo',
        defaultMessage: 'associated funerary object (AFO)',
      },
      ufo: {
        id: 'option.nagpraApplicabilityCategories.ufo',
        defaultMessage: 'unassociated funerary object (UFO)',
      },
      sacredObject: {
        id: 'option.nagpraApplicabilityCategories.sacredObject',
        defaultMessage: 'sacred object',
      },
      objectOfCulturalPatrimony: {
        id: 'option.nagpraApplicabilityCategories.objectOfCulturalPatrimony',
        defaultMessage: 'object of cultural patrimony',
      },
      subjectToNAGPRA: {
        id: 'option.nagpraApplicabilityCategories.subjectToNAGPRA',
        defaultMessage: 'subject to NAGPRA (unspec.)',
      },
      needsFurtherResearch: {
        id: 'option.nagpraApplicabilityCategories.needsFurtherResearch',
        defaultMessage: 'needs further research',
      },
    }),
  },
  accessRestrictionTypes: {
    values: [
      'displayVisualRestriction',
      'handlingGenderRestriction',
      'handlingOtherRestriction',
      'lendingRestriction',
      'publicationRestriction',
      'researchAccessRestriction',
      'storageRestriction',
      'treatmentRestriction',
      'unknown',
    ],
    messages: defineMessages({
      displayVisualRestriction: {
        id: 'option.accessRestrictionTypes.displayVisualRestriction',
        defaultMessage: 'display/visual',
      },
      handlingGenderRestriction: {
        id: 'option.accessRestrictionTypes.handlingGenderRestriction',
        defaultMessage: 'handling: gender',
      },
      handlingOtherRestriction: {
        id: 'option.accessRestrictionTypes.handlingOtherRestriction',
        defaultMessage: 'handling: other',
      },
      lendingRestriction: {
        id: 'option.accessRestrictionTypes.lendingRestriction',
        defaultMessage: 'lending',
      },
      publicationRestriction: {
        id: 'option.accessRestrictionTypes.publicationRestriction',
        defaultMessage: 'publication',
      },
      researchAccessRestriction: {
        id: 'option.accessRestrictionTypes.researchAccessRestriction',
        defaultMessage: 'research/access',
      },
      storageRestriction: {
        id: 'option.accessRestrictionTypes.storageRestriction',
        defaultMessage: 'storage',
      },
      treatmentRestriction: {
        id: 'option.accessRestrictionTypes.treatmentRestriction',
        defaultMessage: 'treatment',
      },
    }),
  },
  accessRestrictionLevels: {
    values: [
      'preference',
      'recommendation',
      'restriction',
      'unknown',
    ],
  },
  pahmaProdTechniqueTypes: {
    values: [
      'automated',
      'handCrafted',
    ],
    messages: defineMessages({
      handCrafted: {
        id: 'option.pahmaProdTechniqueTypes.handCrafted',
        defaultMessage: 'hand-crafted',
      },
    }),
  },
  pahmaTechnicalAttributes: {
    values: [
      'recordSpeed',
    ],
    messages: defineMessages({
      recordSpeed: {
        id: 'option.pahmanTechnicalAttributes.recordSpeed',
        defaultMessage: 'recording speed',
      },
    }),
  },
  objectParentTypes: {
    values: [
      'component',
      'set',
      'derivative',
      'separable-part',
      'non-separable-part',
      'recto',
      'verso',
    ],
    messages: defineMessages({
      component: {
        id: 'option.objectParentTypes.component',
        defaultMessage: 'main record',
      },
    }),
  },
  objectChildTypes: {
    values: [
      'component',
      'set',
      'derivative',
      'separable-part',
      'non-separable-part',
      'recto',
      'verso',
    ],
    messages: defineMessages({
      component: {
        id: 'option.objectChildTypes.component',
        defaultMessage: 'component',
      },
    }),
  },
};
