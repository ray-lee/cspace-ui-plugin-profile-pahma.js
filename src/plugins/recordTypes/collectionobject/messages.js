import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;
  return {
    panel: {
      ...defineMessages({
        cultCare: {
          id: 'panel.collectionobject.cultCare',
          defaultMessage: 'Cultural Care Information',
        },
        ownership: {
          id: 'panel.collectionobject.ownership',
          defaultMessage: 'Object History and Ownership Details',
        },
        bio: {
          id: 'panel.collectionobject.bio',
          defaultMessage: 'Biological Information',
        },
      }),
      ...extensions.nagpra.collectionobject.messages.panel,
    },
  };
};
