import Immutable from 'immutable';

export default ({ recordData }) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;


  const groupData = recordData.getIn(['document', 'ns2:hits_common', 'agreementGroupList', 'agreementGroup']);

  const existingAgreementDate = recordData.getIn(['document', 'ns2:hits_common', 'entryDate']);

  // We don't want to override the date once set. It will exist for the lifetime of the record.
  // Therefore we only compute the date if the field is undefined

  if (existingAgreementDate === undefined || existingAgreementDate === '') {
    // Filter group such that we only geed "agreed" dates
    // we also want to make sure date-less rows are not selected to the default year
    // Then convert to Date objects so that we can compare them
    // sort them, pass in a comparator to correctly compare them
    let entryDate = '';
    let agreeementDate = groupData
      .filter((group) => formatRefName(group.get('agreementStatus')) === 'agreed'
        && group.get('agreementStatusDate') !== ''
        && group.get('agreementStatusDate') !== null)
      .map((group) => new Date(group.get('agreementStatusDate')))
      .sort((d1, d2) => d1 - d2);

    if (agreeementDate.size > 0) {
      agreeementDate = agreeementDate.last();

      // Create the new date string. We add 1 to month since its 0-index (0-11)
      let entryDateMonth = agreeementDate.getUTCMonth() + 1;
      let entryDateDay = agreeementDate.getUTCDate();

      entryDateMonth = entryDateMonth < 10 ? `0${entryDateMonth}` : entryDateMonth;
      entryDateDay = entryDateDay < 10 ? `0${entryDateDay}` : entryDateDay;

      entryDate = `${agreeementDate.getFullYear()}-${entryDateMonth}-${entryDateDay}`;
    }
    return Immutable.fromJS({
      'ns2:hits_common': {
        entryDate,
      },
    });
    // return entryDate;
  }
  return Immutable.fromJS({
    'ns2:hits_common': {
      entryDate: existingAgreementDate,
    },
  });
  // return existingAgreementDate;
};
