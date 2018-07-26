import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      objectNumber: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.objectNumber',
            defaultMessage: 'Identification number',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_common:objectNumber',
        width: 200,
      },
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
        // sortBy: 'collectionobjects_common:titleGroupList/0/title',
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
    narrow: {
      objectNumber: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.objectNumber',
            defaultMessage: 'ID',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_common:objectNumber',
        width: 200,
      },
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
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
