export default (configContext) => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'collectionobjects_common');
  const naturalHistory = getPart(data, 'collectionobjects_naturalhistory');

  const objectNumber = common && common.get('objectNumber');

  const objectName = common
    && deepGet(common, ['objectNameList', 'objectNameGroup', 0, 'objectName']);

  const title = common && deepGet(common, ['titleGroupList', 'titleGroup', 0, 'title']);

  const taxon = naturalHistory
    && deepGet(naturalHistory, ['taxonomicIdentGroupList', 'taxonomicIdentGroup', 0, 'taxon']);

  return (
    [objectNumber, (objectName || title || getDisplayName(taxon))]
      .filter((part) => !!part).join(' – ')
  );
};
