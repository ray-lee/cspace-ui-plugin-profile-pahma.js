export default configContext => (data) => {
  const {
    getPart,
    deepGet,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'acquisitions_common');
  const pahma = getPart(data, 'acquisitions_pahma');

  const acquisitionReferenceNumber = common && common.get('acquisitionReferenceNumber');

  const donor = pahma && getDisplayName(
    deepGet(pahma, ['acquisitionDonorGroupList', 'acquisitionDonorGroup', 0, 'donor'])
  );

  return [acquisitionReferenceNumber, donor].filter(part => !!part).join(' – ');
};
