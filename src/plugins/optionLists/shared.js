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
        'caKer-74',
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
          id: 'option.pahmaInventoryNames.notOnAnInventory',
          defaultMessage: 'not on an inventory',
        },
        akAlaska: {
          id: 'option.pahmaInventoryNames.akAlaska',
          defaultMessage: 'AK-Alaska',
        },
        akAlaskaNative: {
          id: 'option.pahmaInventoryNames.akAlaskaNative',
          defaultMessage: 'AK-Alaska Native',
        },
        akChugach: {
          id: 'option.pahmaInventoryNames.akChugach',
          defaultMessage: 'AK-Chugach',
        },
        azApacheCounty: {
          id: 'option.pahmaInventoryNames.azApacheCounty',
          defaultMessage: 'AZ-Apache Co.',
        },
        azCochiti: {
          id: 'option.pahmaInventoryNames.azCochiti',
          defaultMessage: 'AZ-Cochiti',
        },
        azCoconinoCounty: {
          id: 'option.pahmaInventoryNames.azCoconinoCounty',
          defaultMessage: 'AZ-Coconino Co.',
        },
        azHopi: {
          id: 'option.pahmaInventoryNames.azHopi',
          defaultMessage: 'AZ-Hopi',
        },
        azNavajo: {
          id: 'option.pahmaInventoryNames.azNavajo',
          defaultMessage: 'AZ-Navajo',
        },
        azNavajoCounty1: {
          id: 'option.pahmaInventoryNames.azNavajoCounty1',
          defaultMessage: 'AZ-Navajo Co. 1',
        },
        azNavajoCounty2: {
          id: 'option.pahmaInventoryNames.azNavajoCounty2',
          defaultMessage: 'AZ-Navajo Co. 2',
        },
        azPimaQuechan: {
          id: 'option.pahmaInventoryNames.azPimaQuechan',
          defaultMessage: 'AZ-Pima, Quechan',
        },
        azWestArizona: {
          id: 'option.pahmaInventoryNames.azWestArizona',
          defaultMessage: 'AZ-West Arizona',
        },
        caUsa1: {
          id: 'option.pahmaInventoryNames.caUsa1',
          defaultMessage: 'CA/USA 1',
        },
        caUsa2: {
          id: 'option.pahmaInventoryNames.caUsa2',
          defaultMessage: 'CA/USA 2',
        },
        caUsa3: {
          id: 'option.pahmaInventoryNames.caUsa3',
          defaultMessage: 'CA/USA 3',
        },
        caAlamedaCounty1: {
          id: 'option.pahmaInventoryNames.caAlamedaCounty1',
          defaultMessage: 'CA-Alameda Co. 1',
        },
        caAlamedaCounty2: {
          id: 'option.pahmaInventoryNames.caAlamedaCounty2',
          defaultMessage: 'CA-Alameda Co. 2',
        },
        caAlamedaCounty3: {
          id: 'option.pahmaInventoryNames.caAlamedaCounty3',
          defaultMessage: 'CA-Alameda Co. 3',
        },
        caAlamedaCounty4: {
          id: 'option.pahmaInventoryNames.caAlamedaCounty4',
          defaultMessage: 'CA-Alameda Co. 4',
        },
        caAla309: {
          id: 'option.pahmaInventoryNames.caAla309',
          defaultMessage: 'CA-Ala-309',
        },
        caAmadorCounty: {
          id: 'option.pahmaInventoryNames.caAmadorCounty',
          defaultMessage: 'CA-Amador Co.',
        },
        caButteCounty: {
          id: 'option.pahmaInventoryNames.caButteCounty',
          defaultMessage: 'CA-Butte Co.',
        },
        caCahuilla2: {
          id: 'option.pahmaInventoryNames.caCahuilla2',
          defaultMessage: 'CA-Cahuilla 2',
        },
        caCahuillaCupenoDiegueno: {
          id: 'option.pahmaInventoryNames.caCahuillaCupenoDiegueno',
          defaultMessage: 'CA-Cahuilla, Cupeño, Diegueño',
        },
        caCalaverasCounty: {
          id: 'option.pahmaInventoryNames.caCalaverasCounty',
          defaultMessage: 'CA-Calaveras Co.',
        },
        caChumash: {
          id: 'option.pahmaInventoryNames.caChumash',
          defaultMessage: 'CA-Chumash',
        },
        caChumash2: {
          id: 'option.pahmaInventoryNames.caChumash2',
          defaultMessage: 'CA-Chumash 2',
        },
        caColusaCounty1: {
          id: 'option.pahmaInventoryNames.caColusaCounty1',
          defaultMessage: 'CA-Colusa Co. 1',
        },
        caColusaCounty2: {
          id: 'option.pahmaInventoryNames.caColusaCounty2',
          defaultMessage: 'CA-Colusa Co. 2',
        },
        caContraCostaCounty1: {
          id: 'option.pahmaInventoryNames.caContraCostaCounty1',
          defaultMessage: 'CA-Contra Costa Co. 1',
        },
        caContraCostaCounty2: {
          id: 'option.pahmaInventoryNames.caContraCostaCounty2',
          defaultMessage: 'CA-Contra Costa Co. 2',
        },
        caContraCostaCounty3: {
          id: 'option.pahmaInventoryNames.caContraCostaCounty3',
          defaultMessage: 'CA-Contra Costa Co. 3',
        },
        caContraCostaCounty4: {
          id: 'option.pahmaInventoryNames.caContraCostaCounty4',
          defaultMessage: 'CA-Contra Costa Co. 4',
        },
        caContraCostaCounty5: {
          id: 'option.pahmaInventoryNames.caContraCostaCounty5',
          defaultMessage: 'CA-Contra Costa Co. 5',
        },
        caContraCostaCounty6: {
          id: 'option.pahmaInventoryNames.caContraCostaCounty6',
          defaultMessage: 'CA-Contra Costa Co. 6',
        },
        caCco138: {
          id: 'option.pahmaInventoryNames.caCco138',
          defaultMessage: 'CA-CCo-138',
        },
        caCco141: {
          id: 'option.pahmaInventoryNames.caCco141',
          defaultMessage: 'CA-CCo-141 (historic)',
        },
        caCupeno: {
          id: 'option.pahmaInventoryNames.caCupeno',
          defaultMessage: 'CA-Cupeño',
        },
        caDelNorteCounty: {
          id: 'option.pahmaInventoryNames.caDelNorteCounty',
          defaultMessage: 'CA-Del Norte Co.',
        },
        caElDoradoCounty: {
          id: 'option.pahmaInventoryNames.caElDoradoCounty',
          defaultMessage: 'CA-El Dorado Co.',
        },
        caFoothillYokutsMonache1: {
          id: 'option.pahmaInventoryNames.caFoothillYokutsMonache1',
          defaultMessage: 'CA-Foothill Yokuts/Monache 1',
        },
        caFoothillYokutsMonache2: {
          id: 'option.pahmaInventoryNames.caFoothillYokutsMonache2',
          defaultMessage: 'CA-Foothill Yokuts/Monache 2',
        },
        caFresnoCounty1: {
          id: 'option.pahmaInventoryNames.caFresnoCounty1',
          defaultMessage: 'CA-Fresno Co. 1',
        },
        caFresnoCounty2: {
          id: 'option.pahmaInventoryNames.caFresnoCounty2',
          defaultMessage: 'CA-Fresno Co. 2',
        },
        caFresnoCounty3: {
          id: 'option.pahmaInventoryNames.caFresnoCounty3',
          defaultMessage: 'CA-Fresno Co. 3',
        },
        caGlennCounty: {
          id: 'option.pahmaInventoryNames.caGlennCounty',
          defaultMessage: 'CA-Glenn Co.',
        },
        caHumboldtCounty1: {
          id: 'option.pahmaInventoryNames.caHumboldtCounty1',
          defaultMessage: 'CA-Humboldt Co. 1',
        },
        caHumboldtCounty2: {
          id: 'option.pahmaInventoryNames.caHumboldtCounty2',
          defaultMessage: 'CA-Humboldt Co. 2',
        },
        caHumboldtCounty3: {
          id: 'option.pahmaInventoryNames.caHumboldtCounty3',
          defaultMessage: 'CA-Humboldt Co. 3',
        },
        caInyoCounty1: {
          id: 'option.pahmaInventoryNames.caInyoCounty1',
          defaultMessage: 'CA-Inyo Co. 1',
        },
        caInyoCounty2: {
          id: 'option.pahmaInventoryNames.caInyoCounty2',
          defaultMessage: 'CA-Inyo Co. 2',
        },
        caKarok: {
          id: 'option.pahmaInventoryNames.caKarok',
          defaultMessage: 'CA-Karok',
        },
        'caKer-74': {
          id: 'option.pahmaInventoryNames.caKer-74',
          defaultMessage: 'CA-Ker-74 (historic)',
        },
        caKernCounty1: {
          id: 'option.pahmaInventoryNames.caKernCounty1',
          defaultMessage: 'CA-Kern Co. 1',
        },
        caKernCounty2: {
          id: 'option.pahmaInventoryNames.caKernCounty2',
          defaultMessage: 'CA-Kern Co. 2',
        },
        caKernCounty3: {
          id: 'option.pahmaInventoryNames.caKernCounty3',
          defaultMessage: 'CA-Kern Co. 3',
        },
        caKingsCounty: {
          id: 'option.pahmaInventoryNames.caKingsCounty',
          defaultMessage: 'CA-Kings Co.',
        },
        caKonkow: {
          id: 'option.pahmaInventoryNames.caKonkow',
          defaultMessage: 'CA-Konkow',
        },
        caLakeCounty: {
          id: 'option.pahmaInventoryNames.caLakeCounty',
          defaultMessage: 'CA-Lake Co.',
        },
        caLassenCounty1: {
          id: 'option.pahmaInventoryNames.caLassenCounty1',
          defaultMessage: 'CA-Lassen Co. 1',
        },
        caLassenCounty2: {
          id: 'option.pahmaInventoryNames.caLassenCounty2',
          defaultMessage: 'CA-Lassen Co. 2',
        },
        caLassenCounty3: {
          id: 'option.pahmaInventoryNames.caLassenCounty3',
          defaultMessage: 'CA-Lassen Co. 3',
        },
        caLosAngelesCounty1: {
          id: 'option.pahmaInventoryNames.caLosAngelesCounty1',
          defaultMessage: 'CA-Los Angeles Co. 1',
        },
        caLosAngelesCounty2: {
          id: 'option.pahmaInventoryNames.caLosAngelesCounty2',
          defaultMessage: 'CA-Los Angeles Co. 2',
        },
        caMaderaCounty1: {
          id: 'option.pahmaInventoryNames.caMaderaCounty1',
          defaultMessage: 'CA-Madera Co. 1',
        },
        caMaderaCounty2: {
          id: 'option.pahmaInventoryNames.caMaderaCounty2',
          defaultMessage: 'CA-Madera Co. 2',
        },
        caMarinCounty1: {
          id: 'option.pahmaInventoryNames.caMarinCounty1',
          defaultMessage: 'CA-Marin Co. 1',
        },
        caMarinCounty2: {
          id: 'option.pahmaInventoryNames.caMarinCounty2',
          defaultMessage: 'CA-Marin Co. 2',
        },
        caMariposaCounty: {
          id: 'option.pahmaInventoryNames.caMariposaCounty',
          defaultMessage: 'CA-Mariposa Co.',
        },
        caMendocino: {
          id: 'option.pahmaInventoryNames.caMendocino',
          defaultMessage: 'CA-Mendocino',
        },
        caMercedCounty: {
          id: 'option.pahmaInventoryNames.caMercedCounty',
          defaultMessage: 'CA-Merced Co.',
        },
        caModocCounty1: {
          id: 'option.pahmaInventoryNames.caModocCounty1',
          defaultMessage: 'CA-Modoc Co. 1',
        },
        caModocCounty2: {
          id: 'option.pahmaInventoryNames.caModocCounty2',
          defaultMessage: 'CA-Modoc Co. 2',
        },
        caMonoCounty: {
          id: 'option.pahmaInventoryNames.caMonoCounty',
          defaultMessage: 'CA-Mono Co.',
        },
        caMontereyCountyOh1: {
          id: 'option.pahmaInventoryNames.caMontereyCountyOh1',
          defaultMessage: 'CA-Monterey Co. (OH1)',
        },
        caMontereyCountyOh2: {
          id: 'option.pahmaInventoryNames.caMontereyCountyOh2',
          defaultMessage: 'CA-Monterey Co. (OH2)',
        },
        caMontereyCounty1: {
          id: 'option.pahmaInventoryNames.caMontereyCounty1',
          defaultMessage: 'CA-Monterey Co. 1',
        },
        caMontereyCounty2: {
          id: 'option.pahmaInventoryNames.caMontereyCounty2',
          defaultMessage: 'CA-Monterey Co. 2',
        },
        caMontereyCounty3: {
          id: 'option.pahmaInventoryNames.caMontereyCounty3',
          defaultMessage: 'CA-Monterey Co. 3',
        },
        caNapaCounty1: {
          id: 'option.pahmaInventoryNames.caNapaCounty1',
          defaultMessage: 'CA-Napa Co. 1',
        },
        caNapaCounty2: {
          id: 'option.pahmaInventoryNames.caNapaCounty2',
          defaultMessage: 'CA-Napa Co. 2',
        },
        caNapaCounty3: {
          id: 'option.pahmaInventoryNames.caNapaCounty3',
          defaultMessage: 'CA-Napa Co. 3',
        },
        caOrangeCounty: {
          id: 'option.pahmaInventoryNames.caOrangeCounty',
          defaultMessage: 'CA-Orange Co.',
        },
        caPatwin1: {
          id: 'option.pahmaInventoryNames.caPatwin1',
          defaultMessage: 'CA-Patwin 1 (historic)',
        },
        caPatwin2: {
          id: 'option.pahmaInventoryNames.caPatwin2',
          defaultMessage: 'CA-Patwin 2',
        },
        caPitRiver: {
          id: 'option.pahmaInventoryNames.caPitRiver',
          defaultMessage: 'CA-Pit River',
        },
        caPlacerCounty: {
          id: 'option.pahmaInventoryNames.caPlacerCounty',
          defaultMessage: 'CA-Placer Co.',
        },
        caPlumasCounty: {
          id: 'option.pahmaInventoryNames.caPlumasCounty',
          defaultMessage: 'CA-Plumas Co.',
        },
        caPomo1: {
          id: 'option.pahmaInventoryNames.caPomo1',
          defaultMessage: 'CA-Pomo 1',
        },
        caPomo2: {
          id: 'option.pahmaInventoryNames.caPomo2',
          defaultMessage: 'CA-Pomo 2',
        },
        caPomo3: {
          id: 'option.pahmaInventoryNames.caPomo3',
          defaultMessage: 'CA-Pomo 3',
        },
        caSac160: {
          id: 'option.pahmaInventoryNames.caSac160',
          defaultMessage: 'CA-Sac-160 (historic)',
        },
        caSacramentoCounty1: {
          id: 'option.pahmaInventoryNames.caSacramentoCounty1',
          defaultMessage: 'CA-Sacramento Co. 1',
        },
        caSacramentoCounty2: {
          id: 'option.pahmaInventoryNames.caSacramentoCounty2',
          defaultMessage: 'CA-Sacramento Co. 2',
        },
        caSacramentoCounty3: {
          id: 'option.pahmaInventoryNames.caSacramentoCounty3',
          defaultMessage: 'CA-Sacramento Co. 3',
        },
        caSacramentoCounty4: {
          id: 'option.pahmaInventoryNames.caSacramentoCounty4',
          defaultMessage: 'CA-Sacramento Co. 4',
        },
        caSac16revised: {
          id: 'option.pahmaInventoryNames.caSac16revised',
          defaultMessage: 'CA-Sac-16 (revised to affiliated)',
        },
        caSanBenitoCounty: {
          id: 'option.pahmaInventoryNames.caSanBenitoCounty',
          defaultMessage: 'CA-San Benito Co.',
        },
        caSanClementeIsland: {
          id: 'option.pahmaInventoryNames.caSanClementeIsland',
          defaultMessage: 'CA-San Clemente Island',
        },
        caSanDiego: {
          id: 'option.pahmaInventoryNames.caSanDiego',
          defaultMessage: 'CA-San Diego',
        },
        caSanFranciscoOh1: {
          id: 'option.pahmaInventoryNames.caSanFranciscoOh1',
          defaultMessage: 'CA-San Francisco (OH1)',
        },
        caSanFranciscoOh2: {
          id: 'option.pahmaInventoryNames.caSanFranciscoOh2',
          defaultMessage: 'CA-San Francisco (OH2)',
        },
        caSanFranciscoCounty1: {
          id: 'option.pahmaInventoryNames.caSanFranciscoCounty1',
          defaultMessage: 'CA-San Francisco Co. 1',
        },
        caSanJoaquinCounty1: {
          id: 'option.pahmaInventoryNames.caSanJoaquinCounty1',
          defaultMessage: 'CA-San Joaquin Co. 1',
        },
        caSanJoaquinCounty2: {
          id: 'option.pahmaInventoryNames.caSanJoaquinCounty2',
          defaultMessage: 'CA-San Joaquin Co. 2',
        },
        caSanJoaquinCounty5: {
          id: 'option.pahmaInventoryNames.caSanJoaquinCounty5',
          defaultMessage: 'CA-San Joaquin Co. 5',
        },
        caSanLuisObispoCounty1: {
          id: 'option.pahmaInventoryNames.caSanLuisObispoCounty1',
          defaultMessage: 'CA-San Luis Obispo Co. 1',
        },
        caSanLuisObispoCounty2: {
          id: 'option.pahmaInventoryNames.caSanLuisObispoCounty2',
          defaultMessage: 'CA-San Luis Obispo Co. 2',
        },
        caSanMateoCo: {
          id: 'option.pahmaInventoryNames.caSanMateoCo',
          defaultMessage: 'CA-San Mateo Co. (OH1)',
        },
        caSanMateoCounty1: {
          id: 'option.pahmaInventoryNames.caSanMateoCounty1',
          defaultMessage: 'CA-San Mateo Co. 1',
        },
        caSanNicolasIsland: {
          id: 'option.pahmaInventoryNames.caSanNicolasIsland',
          defaultMessage: 'CA-San Nicolas Island',
        },
        caSanPasqual: {
          id: 'option.pahmaInventoryNames.caSanPasqual',
          defaultMessage: 'CA-San Pasqual',
        },
        caSantaCatalinaIsland1: {
          id: 'option.pahmaInventoryNames.caSantaCatalinaIsland1',
          defaultMessage: 'CA-Santa Catalina Island 1',
        },
        caSantaCatalinaIsland2: {
          id: 'option.pahmaInventoryNames.caSantaCatalinaIsland2',
          defaultMessage: 'CA-Santa Catalina Island 2',
        },
        caSantaClaraCountyOh1: {
          id: 'option.pahmaInventoryNames.caSantaClaraCountyOh1',
          defaultMessage: 'CA-Santa Clara Co. (OH1)',
        },
        caSantaClaraCountyOh2: {
          id: 'option.pahmaInventoryNames.caSantaClaraCountyOh2',
          defaultMessage: 'CA-Santa Clara Co. (OH2)',
        },
        caSantaClaraCounty1: {
          id: 'option.pahmaInventoryNames.caSantaClaraCounty1',
          defaultMessage: 'CA-Santa Clara Co. 1',
        },
        caSantaClaraCounty2: {
          id: 'option.pahmaInventoryNames.caSantaClaraCounty2',
          defaultMessage: 'CA-Santa Clara Co. 2',
        },
        caSantaCruzCountyOh1: {
          id: 'option.pahmaInventoryNames.caSantaCruzCountyOh1',
          defaultMessage: 'CA-Santa Cruz Co. (OH1)',
        },
        caSantaCruzCounty1: {
          id: 'option.pahmaInventoryNames.caSantaCruzCounty1',
          defaultMessage: 'CA-Santa Cruz Co. 1',
        },
        caSantaCruzCounty2: {
          id: 'option.pahmaInventoryNames.caSantaCruzCounty2',
          defaultMessage: 'CA-Santa Cruz Co. 2',
        },
        caShastaCounty1: {
          id: 'option.pahmaInventoryNames.caShastaCounty1',
          defaultMessage: 'CA-Shasta Co. 1',
        },
        caShastaCounty2: {
          id: 'option.pahmaInventoryNames.caShastaCounty2',
          defaultMessage: 'CA-Shasta Co. 2',
        },
        caShastaCounty3: {
          id: 'option.pahmaInventoryNames.caShastaCounty3',
          defaultMessage: 'CA-Shasta Co. 3',
        },
        caSierraMiwok: {
          id: 'option.pahmaInventoryNames.caSierraMiwok',
          defaultMessage: 'CA-Sierra Miwok',
        },
        caSis262: {
          id: 'option.pahmaInventoryNames.caSis262',
          defaultMessage: 'CA-Sis-262 (historic)',
        },
        caSiskiyouCounty1: {
          id: 'option.pahmaInventoryNames.caSiskiyouCounty1',
          defaultMessage: 'CA-Siskiyou Co. 1',
        },
        caSiskiyouCounty2: {
          id: 'option.pahmaInventoryNames.caSiskiyouCounty2',
          defaultMessage: 'CA-Siskiyou Co. 2',
        },
        caSolanoCounty1: {
          id: 'option.pahmaInventoryNames.caSolanoCounty1',
          defaultMessage: 'CA-Solano Co. 1',
        },
        caSolanoCounty2: {
          id: 'option.pahmaInventoryNames.caSolanoCounty2',
          defaultMessage: 'CA-Solano Co. 2',
        },
        caSolanoCounty3: {
          id: 'option.pahmaInventoryNames.caSolanoCounty3',
          defaultMessage: 'CA-Solano Co. 3',
        },
        caSonomaCounty: {
          id: 'option.pahmaInventoryNames.caSonomaCounty',
          defaultMessage: 'CA-Sonoma Co.',
        },
        caSouthernValleyYokuts: {
          id: 'option.pahmaInventoryNames.caSouthernValleyYokuts',
          defaultMessage: 'CA-Southern Valley Yokuts',
        },
        caStanislausCounty1: {
          id: 'option.pahmaInventoryNames.caStanislausCounty1',
          defaultMessage: 'CA-Stanislaus Co. 1',
        },
        caStanislausCounty2: {
          id: 'option.pahmaInventoryNames.caStanislausCounty2',
          defaultMessage: 'CA-Stanislaus Co. 2',
        },
        caSutterCounty1: {
          id: 'option.pahmaInventoryNames.caSutterCounty1',
          defaultMessage: 'CA-Sutter Co. 1',
        },
        caSutterCounty2: {
          id: 'option.pahmaInventoryNames.caSutterCounty2',
          defaultMessage: 'CA-Sutter Co. 2',
        },
        caTehamaCounty1: {
          id: 'option.pahmaInventoryNames.caTehamaCounty1',
          defaultMessage: 'CA-Tehama Co. 1',
        },
        caTehamaCounty2: {
          id: 'option.pahmaInventoryNames.caTehamaCounty2',
          defaultMessage: 'CA-Tehama Co. 2',
        },
        caTeh58: {
          id: 'option.pahmaInventoryNames.caTeh58',
          defaultMessage: 'CA-Teh-58 (historic)',
        },
        caTrinityCounty1: {
          id: 'option.pahmaInventoryNames.caTrinityCounty1',
          defaultMessage: 'CA-Trinity Co. 1',
        },
        caTrinityCounty2: {
          id: 'option.pahmaInventoryNames.caTrinityCounty2',
          defaultMessage: 'CA-Trinity Co. 2',
        },
        caTulareCounty1: {
          id: 'option.pahmaInventoryNames.caTulareCounty1',
          defaultMessage: 'CA-Tulare Co. 1',
        },
        caTulareCounty2: {
          id: 'option.pahmaInventoryNames.caTulareCounty2',
          defaultMessage: 'CA-Tulare Co. 2',
        },
        caTulareCounty3: {
          id: 'option.pahmaInventoryNames.caTulareCounty3',
          defaultMessage: 'CA-Tulare Co. 3',
        },
        caTulareCounty4: {
          id: 'option.pahmaInventoryNames.caTulareCounty4',
          defaultMessage: 'CA-Tulare Co. 4',
        },
        caTulareCounty5: {
          id: 'option.pahmaInventoryNames.caTulareCounty5',
          defaultMessage: 'CA-Tulare Co. 5',
        },
        caWesternShoshone: {
          id: 'option.pahmaInventoryNames.caWesternShoshone',
          defaultMessage: 'CA-Western Shoshone',
        },
        caWintun: {
          id: 'option.pahmaInventoryNames.caWintun',
          defaultMessage: 'CA-Wintun',
        },
        caWiyot: {
          id: 'option.pahmaInventoryNames.caWiyot',
          defaultMessage: 'CA-Wiyot',
        },
        caYana: {
          id: 'option.pahmaInventoryNames.caYana',
          defaultMessage: 'CA-Yana',
        },
        caYol13: {
          id: 'option.pahmaInventoryNames.caYol13',
          defaultMessage: 'CA-Yol-13 (historic)',
        },
        caYoloCounty1: {
          id: 'option.pahmaInventoryNames.caYoloCounty1',
          defaultMessage: 'CA-Yolo Co. 1',
        },
        caYoloCounty2: {
          id: 'option.pahmaInventoryNames.caYoloCounty2',
          defaultMessage: 'CA-Yolo Co. 2',
        },
        caYoloCounty3: {
          id: 'option.pahmaInventoryNames.caYoloCounty3',
          defaultMessage: 'CA-Yolo Co. 3',
        },
        caYubaCounty: {
          id: 'option.pahmaInventoryNames.caYubaCounty',
          defaultMessage: 'CA-Yuba Co.',
        },
        caYub5: {
          id: 'option.pahmaInventoryNames.caYub5',
          defaultMessage: 'CA-Yub-5 (historic)',
        },
        caYuki: {
          id: 'option.pahmaInventoryNames.caYuki',
          defaultMessage: 'CA-Yuki',
        },
        caYurok: {
          id: 'option.pahmaInventoryNames.caYurok',
          defaultMessage: 'CA-Yurok',
        },
        coMontezumaCounty: {
          id: 'option.pahmaInventoryNames.coMontezumaCounty',
          defaultMessage: 'CO-Montezuma Co.',
        },
        idLemhiCounty: {
          id: 'option.pahmaInventoryNames.idLemhiCounty',
          defaultMessage: 'ID-Lemhi Co.',
        },
        ilMadisonCounty: {
          id: 'option.pahmaInventoryNames.ilMadisonCounty',
          defaultMessage: 'IL-Madison Co.',
        },
        inIndiana: {
          id: 'option.pahmaInventoryNames.inIndiana',
          defaultMessage: 'IN-Indiana',
        },
        lamarHistoric: {
          id: 'option.pahmaInventoryNames.lamarHistoric',
          defaultMessage: 'Lamar (historic)',
        },
        miMichigan: {
          id: 'option.pahmaInventoryNames.miMichigan',
          defaultMessage: 'MI-Michigan',
        },
        ndMandan: {
          id: 'option.pahmaInventoryNames.ndMandan',
          defaultMessage: 'ND-Mandan',
        },
        njNewJersey: {
          id: 'option.pahmaInventoryNames.njNewJersey',
          defaultMessage: 'NJ-New Jersey',
        },
        nmMckinleyCounty: {
          id: 'option.pahmaInventoryNames.nmMckinleyCounty',
          defaultMessage: 'NM-McKinley Co.',
        },
        nvChurchillCounty: {
          id: 'option.pahmaInventoryNames.nvChurchillCounty',
          defaultMessage: 'NV-Churchill Co.',
        },
        nvClarkCounty1: {
          id: 'option.pahmaInventoryNames.nvClarkCounty1',
          defaultMessage: 'NV-Clark Co. 1',
        },
        nvClarkCounty2: {
          id: 'option.pahmaInventoryNames.nvClarkCounty2',
          defaultMessage: 'NV-Clark Co. 2',
        },
        nvHumboldtCounty: {
          id: 'option.pahmaInventoryNames.nvHumboldtCounty',
          defaultMessage: 'NV-Humboldt Co.',
        },
        nvNevada: {
          id: 'option.pahmaInventoryNames.nvNevada',
          defaultMessage: 'NV-Nevada',
        },
        nvNorthernPaiute: {
          id: 'option.pahmaInventoryNames.nvNorthernPaiute',
          defaultMessage: 'NV-Northern Paiute',
        },
        nvPershingCounty: {
          id: 'option.pahmaInventoryNames.nvPershingCounty',
          defaultMessage: 'NV-Pershing Co.',
        },
        nvSouthernPaiute: {
          id: 'option.pahmaInventoryNames.nvSouthernPaiute',
          defaultMessage: 'NV-Southern Paiute',
        },
        nvWashoe: {
          id: 'option.pahmaInventoryNames.nvWashoe',
          defaultMessage: 'NV-Washoe',
        },
        nvWashoeCounty1: {
          id: 'option.pahmaInventoryNames.nvWashoeCounty1',
          defaultMessage: 'NV-Washoe Co. 1',
        },
        nvWashoeCounty2: {
          id: 'option.pahmaInventoryNames.nvWashoeCounty2',
          defaultMessage: 'NV-Washoe Co. 2',
        },
        nyNewYork: {
          id: 'option.pahmaInventoryNames.nyNewYork',
          defaultMessage: 'NY-New York',
        },
        orCalapooya: {
          id: 'option.pahmaInventoryNames.orCalapooya',
          defaultMessage: 'OR-Calapooya',
        },
        orChetco: {
          id: 'option.pahmaInventoryNames.orChetco',
          defaultMessage: 'OR-Chetco',
        },
        orJacksonCounty: {
          id: 'option.pahmaInventoryNames.orJacksonCounty',
          defaultMessage: 'OR-Jackson Co.',
        },
        orKlamath: {
          id: 'option.pahmaInventoryNames.orKlamath',
          defaultMessage: 'OR-Klamath',
        },
        orKlamathCounty: {
          id: 'option.pahmaInventoryNames.orKlamathCounty',
          defaultMessage: 'OR-Klamath Co.',
        },
        orMorrowCounty: {
          id: 'option.pahmaInventoryNames.orMorrowCounty',
          defaultMessage: 'OR-Morrow Co.',
        },
        orWascoCounty: {
          id: 'option.pahmaInventoryNames.orWascoCounty',
          defaultMessage: 'OR-Wasco Co.',
        },
        sdBrownCounty: {
          id: 'option.pahmaInventoryNames.sdBrownCounty',
          defaultMessage: 'SD-Brown Co.',
        },
        tnMontgomeryCounty: {
          id: 'option.pahmaInventoryNames.tnMontgomeryCounty',
          defaultMessage: 'TN-Montgomery Co.',
        },
        utBoxElderCounty: {
          id: 'option.pahmaInventoryNames.utBoxElderCounty',
          defaultMessage: 'UT-Box Elder Co.',
        },
        utSanJuanCounty1: {
          id: 'option.pahmaInventoryNames.utSanJuanCounty1',
          defaultMessage: 'UT-San Juan Co. 1',
        },
        utSanJuanCounty2: {
          id: 'option.pahmaInventoryNames.utSanJuanCounty2',
          defaultMessage: 'UT-San Juan Co. 2',
        },
        waAsotinCounty: {
          id: 'option.pahmaInventoryNames.waAsotinCounty',
          defaultMessage: 'WA-Asotin Co.',
        },
        waClallam: {
          id: 'option.pahmaInventoryNames.waClallam',
          defaultMessage: 'WA-Clallam',
        },
        waCowlitzCounty: {
          id: 'option.pahmaInventoryNames.waCowlitzCounty',
          defaultMessage: 'WA-Cowlitz Co.',
        },
        waKing: {
          id: 'option.pahmaInventoryNames.waKing',
          defaultMessage: 'WA-King',
        },
        waKlickitatCounty: {
          id: 'option.pahmaInventoryNames.waKlickitatCounty',
          defaultMessage: 'WA-Klickitat Co.',
        },
        waKl24245kl242: {
          id: 'option.pahmaInventoryNames.waKl24245kl242',
          defaultMessage: 'WA-KL-242 (45KL242) (historic)',
        },
        waMillersIsland: {
          id: 'option.pahmaInventoryNames.waMillersIsland',
          defaultMessage: 'WA-Millers Island (historic)',
        },
        waYakima: {
          id: 'option.pahmaInventoryNames.waYakima',
          defaultMessage: 'WA-Yakima',
        },
        nonNagpra1: {
          id: 'option.pahmaInventoryNames.nonNagpra1',
          defaultMessage: 'non-NAGPRA 1',
        },
        nonNagpra2: {
          id: 'option.pahmaInventoryNames.nonNagpra2',
          defaultMessage: 'non-NAGPRA 2',
        },
        nonNagpra3: {
          id: 'option.pahmaInventoryNames.nonNagpra3',
          defaultMessage: 'non-NAGPRA 3',
        },
        nonNagpra4: {
          id: 'option.pahmaInventoryNames.nonNagpra4',
          defaultMessage: 'non-NAGPRA 4',
        },
        nonNagpra5: {
          id: 'option.pahmaInventoryNames.nonNagpra5',
          defaultMessage: 'non-NAGPRA 5',
        },
        nonNagpra6: {
          id: 'option.pahmaInventoryNames.nonNagpra6',
          defaultMessage: 'non-NAGPRA 6',
        },
        nonNagpra7: {
          id: 'option.pahmaInventoryNames.nonNagpra7',
          defaultMessage: 'non-NAGPRA 7',
        },
        nonNagpra8: {
          id: 'option.pahmaInventoryNames.nonNagpra8',
          defaultMessage: 'non-NAGPRA 8',
        },
        nonNagpra9: {
          id: 'option.pahmaInventoryNames.nonNagpra9',
          defaultMessage: 'non-NAGPRA 9',
        },
        nonNagpra10: {
          id: 'option.pahmaInventoryNames.nonNagpra10',
          defaultMessage: 'non-NAGPRA 10',
        },
        nonNagpra11: {
          id: 'option.pahmaInventoryNames.nonNagpra11',
          defaultMessage: 'non-NAGPRA 11',
        },
      }),
    },
  },
});
