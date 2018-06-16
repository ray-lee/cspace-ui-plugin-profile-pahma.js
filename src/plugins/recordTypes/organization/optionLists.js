import { defineMessages } from 'react-intl';

export default {
  orgTermStatuses: {
    values: [
      'provisional',
      'underReview',
      'accepted',
      'rejected',
    ],
    messages: defineMessages({
      underReview: {
        id: 'option.orgTermStatuses.underReview',
        defaultMessage: 'under review',
      },
    }),
  },
  anthroOrgTypes: {
    values: [
      'Business',
      'Estate',
      'Expedition',
      'Family',
      'Foundation',
      'Government Agency',
      'Institution (unspecified)',
      'Museum or Gallery',
      'Tribe: Federally recognized',
      'Tribe: Non-Federally recognized',
      'Tribe: unspecified',
      'University Class',
      'University or Univ. Department',
    ],
    messages: {
      Business: {
        id: 'option.anthroOrgTypes.Business',
        defaultMessage: 'business',
      },
      Estate: {
        id: 'option.anthroOrgTypes.Estate',
        defaultMessage: 'estate',
      },
      Expedition: {
        id: 'option.anthroOrgTypes.Expedition',
        defaultMessage: 'expedition',
      },
      Family: {
        id: 'option.anthroOrgTypes.Family',
        defaultMessage: 'family',
      },
      Foundation: {
        id: 'option.anthroOrgTypes.Foundation',
        defaultMessage: 'foundation',
      },
      'Government Agency': {
        id: 'option.anthroOrgTypes.Government Agency',
        defaultMessage: 'government agency',
      },
      'Institution (unspecified)': {
        id: 'option.anthroOrgTypes.Institution (unspecified)',
        defaultMessage: 'institution (unspecified)',
      },
      'Museum or Gallery': {
        id: 'option.anthroOrgTypes.Museum or Gallery',
        defaultMessage: 'museum or gallery',
      },
      'Tribe: Federally recognized': {
        id: 'option.anthroOrgTypes.Tribe: Federally recognized',
        defaultMessage: 'tribe: federally recognized',
      },
      'Tribe: Non-Federally recognized': {
        id: 'option.anthroOrgTypes.Tribe: Non-Federally recognized',
        defaultMessage: 'tribe: non-federally recognized',
      },
      'Tribe: unspecified': {
        id: 'option.anthroOrgTypes.Tribe: unspecified',
        defaultMessage: 'tribe: unspecified',
      },
      'University Class': {
        id: 'option.anthroOrgTypes.University Class',
        defaultMessage: 'university class',
      },
      'University or Univ. Department': {
        id: 'option.anthroOrgTypes.University or Univ. Department',
        defaultMessage: 'university or univ. department',
      },
    },
  },
};
