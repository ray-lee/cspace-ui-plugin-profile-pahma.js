export default (configContext) => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'claims_common');
  const anthro = getPart(data, 'claims_anthropology');

  const claimNumber = common ? common.get('claimNumber') : '';
  const claimName = anthro ? anthro.get('claimName') : '';

  return [claimNumber, claimName].filter((part) => !!part).join(' – ');
};
