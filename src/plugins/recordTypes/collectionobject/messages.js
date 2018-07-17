import { defineMessages } from 'react-intl';

export default {
  panel: defineMessages({
    repatriation: {
      id: 'panel.collectionobject.repatriation',
      defaultMessage: 'Repatriation and NAGPRA Compliance Information',
    },
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
  inputTable: defineMessages({
    age: {
      id: 'inputTable.collectionobject.age',
      defaultMessage: 'Age',
    },
    assocEvent: {
      id: 'inputTable.collectionobject.assocEvent',
      defaultMessage: 'Associated event',
    },
    ownershipExchange: {
      id: 'inputTable.collectionobject.ownershipExchange',
      defaultMessage: 'Ownership exchange',
    },
  }),
};
