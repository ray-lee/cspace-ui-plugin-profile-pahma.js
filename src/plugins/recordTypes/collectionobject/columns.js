import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
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
