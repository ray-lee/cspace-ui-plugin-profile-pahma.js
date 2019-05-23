import { defineMessages } from 'react-intl';
import { undoFormatting } from './utils';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      objectNumber: {
        sortBy: 'collectionobjects_pahma:sortableObjectNumber',
      },
      'objectName|title|taxon': {
        // If it's a taxon, it will need to be formatted as a ref name.
        formatValue: value => formatRefName(value) || value,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.objectName|title|taxon',
            defaultMessage: 'Name/title',
          },
        }),
        order: 20,
        width: 450,
      },
      title: {
        disabled: true,
      },
    },
    narrow: {
      objectNumber: {
        sortBy: 'collectionobjects_pahma:sortableObjectNumber',
      },
      'objectName|title|taxon': {
        // If it's a taxon, it will need to be formatted as a ref name.
        formatValue: value => formatRefName(value) || value,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.objectName|title|taxon',
            defaultMessage: 'Name/title',
          },
        }),
        order: 20,
        width: 450,
      },
      title: {
        disabled: true,
      },
    },
  };
};
