import { defineMessages } from 'react-intl';

export default {
  associated: {
    disabled: true,
  },
  ethculture: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.ethculture.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Ethnographic Culture',
      },
      collectionName: {
        id: 'vocab.concept.ethculture.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Ethnographic Cultures',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(concept)',
    },
  },
  archculture: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.archculture.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Archaeological Culture',
      },
      collectionName: {
        id: 'vocab.concept.archculture.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Archaeological Cultures',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(archculture)',
    },
  },
  ethusecode: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.ethusecode.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Ethnographic File Code',
      },
      collectionName: {
        id: 'vocab.concept.ethusecode.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Ethnographic File Codes',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethusecode)',
    },
  },
  objectname: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.objectname.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Object Name',
      },
      collectionName: {
        id: 'vocab.concept.objectname.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Object Names',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(objectname)',
    },
  },
  objectclass: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.objectclass.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Object Class',
      },
      collectionName: {
        id: 'vocab.concept.objectclass.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Object Classes',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(objectclass)',
    },
  },
};
