import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.claim.name',
      description: 'The name of the record type.',
      defaultMessage: 'NAGPRA Claim',
    },
    collectionName: {
      id: 'record.claim.collectionName',
      description: 'The name of a collection of records of the type.',
      defaultMessage: 'NAGPRA Claims',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.claim.info',
      defaultMessage: 'NAGPRA Claim Information',
    },
    context: {
      id: 'panel.claim.context',
      defaultMessage: 'Claim Context',
    },
    processing: {
      id: 'panel.claim.processing',
      defaultMessage: 'Claim Processing Information',
    },
    tasks: {
      id: 'panel.claim.tasks',
      defaultMessage: 'Tasks to be completed',
    },
  }),
};
