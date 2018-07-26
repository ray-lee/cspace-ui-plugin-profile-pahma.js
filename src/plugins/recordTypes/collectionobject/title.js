export default configContext => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'collectionobjects_common');

  if (!common) {
    return '';
  }

  const objectNumber = common.get('objectNumber');
  const objectName = deepGet(common, ['objectNameList', 'objectNameGroup', 0, 'objectName']);

  return [objectNumber, objectName].filter(part => !!part).join(' – ');
};
