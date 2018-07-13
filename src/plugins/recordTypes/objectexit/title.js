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

  const common = getPart(data, 'objectexit_common');
  const anthro = getPart(data, 'objectexit_anthropology');

  const exitNumber = common && common.get('exitNumber');
  const newOwner = anthro && getDisplayName(deepGet(anthro, ['newOwnerList', 'newOwner', 0]));

  return [exitNumber, newOwner].filter(part => !!part).join(' – ');
};
