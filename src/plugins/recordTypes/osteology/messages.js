import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.osteology.name',
      description: 'The name of the osteology record type.',
      defaultMessage: 'Osteology',
    },
    collectionName: {
      id: 'record.osteology.collectionName',
      description: 'The name of a collection of records of the osteology type.',
      defaultMessage: 'Osteology',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.osteology.info',
      defaultMessage: 'Osteology Information',
    },
    inventory: {
      id: 'panel.osteology.inventory',
      defaultMessage: 'Inventory',
    },
    modification: {
      id: 'panel.osteology.modification',
      defaultMessage: 'Cultural Modification Information',
    },
    cranialDeform: {
      id: 'panel.osteology.cranialDeform',
      defaultMessage: 'Cranial Deformation Information',
    },
    trepanation: {
      id: 'panel.osteology.trepanation',
      defaultMessage: 'Trepanation Information',
    },
  }),
  inputTable: defineMessages({
    trepanationDimension: {
      id: 'inputTable.osteology.trepanationDimension',
      defaultMessage: 'Dimension (mm)',
    },
  }),
};
