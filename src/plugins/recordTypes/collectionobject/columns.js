import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    objectName: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.objectName',
          defaultMessage: 'Object name',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_common:objectNameList/0/objectName',
      width: 450,
    },
    title: {
      disabled: true,
    },
  },
  narrow: {
    objectName: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.objectName',
          defaultMessage: 'Object name',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_common:objectNameList/0/objectName',
      width: 450,
    },
    title: {
      disabled: true,
    },
  },
});
