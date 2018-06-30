import { defineMessages } from 'react-intl';

export default {
  pahmaMediaTypes: {
    values: [
      'document',
      'image',
      'slide',
      'audio',
      'video',
    ],
  },
  mediaTitles: {
    values: [
      'Media record',
    ],
    messages: defineMessages({
      'Media record': {
        id: 'option.mediaTitles.Media record',
        defaultMessage: 'media record',
      },
    }),
  },
};
