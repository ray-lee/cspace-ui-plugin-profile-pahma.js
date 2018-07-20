import { defineMessages } from 'react-intl';

/**
 * This plugin provides option lists that are shared by multiple record types. Option lists that
 * are used by only one record type are defined in the plugin for that record type.
 */
export default () => ({
  optionLists: {
    dateQualifiers: {
      values: [
        'none',
        'plusMinus',
        'plus',
        'minus',
      ],
      messages: defineMessages({
        none: {
          id: 'option.dateQualifiers.none',
          // react-intl requires a non-blank message, so use a zero-width space.
          defaultMessage: '\u200B',
        },
        plusMinus: {
          id: 'option.dateQualifiers.plusMinus',
          defaultMessage: '±',
        },
        plus: {
          id: 'option.dateQualifiers.plus',
          defaultMessage: '+',
        },
        minus: {
          id: 'option.dateQualifiers.minus',
          defaultMessage: '-',
        },
      }),
    },
    dateera: {
      values: [
        'none',
        'ce',
        'bce',
        'bp',
      ],
      messages: defineMessages({
        none: {
          id: 'option.dateera.none',
          // react-intl requires a non-blank message, so use a zero-width space.
          defaultMessage: '\u200B',
        },
        ce: {
          id: 'option.dateera.ce',
          defaultMessage: 'AD/CE',
        },
        bce: {
          id: 'option.dateera.bce',
          defaultMessage: 'BC/BCE',
        },
        bp: {
          id: 'option.dateera.bp',
          defaultMessage: 'BP',
        },
      }),
    },
    datecertainty: {
      values: [
        'none',
        'circa',
        'exactly',
        'atLeast',
        'lessThan',
      ],
      messages: defineMessages({
        none: {
          id: 'option.datecertainty.none',
          // react-intl requires a non-blank message, so use a zero-width space.
          defaultMessage: '\u200B',
        },
        circa: {
          id: 'option.datecertainty.circa',
          defaultMessage: 'circa',
        },
        exactly: {
          id: 'option.datecertainty.exactly',
          defaultMessage: 'exactly',
        },
        atLeast: {
          id: 'option.datecertainty.atLeast',
          defaultMessage: 'at least',
        },
        lessThan: {
          id: 'option.datecertainty.lessThan',
          defaultMessage: 'less than',
        },
      }),
    },
    datequalifier: {
      values: [
        '',
        'years',
        'month',
        'days',
      ],
      messages: defineMessages({
        years: {
          id: 'option.datequalifier.years',
          defaultMessage: 'year(s)',
        },
        month: {
          id: 'option.datequalifier.month',
          defaultMessage: 'month(s)',
        },
        days: {
          id: 'option.datequalifier.days',
          defaultMessage: 'day(s)',
        },
      }),
    },
    pahmaInventoryNames: {
      values: [
        'notOnAnInventory',
        'akAlaska',
        'akAlaskaNative',
        'akChugach',
        'azApacheCounty',
        'azCochiti',
        'azCoconinoCounty',
        'azHopi',
        'azNavajo',
        'azNavajoCounty1',
        'azNavajoCounty2',
        'azPimaQuechan',
        'azWestArizona',
        'caUsa1',
        'caUsa2',
        'caUsa3',
        'caAlamedaCounty1',
        'caAlamedaCounty2',
        'caAlamedaCounty3',
        'caAlamedaCounty4',
        'caAla309',
        'caAmadorCounty',
        'caButteCounty',
        'caCahuilla2',
        'caCahuillaCupenoDiegueno',
        'caCalaverasCounty',
        'caChumash',
        'caChumash2',
        'caColusaCounty1',
        'caColusaCounty2',
        'caContraCostaCounty1',
        'caContraCostaCounty2',
        'caContraCostaCounty3',
        'caContraCostaCounty4',
        'caContraCostaCounty5',
        'caContraCostaCounty6',
        'caCco138',
        'caCco141',
        'caCupeno',
        'caDelNorteCounty',
        'caElDoradoCounty',
        'caFoothillYokutsMonache1',
        'caFoothillYokutsMonache2',
        'caFresnoCounty1',
        'caFresnoCounty2',
        'caFresnoCounty3',
        'caGlennCounty',
        'caHumboldtCounty1',
        'caHumboldtCounty2',
        'caHumboldtCounty3',
        'caInyoCounty1',
        'caInyoCounty2',
        'caKarok',
        'caKer',
        'caKernCounty1',
        'caKernCounty2',
        'caKernCounty3',
        'caKingsCounty',
        'caKonkow',
        'caLakeCounty',
        'caLassenCounty1',
        'caLassenCounty2',
        'caLassenCounty3',
        'caLosAngelesCounty1',
        'caLosAngelesCounty2',
        'caMaderaCounty1',
        'caMaderaCounty2',
        'caMarinCounty1',
        'caMarinCounty2',
        'caMariposaCounty',
        'caMendocino',
        'caMercedCounty',
        'caModocCounty1',
        'caModocCounty2',
        'caMonoCounty',
        'caMontereyCountyOh1',
        'caMontereyCountyOh2',
        'caMontereyCounty1',
        'caMontereyCounty2',
        'caMontereyCounty3',
        'caNapaCounty1',
        'caNapaCounty2',
        'caNapaCounty3',
        'caOrangeCounty',
        'caPatwin1',
        'caPatwin2',
        'caPitRiver',
        'caPlacerCounty',
        'caPlumasCounty',
        'caPomo1',
        'caPomo2',
        'caPomo3',
        'caSac160',
        'caSacramentoCounty1',
        'caSacramentoCounty2',
        'caSacramentoCounty3',
        'caSacramentoCounty4',
        'caSac16revised',
        'caSanBenitoCounty',
        'caSanClementeIsland',
        'caSanDiego',
        'caSanFranciscoOh1',
        'caSanFranciscoOh2',
        'caSanFranciscoCounty1',
        'caSanJoaquinCounty1',
        'caSanJoaquinCounty2',
        'caSanJoaquinCounty5',
        'caSanLuisObispoCounty1',
        'caSanLuisObispoCounty2',
        'caSanMateoCo',
        'caSanMateoCounty1',
        'caSanNicolasIsland',
        'caSanPasqual',
        'caSantaCatalinaIsland1',
        'caSantaCatalinaIsland2',
        'caSantaClaraCountyOh1',
        'caSantaClaraCountyOh2',
        'caSantaClaraCounty1',
        'caSantaClaraCounty2',
        'caSantaCruzCountyOh1',
        'caSantaCruzCounty1',
        'caSantaCruzCounty2',
        'caShastaCounty1',
        'caShastaCounty2',
        'caShastaCounty3',
        'caSierraMiwok',
        'caSis262',
        'caSiskiyouCounty1',
        'caSiskiyouCounty2',
        'caSolanoCounty1',
        'caSolanoCounty2',
        'caSolanoCounty3',
        'caSonomaCounty',
        'caSouthernValleyYokuts',
        'caStanislausCounty1',
        'caStanislausCounty2',
        'caSutterCounty1',
        'caSutterCounty2',
        'caTehamaCounty1',
        'caTehamaCounty2',
        'caTeh58',
        'caTrinityCounty1',
        'caTrinityCounty2',
        'caTulareCounty1',
        'caTulareCounty2',
        'caTulareCounty3',
        'caTulareCounty4',
        'caTulareCounty5',
        'caWesternShoshone',
        'caWintun',
        'caWiyot',
        'caYana',
        'caYol13',
        'caYoloCounty1',
        'caYoloCounty2',
        'caYoloCounty3',
        'caYubaCounty',
        'caYub5',
        'caYuki',
        'caYurok',
        'coMontezumaCounty',
        'idLemhiCounty',
        'ilMadisonCounty',
        'inIndiana',
        'lamarHistoric',
        'miMichigan',
        'ndMandan',
        'njNewJersey',
        'nmMckinleyCounty',
        'nvChurchillCounty',
        'nvClarkCounty1',
        'nvClarkCounty2',
        'nvHumboldtCounty',
        'nvNevada',
        'nvNorthernPaiute',
        'nvPershingCounty',
        'nvSouthernPaiute',
        'nvWashoe',
        'nvWashoeCounty1',
        'nvWashoeCounty2',
        'nyNewYork',
        'orCalapooya',
        'orChetco',
        'orJacksonCounty',
        'orKlamath',
        'orKlamathCounty',
        'orMorrowCounty',
        'orWascoCounty',
        'sdBrownCounty',
        'tnMontgomeryCounty',
        'utBoxElderCounty',
        'utSanJuanCounty1',
        'utSanJuanCounty2',
        'waAsotinCounty',
        'waClallam',
        'waCowlitzCounty',
        'waKing',
        'waKlickitatCounty',
        'waKl24245kl242',
        'waMillersIsland',
        'waYakima',
        'nonNagpra1',
        'nonNagpra2',
        'nonNagpra3',
        'nonNagpra4',
        'nonNagpra5',
        'nonNagpra6',
        'nonNagpra7',
        'nonNagpra8',
        'nonNagpra9',
        'nonNagpra10',
        'nonNagpra11',
        'unknown',
      ],
      messages: defineMessages({
        notOnAnInventory: {
          id: 'option.nagpraInventoryNames.notOnAnInventory',
          defaultMessage: 'not on an inventory',
        },
        akAlaska: {
          id: 'option.nagpraInventoryNames.akAlaska',
          defaultMessage: 'AK-Alaska',
        },
        akAlaskaNative: {
          id: 'option.nagpraInventoryNames.akAlaskaNative',
          defaultMessage: 'AK-Alaska Native',
        },
        akChugach: {
          id: 'option.nagpraInventoryNames.akChugach',
          defaultMessage: 'AK-Chugach',
        },
        azApacheCounty: {
          id: 'option.nagpraInventoryNames.azApacheCounty',
          defaultMessage: 'AZ-Apache co.',
        },
        azCochiti: {
          id: 'option.nagpraInventoryNames.azCochiti',
          defaultMessage: 'AZ-Cochiti',
        },
        azCoconinoCounty: {
          id: 'option.nagpraInventoryNames.azCoconinoCounty',
          defaultMessage: 'AZ-Coconino co.',
        },
        azHopi: {
          id: 'option.nagpraInventoryNames.azHopi',
          defaultMessage: 'AZ-Hopi',
        },
        azNavajo: {
          id: 'option.nagpraInventoryNames.azNavajo',
          defaultMessage: 'AZ-Navajo',
        },
        azNavajoCounty1: {
          id: 'option.nagpraInventoryNames.azNavajoCounty1',
          defaultMessage: 'AZ-Navajo co. 1',
        },
        azNavajoCounty2: {
          id: 'option.nagpraInventoryNames.azNavajoCounty2',
          defaultMessage: 'AZ-Navajo co. 2',
        },
        azPimaQuechan: {
          id: 'option.nagpraInventoryNames.azPimaQuechan',
          defaultMessage: 'AZ-Pima, Quechan',
        },
        azWestArizona: {
          id: 'option.nagpraInventoryNames.azWestArizona',
          defaultMessage: 'AZ-West Arizona',
        },
        caUsa1: {
          id: 'option.nagpraInventoryNames.caUsa1',
          defaultMessage: 'CA/USA 1',
        },
        caUsa2: {
          id: 'option.nagpraInventoryNames.caUsa2',
          defaultMessage: 'CA/USA 2',
        },
        caUsa3: {
          id: 'option.nagpraInventoryNames.caUsa3',
          defaultMessage: 'CA/USA 3',
        },
        caAlamedaCounty1: {
          id: 'option.nagpraInventoryNames.caAlamedaCounty1',
          defaultMessage: 'CA-Alameda co. 1',
        },
        caAlamedaCounty2: {
          id: 'option.nagpraInventoryNames.caAlamedaCounty2',
          defaultMessage: 'CA-Alameda co. 2',
        },
        caAlamedaCounty3: {
          id: 'option.nagpraInventoryNames.caAlamedaCounty3',
          defaultMessage: 'CA-Alameda co. 3',
        },
        caAlamedaCounty4: {
          id: 'option.nagpraInventoryNames.caAlamedaCounty4',
          defaultMessage: 'CA-Alameda co. 4',
        },
        caAla309: {
          id: 'option.nagpraInventoryNames.caAla309',
          defaultMessage: 'CA-Ala-309',
        },
        caAmadorCounty: {
          id: 'option.nagpraInventoryNames.caAmadorCounty',
          defaultMessage: 'CA-Amador co.',
        },
        caButteCounty: {
          id: 'option.nagpraInventoryNames.caButteCounty',
          defaultMessage: 'CA-Butte co.',
        },
        caCahuilla2: {
          id: 'option.nagpraInventoryNames.caCahuilla2',
          defaultMessage: 'CA-Cahuilla 2',
        },
        caCahuillaCupenoDiegueno: {
          id: 'option.nagpraInventoryNames.caCahuillaCupenoDiegueno',
          defaultMessage: 'CA-Cahuilla, Cupeño, Diegueño',
        },
        caCalaverasCounty: {
          id: 'option.nagpraInventoryNames.caCalaverasCounty',
          defaultMessage: 'CA-Calaveras co.',
        },
        caChumash: {
          id: 'option.nagpraInventoryNames.caChumash',
          defaultMessage: 'CA-Chumash',
        },
        caChumash2: {
          id: 'option.nagpraInventoryNames.caChumash2',
          defaultMessage: 'CA-Chumash 2',
        },
        caColusaCounty1: {
          id: 'option.nagpraInventoryNames.caColusaCounty1',
          defaultMessage: 'CA-Colusa co. 1',
        },
        caColusaCounty2: {
          id: 'option.nagpraInventoryNames.caColusaCounty2',
          defaultMessage: 'CA-Colusa co. 2',
        },
        caContraCostaCounty1: {
          id: 'option.nagpraInventoryNames.caContraCostaCounty1',
          defaultMessage: 'CA-Contra Costa co. 1',
        },
        caContraCostaCounty2: {
          id: 'option.nagpraInventoryNames.caContraCostaCounty2',
          defaultMessage: 'CA-Contra Costa co. 2',
        },
        caContraCostaCounty3: {
          id: 'option.nagpraInventoryNames.caContraCostaCounty3',
          defaultMessage: 'CA-Contra Costa co. 3',
        },
        caContraCostaCounty4: {
          id: 'option.nagpraInventoryNames.caContraCostaCounty4',
          defaultMessage: 'CA-Contra Costa co. 4',
        },
        caContraCostaCounty5: {
          id: 'option.nagpraInventoryNames.caContraCostaCounty5',
          defaultMessage: 'CA-Contra Costa co. 5',
        },
        caContraCostaCounty6: {
          id: 'option.nagpraInventoryNames.caContraCostaCounty6',
          defaultMessage: 'CA-Contra Costa co. 6',
        },
        caCco138: {
          id: 'option.nagpraInventoryNames.caCco138',
          defaultMessage: 'CA-CCo-138',
        },
        caCco141: {
          id: 'option.nagpraInventoryNames.caCco141',
          defaultMessage: 'CA-CCo-141 (historic)',
        },
        caCupeno: {
          id: 'option.nagpraInventoryNames.caCupeno',
          defaultMessage: 'CA-Cupeño',
        },
        caDelNorteCounty: {
          id: 'option.nagpraInventoryNames.caDelNorteCounty',
          defaultMessage: 'CA-Del Norte co.',
        },
        caElDoradoCounty: {
          id: 'option.nagpraInventoryNames.caElDoradoCounty',
          defaultMessage: 'CA-El Dorado co.',
        },
        caFoothillYokutsMonache1: {
          id: 'option.nagpraInventoryNames.caFoothillYokutsMonache1',
          defaultMessage: 'CA-Foothill Yokuts/Monache 1',
        },
        caFoothillYokutsMonache2: {
          id: 'option.nagpraInventoryNames.caFoothillYokutsMonache2',
          defaultMessage: 'CA-Foothill Yokuts/Monache 2',
        },
        caFresnoCounty1: {
          id: 'option.nagpraInventoryNames.caFresnoCounty1',
          defaultMessage: 'CA-Fresno co. 1',
        },
        caFresnoCounty2: {
          id: 'option.nagpraInventoryNames.caFresnoCounty2',
          defaultMessage: 'CA-Fresno co. 2',
        },
        caFresnoCounty3: {
          id: 'option.nagpraInventoryNames.caFresnoCounty3',
          defaultMessage: 'CA-Fresno co. 3',
        },
        caGlennCounty: {
          id: 'option.nagpraInventoryNames.caGlennCounty',
          defaultMessage: 'CA-Glenn co.',
        },
        caHumboldtCounty1: {
          id: 'option.nagpraInventoryNames.caHumboldtCounty1',
          defaultMessage: 'CA-Humboldt co. 1',
        },
        caHumboldtCounty2: {
          id: 'option.nagpraInventoryNames.caHumboldtCounty2',
          defaultMessage: 'CA-Humboldt co. 2',
        },
        caHumboldtCounty3: {
          id: 'option.nagpraInventoryNames.caHumboldtCounty3',
          defaultMessage: 'CA-Humboldt co. 3',
        },
        caInyoCounty1: {
          id: 'option.nagpraInventoryNames.caInyoCounty1',
          defaultMessage: 'CA-Inyo co. 1',
        },
        caInyoCounty2: {
          id: 'option.nagpraInventoryNames.caInyoCounty2',
          defaultMessage: 'CA-Inyo co. 2',
        },
        caKarok: {
          id: 'option.nagpraInventoryNames.caKarok',
          defaultMessage: 'CA-Karok',
        },
        caKer: {
          id: 'option.nagpraInventoryNames.caKer',
          defaultMessage: 'CA-Ker-74 (historic)',
        },
        caKernCounty1: {
          id: 'option.nagpraInventoryNames.caKernCounty1',
          defaultMessage: 'CA-Kern co. 1',
        },
        caKernCounty2: {
          id: 'option.nagpraInventoryNames.caKernCounty2',
          defaultMessage: 'CA-Kern co. 2',
        },
        caKernCounty3: {
          id: 'option.nagpraInventoryNames.caKernCounty3',
          defaultMessage: 'CA-Kern co. 3',
        },
        caKingsCounty: {
          id: 'option.nagpraInventoryNames.caKingsCounty',
          defaultMessage: 'CA-Kings co.',
        },
        caKonkow: {
          id: 'option.nagpraInventoryNames.caKonkow',
          defaultMessage: 'CA-Konkow',
        },
        caLakeCounty: {
          id: 'option.nagpraInventoryNames.caLakeCounty',
          defaultMessage: 'CA-Lake co.',
        },
        caLassenCounty1: {
          id: 'option.nagpraInventoryNames.caLassenCounty1',
          defaultMessage: 'CA-Lassen co. 1',
        },
        caLassenCounty2: {
          id: 'option.nagpraInventoryNames.caLassenCounty2',
          defaultMessage: 'CA-Lassen co. 2',
        },
        caLassenCounty3: {
          id: 'option.nagpraInventoryNames.caLassenCounty3',
          defaultMessage: 'CA-Lassen co. 3',
        },
        caLosAngelesCounty1: {
          id: 'option.nagpraInventoryNames.caLosAngelesCounty1',
          defaultMessage: 'CA-Los Angeles co. 1',
        },
        caLosAngelesCounty2: {
          id: 'option.nagpraInventoryNames.caLosAngelesCounty2',
          defaultMessage: 'CA-Los Angeles co. 2',
        },
        caMaderaCounty1: {
          id: 'option.nagpraInventoryNames.caMaderaCounty1',
          defaultMessage: 'CA-Madera co. 1',
        },
        caMaderaCounty2: {
          id: 'option.nagpraInventoryNames.caMaderaCounty2',
          defaultMessage: 'CA-Madera co. 2',
        },
        caMarinCounty1: {
          id: 'option.nagpraInventoryNames.caMarinCounty1',
          defaultMessage: 'CA-Marin co. 1',
        },
        caMarinCounty2: {
          id: 'option.nagpraInventoryNames.caMarinCounty2',
          defaultMessage: 'CA-Marin co. 2',
        },
        caMariposaCounty: {
          id: 'option.nagpraInventoryNames.caMariposaCounty',
          defaultMessage: 'CA-Mariposa co.',
        },
        caMendocino: {
          id: 'option.nagpraInventoryNames.caMendocino',
          defaultMessage: 'CA-Mendocino',
        },
        caMercedCounty: {
          id: 'option.nagpraInventoryNames.caMercedCounty',
          defaultMessage: 'CA-Merced co.',
        },
        caModocCounty1: {
          id: 'option.nagpraInventoryNames.caModocCounty1',
          defaultMessage: 'CA-Modoc co. 1',
        },
        caModocCounty2: {
          id: 'option.nagpraInventoryNames.caModocCounty2',
          defaultMessage: 'CA-Modoc co. 2',
        },
        caMonoCounty: {
          id: 'option.nagpraInventoryNames.caMonoCounty',
          defaultMessage: 'CA-Mono co.',
        },
        caMontereyCountyOh1: {
          id: 'option.nagpraInventoryNames.caMontereyCountyOh1',
          defaultMessage: 'CA-Monterey co. (OH1)',
        },
        caMontereyCountyOh2: {
          id: 'option.nagpraInventoryNames.caMontereyCountyOh2',
          defaultMessage: 'CA-Monterey co. (OH2)',
        },
        caMontereyCounty1: {
          id: 'option.nagpraInventoryNames.caMontereyCounty1',
          defaultMessage: 'CA-Monterey co. 1',
        },
        caMontereyCounty2: {
          id: 'option.nagpraInventoryNames.caMontereyCounty2',
          defaultMessage: 'CA-Monterey co. 2',
        },
        caMontereyCounty3: {
          id: 'option.nagpraInventoryNames.caMontereyCounty3',
          defaultMessage: 'CA-Monterey co. 3',
        },
        caNapaCounty1: {
          id: 'option.nagpraInventoryNames.caNapaCounty1',
          defaultMessage: 'CA-Napa co. 1',
        },
        caNapaCounty2: {
          id: 'option.nagpraInventoryNames.caNapaCounty2',
          defaultMessage: 'CA-Napa co. 2',
        },
        caNapaCounty3: {
          id: 'option.nagpraInventoryNames.caNapaCounty3',
          defaultMessage: 'CA-Napa co. 3',
        },
        caOrangeCounty: {
          id: 'option.nagpraInventoryNames.caOrangeCounty',
          defaultMessage: 'CA-Orange co.',
        },
        caPatwin1: {
          id: 'option.nagpraInventoryNames.caPatwin1',
          defaultMessage: 'CA-Patwin 1 (historic)',
        },
        caPatwin2: {
          id: 'option.nagpraInventoryNames.caPatwin2',
          defaultMessage: 'CA-Patwin 2',
        },
        caPitRiver: {
          id: 'option.nagpraInventoryNames.caPitRiver',
          defaultMessage: 'CA-Pit River',
        },
        caPlacerCounty: {
          id: 'option.nagpraInventoryNames.caPlacerCounty',
          defaultMessage: 'CA-Placer co.',
        },
        caPlumasCounty: {
          id: 'option.nagpraInventoryNames.caPlumasCounty',
          defaultMessage: 'CA-Plumas co.',
        },
        caPomo1: {
          id: 'option.nagpraInventoryNames.caPomo1',
          defaultMessage: 'CA-Pomo 1',
        },
        caPomo2: {
          id: 'option.nagpraInventoryNames.caPomo2',
          defaultMessage: 'CA-Pomo 2',
        },
        caPomo3: {
          id: 'option.nagpraInventoryNames.caPomo3',
          defaultMessage: 'CA-Pomo 3',
        },
        caSac160: {
          id: 'option.nagpraInventoryNames.caSac160',
          defaultMessage: 'CA-Sac-160 (historic)',
        },
        caSacramentoCounty1: {
          id: 'option.nagpraInventoryNames.caSacramentoCounty1',
          defaultMessage: 'CA-Sacramento co. 1',
        },
        caSacramentoCounty2: {
          id: 'option.nagpraInventoryNames.caSacramentoCounty2',
          defaultMessage: 'CA-Sacramento co. 2',
        },
        caSacramentoCounty3: {
          id: 'option.nagpraInventoryNames.caSacramentoCounty3',
          defaultMessage: 'CA-Sacramento co. 3',
        },
        caSacramentoCounty4: {
          id: 'option.nagpraInventoryNames.caSacramentoCounty4',
          defaultMessage: 'CA-Sacramento co. 4',
        },
        caSac16revised: {
          id: 'option.nagpraInventoryNames.caSac16revised',
          defaultMessage: 'CA-Sac-16 (revised to affiliated)',
        },
        caSanBenitoCounty: {
          id: 'option.nagpraInventoryNames.caSanBenitoCounty',
          defaultMessage: 'CA-San Benito co.',
        },
        caSanClementeIsland: {
          id: 'option.nagpraInventoryNames.caSanClementeIsland',
          defaultMessage: 'CA-San Clemente Island',
        },
        caSanDiego: {
          id: 'option.nagpraInventoryNames.caSanDiego',
          defaultMessage: 'CA-San Diego',
        },
        caSanFranciscoOh1: {
          id: 'option.nagpraInventoryNames.caSanFranciscoOh1',
          defaultMessage: 'CA-San Francisco (OH1)',
        },
        caSanFranciscoOh2: {
          id: 'option.nagpraInventoryNames.caSanFranciscoOh2',
          defaultMessage: 'CA-San Francisco (OH2)',
        },
        caSanFranciscoCounty1: {
          id: 'option.nagpraInventoryNames.caSanFranciscoCounty1',
          defaultMessage: 'CA-San Francisco co. 1',
        },
        caSanJoaquinCounty1: {
          id: 'option.nagpraInventoryNames.caSanJoaquinCounty1',
          defaultMessage: 'CA-San Joaquin co. 1',
        },
        caSanJoaquinCounty2: {
          id: 'option.nagpraInventoryNames.caSanJoaquinCounty2',
          defaultMessage: 'CA-San Joaquin co. 2',
        },
        caSanJoaquinCounty5: {
          id: 'option.nagpraInventoryNames.caSanJoaquinCounty5',
          defaultMessage: 'CA-San Joaquin co. 5',
        },
        caSanLuisObispoCounty1: {
          id: 'option.nagpraInventoryNames.caSanLuisObispoCounty1',
          defaultMessage: 'CA-San Luis Obispo co. 1',
        },
        caSanLuisObispoCounty2: {
          id: 'option.nagpraInventoryNames.caSanLuisObispoCounty2',
          defaultMessage: 'CA-San Luis Obispo co. 2',
        },
        caSanMateoCo: {
          id: 'option.nagpraInventoryNames.caSanMateoCo',
          defaultMessage: 'CA-San Mateo co. (OH1)',
        },
        caSanMateoCounty1: {
          id: 'option.nagpraInventoryNames.caSanMateoCounty1',
          defaultMessage: 'CA-San Mateo co. 1',
        },
        caSanNicolasIsland: {
          id: 'option.nagpraInventoryNames.caSanNicolasIsland',
          defaultMessage: 'CA-San Nicolas Island',
        },
        caSanPasqual: {
          id: 'option.nagpraInventoryNames.caSanPasqual',
          defaultMessage: 'CA-San Pasqual',
        },
        caSantaCatalinaIsland1: {
          id: 'option.nagpraInventoryNames.caSantaCatalinaIsland1',
          defaultMessage: 'CA-Santa Catalina Island 1',
        },
        caSantaCatalinaIsland2: {
          id: 'option.nagpraInventoryNames.caSantaCatalinaIsland2',
          defaultMessage: 'CA-Santa Catalina Island 2',
        },
        caSantaClaraCountyOh1: {
          id: 'option.nagpraInventoryNames.caSantaClaraCountyOh1',
          defaultMessage: 'CA-Santa Clara co. (OH1)',
        },
        caSantaClaraCountyOh2: {
          id: 'option.nagpraInventoryNames.caSantaClaraCountyOh2',
          defaultMessage: 'CA-Santa Clara co. (OH2)',
        },
        caSantaClaraCounty1: {
          id: 'option.nagpraInventoryNames.caSantaClaraCounty1',
          defaultMessage: 'CA-Santa Clara co. 1',
        },
        caSantaClaraCounty2: {
          id: 'option.nagpraInventoryNames.caSantaClaraCounty2',
          defaultMessage: 'CA-Santa Clara co. 2',
        },
        caSantaCruzCountyOh1: {
          id: 'option.nagpraInventoryNames.caSantaCruzCountyOh1',
          defaultMessage: 'CA-Santa Cruz co. (OH1)',
        },
        caSantaCruzCounty1: {
          id: 'option.nagpraInventoryNames.caSantaCruzCounty1',
          defaultMessage: 'CA-Santa Cruz co. 1',
        },
        caSantaCruzCounty2: {
          id: 'option.nagpraInventoryNames.caSantaCruzCounty2',
          defaultMessage: 'CA-Santa Cruz co. 2',
        },
        caShastaCounty1: {
          id: 'option.nagpraInventoryNames.caShastaCounty1',
          defaultMessage: 'CA-Shasta co. 1',
        },
        caShastaCounty2: {
          id: 'option.nagpraInventoryNames.caShastaCounty2',
          defaultMessage: 'CA-Shasta co. 2',
        },
        caShastaCounty3: {
          id: 'option.nagpraInventoryNames.caShastaCounty3',
          defaultMessage: 'CA-Shasta co. 3',
        },
        caSierraMiwok: {
          id: 'option.nagpraInventoryNames.caSierraMiwok',
          defaultMessage: 'CA-Sierra Miwok',
        },
        caSis262: {
          id: 'option.nagpraInventoryNames.caSis262',
          defaultMessage: 'CA-Sis-262 (historic)',
        },
        caSiskiyouCounty1: {
          id: 'option.nagpraInventoryNames.caSiskiyouCounty1',
          defaultMessage: 'CA-Siskiyou co. 1',
        },
        caSiskiyouCounty2: {
          id: 'option.nagpraInventoryNames.caSiskiyouCounty2',
          defaultMessage: 'CA-Siskiyou co. 2',
        },
        caSolanoCounty1: {
          id: 'option.nagpraInventoryNames.caSolanoCounty1',
          defaultMessage: 'CA-Solano co. 1',
        },
        caSolanoCounty2: {
          id: 'option.nagpraInventoryNames.caSolanoCounty2',
          defaultMessage: 'CA-Solano co. 2',
        },
        caSolanoCounty3: {
          id: 'option.nagpraInventoryNames.caSolanoCounty3',
          defaultMessage: 'CA-Solano co. 3',
        },
        caSonomaCounty: {
          id: 'option.nagpraInventoryNames.caSonomaCounty',
          defaultMessage: 'CA-Sonoma co.',
        },
        caSouthernValleyYokuts: {
          id: 'option.nagpraInventoryNames.caSouthernValleyYokuts',
          defaultMessage: 'CA-Southern Valley Yokuts',
        },
        caStanislausCounty1: {
          id: 'option.nagpraInventoryNames.caStanislausCounty1',
          defaultMessage: 'CA-Stanislaus co. 1',
        },
        caStanislausCounty2: {
          id: 'option.nagpraInventoryNames.caStanislausCounty2',
          defaultMessage: 'CA-Stanislaus co. 2',
        },
        caSutterCounty1: {
          id: 'option.nagpraInventoryNames.caSutterCounty1',
          defaultMessage: 'CA-Sutter co. 1',
        },
        caSutterCounty2: {
          id: 'option.nagpraInventoryNames.caSutterCounty2',
          defaultMessage: 'CA-Sutter co. 2',
        },
        caTehamaCounty1: {
          id: 'option.nagpraInventoryNames.caTehamaCounty1',
          defaultMessage: 'CA-Tehama co. 1',
        },
        caTehamaCounty2: {
          id: 'option.nagpraInventoryNames.caTehamaCounty2',
          defaultMessage: 'CA-Tehama co. 2',
        },
        caTeh58: {
          id: 'option.nagpraInventoryNames.caTeh58',
          defaultMessage: 'CA-Teh-58 (historic)',
        },
        caTrinityCounty1: {
          id: 'option.nagpraInventoryNames.caTrinityCounty1',
          defaultMessage: 'CA-Trinity co. 1',
        },
        caTrinityCounty2: {
          id: 'option.nagpraInventoryNames.caTrinityCounty2',
          defaultMessage: 'CA-Trinity co. 2',
        },
        caTulareCounty1: {
          id: 'option.nagpraInventoryNames.caTulareCounty1',
          defaultMessage: 'CA-Tulare co. 1',
        },
        caTulareCounty2: {
          id: 'option.nagpraInventoryNames.caTulareCounty2',
          defaultMessage: 'CA-Tulare co. 2',
        },
        caTulareCounty3: {
          id: 'option.nagpraInventoryNames.caTulareCounty3',
          defaultMessage: 'CA-Tulare co. 3',
        },
        caTulareCounty4: {
          id: 'option.nagpraInventoryNames.caTulareCounty4',
          defaultMessage: 'CA-Tulare co. 4',
        },
        caTulareCounty5: {
          id: 'option.nagpraInventoryNames.caTulareCounty5',
          defaultMessage: 'CA-Tulare co. 5',
        },
        caWesternShoshone: {
          id: 'option.nagpraInventoryNames.caWesternShoshone',
          defaultMessage: 'CA-Western Shoshone',
        },
        caWintun: {
          id: 'option.nagpraInventoryNames.caWintun',
          defaultMessage: 'CA-Wintun',
        },
        caWiyot: {
          id: 'option.nagpraInventoryNames.caWiyot',
          defaultMessage: 'CA-Wiyot',
        },
        caYana: {
          id: 'option.nagpraInventoryNames.caYana',
          defaultMessage: 'CA-Yana',
        },
        caYol13: {
          id: 'option.nagpraInventoryNames.caYol13',
          defaultMessage: 'CA-Yol-13 (historic)',
        },
        caYoloCounty1: {
          id: 'option.nagpraInventoryNames.caYoloCounty1',
          defaultMessage: 'CA-Yolo co. 1',
        },
        caYoloCounty2: {
          id: 'option.nagpraInventoryNames.caYoloCounty2',
          defaultMessage: 'CA-Yolo co. 2',
        },
        caYoloCounty3: {
          id: 'option.nagpraInventoryNames.caYoloCounty3',
          defaultMessage: 'CA-Yolo co. 3',
        },
        caYubaCounty: {
          id: 'option.nagpraInventoryNames.caYubaCounty',
          defaultMessage: 'CA-Yuba co.',
        },
        caYub5: {
          id: 'option.nagpraInventoryNames.caYub5',
          defaultMessage: 'CA-Yub-5 (historic)',
        },
        caYuki: {
          id: 'option.nagpraInventoryNames.caYuki',
          defaultMessage: 'CA-Yuki',
        },
        caYurok: {
          id: 'option.nagpraInventoryNames.caYurok',
          defaultMessage: 'CA-Yurok',
        },
        coMontezumaCounty: {
          id: 'option.nagpraInventoryNames.coMontezumaCounty',
          defaultMessage: 'CO-Montezuma co.',
        },
        idLemhiCounty: {
          id: 'option.nagpraInventoryNames.idLemhiCounty',
          defaultMessage: 'ID-Lemhi co.',
        },
        ilMadisonCounty: {
          id: 'option.nagpraInventoryNames.ilMadisonCounty',
          defaultMessage: 'IL-Madison co.',
        },
        inIndiana: {
          id: 'option.nagpraInventoryNames.inIndiana',
          defaultMessage: 'IN-Indiana',
        },
        lamarHistoric: {
          id: 'option.nagpraInventoryNames.lamarHistoric',
          defaultMessage: 'Lamar (historic)',
        },
        miMichigan: {
          id: 'option.nagpraInventoryNames.miMichigan',
          defaultMessage: 'MI-Michigan',
        },
        ndMandan: {
          id: 'option.nagpraInventoryNames.ndMandan',
          defaultMessage: 'ND-Mandan',
        },
        njNewJersey: {
          id: 'option.nagpraInventoryNames.njNewJersey',
          defaultMessage: 'NJ-New Jersey',
        },
        nmMckinleyCounty: {
          id: 'option.nagpraInventoryNames.nmMckinleyCounty',
          defaultMessage: 'NM-McKinley co.',
        },
        nvChurchillCounty: {
          id: 'option.nagpraInventoryNames.nvChurchillCounty',
          defaultMessage: 'NV-Churchill co.',
        },
        nvClarkCounty1: {
          id: 'option.nagpraInventoryNames.nvClarkCounty1',
          defaultMessage: 'NV-Clark co. 1',
        },
        nvClarkCounty2: {
          id: 'option.nagpraInventoryNames.nvClarkCounty2',
          defaultMessage: 'NV-Clark co. 2',
        },
        nvHumboldtCounty: {
          id: 'option.nagpraInventoryNames.nvHumboldtCounty',
          defaultMessage: 'NV-Humboldt co.',
        },
        nvNevada: {
          id: 'option.nagpraInventoryNames.nvNevada',
          defaultMessage: 'NV-Nevada',
        },
        nvNorthernPaiute: {
          id: 'option.nagpraInventoryNames.nvNorthernPaiute',
          defaultMessage: 'NV-Northern Paiute',
        },
        nvPershingCounty: {
          id: 'option.nagpraInventoryNames.nvPershingCounty',
          defaultMessage: 'NV-Pershing co.',
        },
        nvSouthernPaiute: {
          id: 'option.nagpraInventoryNames.nvSouthernPaiute',
          defaultMessage: 'NV-Southern Paiute',
        },
        nvWashoe: {
          id: 'option.nagpraInventoryNames.nvWashoe',
          defaultMessage: 'NV-Washoe',
        },
        nvWashoeCounty1: {
          id: 'option.nagpraInventoryNames.nvWashoeCounty1',
          defaultMessage: 'NV-Washoe co. 1',
        },
        nvWashoeCounty2: {
          id: 'option.nagpraInventoryNames.nvWashoeCounty2',
          defaultMessage: 'NV-Washoe co. 2',
        },
        nyNewYork: {
          id: 'option.nagpraInventoryNames.nyNewYork',
          defaultMessage: 'NY-New York',
        },
        orCalapooya: {
          id: 'option.nagpraInventoryNames.orCalapooya',
          defaultMessage: 'OR-Calapooya',
        },
        orChetco: {
          id: 'option.nagpraInventoryNames.orChetco',
          defaultMessage: 'OR-Chetco',
        },
        orJacksonCounty: {
          id: 'option.nagpraInventoryNames.orJacksonCounty',
          defaultMessage: 'OR-Jackson co.',
        },
        orKlamath: {
          id: 'option.nagpraInventoryNames.orKlamath',
          defaultMessage: 'OR-Klamath',
        },
        orKlamathCounty: {
          id: 'option.nagpraInventoryNames.orKlamathCounty',
          defaultMessage: 'OR-Klamath co.',
        },
        orMorrowCounty: {
          id: 'option.nagpraInventoryNames.orMorrowCounty',
          defaultMessage: 'OR-Morrow co.',
        },
        orWascoCounty: {
          id: 'option.nagpraInventoryNames.orWascoCounty',
          defaultMessage: 'OR-Wasco co.',
        },
        sdBrownCounty: {
          id: 'option.nagpraInventoryNames.sdBrownCounty',
          defaultMessage: 'SD-Brown co.',
        },
        tnMontgomeryCounty: {
          id: 'option.nagpraInventoryNames.tnMontgomeryCounty',
          defaultMessage: 'TN-Montgomery co.',
        },
        utBoxElderCounty: {
          id: 'option.nagpraInventoryNames.utBoxElderCounty',
          defaultMessage: 'UT-Box Elder co.',
        },
        utSanJuanCounty1: {
          id: 'option.nagpraInventoryNames.utSanJuanCounty1',
          defaultMessage: 'UT-San Juan co. 1',
        },
        utSanJuanCounty2: {
          id: 'option.nagpraInventoryNames.utSanJuanCounty2',
          defaultMessage: 'UT-San Juan co. 2',
        },
        waAsotinCounty: {
          id: 'option.nagpraInventoryNames.waAsotinCounty',
          defaultMessage: 'WA-Asotin co.',
        },
        waClallam: {
          id: 'option.nagpraInventoryNames.waClallam',
          defaultMessage: 'WA-Clallam',
        },
        waCowlitzCounty: {
          id: 'option.nagpraInventoryNames.waCowlitzCounty',
          defaultMessage: 'WA-Cowlitz co.',
        },
        waKing: {
          id: 'option.nagpraInventoryNames.waKing',
          defaultMessage: 'WA-King',
        },
        waKlickitatCounty: {
          id: 'option.nagpraInventoryNames.waKlickitatCounty',
          defaultMessage: 'WA-Klickitat co.',
        },
        waKl24245kl242: {
          id: 'option.nagpraInventoryNames.waKl24245kl242',
          defaultMessage: 'WA-KL-242 (45KL242) (historic)',
        },
        waMillersIsland: {
          id: 'option.nagpraInventoryNames.waMillersIsland',
          defaultMessage: 'WA-Millers Island (historic)',
        },
        waYakima: {
          id: 'option.nagpraInventoryNames.waYakima',
          defaultMessage: 'WA-Yakima',
        },
        nonNagpra1: {
          id: 'option.nagpraInventoryNames.nonNagpra1',
          defaultMessage: 'non-NAGPRA 1',
        },
        nonNagpra2: {
          id: 'option.nagpraInventoryNames.nonNagpra2',
          defaultMessage: 'non-NAGPRA 2',
        },
        nonNagpra3: {
          id: 'option.nagpraInventoryNames.nonNagpra3',
          defaultMessage: 'non-NAGPRA 3',
        },
        nonNagpra4: {
          id: 'option.nagpraInventoryNames.nonNagpra4',
          defaultMessage: 'non-NAGPRA 4',
        },
        nonNagpra5: {
          id: 'option.nagpraInventoryNames.nonNagpra5',
          defaultMessage: 'non-NAGPRA 5',
        },
        nonNagpra6: {
          id: 'option.nagpraInventoryNames.nonNagpra6',
          defaultMessage: 'non-NAGPRA 6',
        },
        nonNagpra7: {
          id: 'option.nagpraInventoryNames.nonNagpra7',
          defaultMessage: 'non-NAGPRA 7',
        },
        nonNagpra8: {
          id: 'option.nagpraInventoryNames.nonNagpra8',
          defaultMessage: 'non-NAGPRA 8',
        },
        nonNagpra9: {
          id: 'option.nagpraInventoryNames.nonNagpra9',
          defaultMessage: 'non-NAGPRA 9',
        },
        nonNagpra10: {
          id: 'option.nagpraInventoryNames.nonNagpra10',
          defaultMessage: 'non-NAGPRA 10',
        },
        nonNagpra11: {
          id: 'option.nagpraInventoryNames.nonNagpra11',
          defaultMessage: 'non-NAGPRA 11',
        },
      }),
    },
  },
});
