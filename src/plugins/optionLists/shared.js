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
  },
});
