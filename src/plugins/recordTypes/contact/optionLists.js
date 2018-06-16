import { defineMessages } from 'react-intl';

export default {
  addressTypes: {
    values: [
      'current',
      'previous',
    ],
    messages: defineMessages({
      current: {
        id: 'option.addressTypes.current',
        defaultMessage: 'current',
      },
      previous: {
        id: 'option.addressTypes.previous',
        defaultMessage: 'previous',
      },
    }),
  },
};
