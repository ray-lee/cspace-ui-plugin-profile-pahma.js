import { defineMessages } from 'react-intl';

export default {
  conceptTermTypes: {
    values: [
      'descriptor',
      'alternativeterm',
    ],
    messages: defineMessages({
      alternativeterm: {
        id: 'option.conceptTermTypes.alternativeterm',
        defaultMessage: 'alternative term',
      },
    }),
  },
};
