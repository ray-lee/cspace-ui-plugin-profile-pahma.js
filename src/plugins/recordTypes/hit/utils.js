export const noop = () => {};

export const computeAgreementDate = ({ recordData }, formatRefName, Immutable) => {
  const groupData = recordData.getIn(['document', 'ns2:hits_common', 'agreementGroupList', 'agreementGroup']);

  let agreementDate = recordData.getIn(['document', 'ns2:hits_pahma', 'agreementDate']);

  const agreeementDates = groupData
    .filter((group) => formatRefName(group.get('agreementStatus')) === 'agreed'
      && group.get('agreementStatusDate') !== ''
      && group.get('agreementStatusDate') !== null
      && group.get('agreementStatusDate') !== undefined)
    .map((group) => new Date(group.get('agreementStatusDate')))
    .sort((d1, d2) => d1 - d2);

  if (agreeementDates.size > 0) {
    const agreeementDate = agreeementDates.last();

    // Create the new date string. We add 1 to month since its 0-index (0-11)
    let entryDateMonth = agreeementDate.getUTCMonth() + 1;
    let entryDateDay = agreeementDate.getUTCDate();

    entryDateMonth = entryDateMonth < 10 ? `0${entryDateMonth}` : entryDateMonth;
    entryDateDay = entryDateDay < 10 ? `0${entryDateDay}` : entryDateDay;

    agreementDate = `${agreeementDate.getFullYear()}-${entryDateMonth}-${entryDateDay}`;
  }

  return Immutable.fromJS({
    'ns2:hits_pahma': {
      agreementDate,
    },
  });
};
