import { defineMessages } from 'react-intl';

export default {
  taxonTermStatuses: {
    values: [
      'provisional',
      'underReview',
      'accepted',
      'rejected',
    ],
    messages: defineMessages({
      underReview: {
        id: 'option.taxonTermStatuses.underReview',
        defaultMessage: 'under review',
      },
    }),
  },
  taxonomicStatuses: {
    values: [
      'valid',
      'invalid',
    ],
  },
};
