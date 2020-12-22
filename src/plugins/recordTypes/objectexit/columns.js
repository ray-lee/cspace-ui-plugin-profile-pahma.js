import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      currentOwner: {
        disabled: true,
      },
      newOwner: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.objectexit.default.newOwner',
            defaultMessage: 'New or current owner',
          },
        }),
        order: 20,
        sortBy: 'objectexit_anthropology:newOwnerList/0/newOwner', // https://jira.ets.berkeley.edu/jira/browse/CC-1506
        width: 450,
      },
    },
  };
};
