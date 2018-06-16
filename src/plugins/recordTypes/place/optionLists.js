import { defineMessages } from 'react-intl';

export default {
  placeTermTypes: {
    values: [
      'descriptor',
      'alternativeterm',
    ],
    messages: defineMessages({
      alternativeterm: {
        id: 'option.placeTermTypes.alternativeterm',
        defaultMessage: 'alternative term',
      },
    }),
  },
};
