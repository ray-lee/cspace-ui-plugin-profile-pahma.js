import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      acquisitionSource: {
        disabled: true,
      },
      donor: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.acquisition.default.donor',
            defaultMessage: 'Previous owner (donor)',
          },
        }),
        order: 20,
        sortBy: 'acquisitions_pahma:acquisitionDonorGroupList/0/donor',
        width: 400,
      },
    },
  };
};
