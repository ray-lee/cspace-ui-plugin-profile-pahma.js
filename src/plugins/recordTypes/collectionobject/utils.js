const isNumber = (n) => !Number.isNaN(parseFloat(n)) && Number.isFinite(n);

/* eslint-disable max-len */
const objectNumberPattern = /^([cC](ons|ONS)?[-. ]?)?([A-Za-z]+(-[A-Za-z]+)?)?([-. ])?(\d+)([-. ])?(\d+)?([-. ]+)?(\d+)?([-. ]+)?(.*)$/;
//                            1    2                   3         4              5         6    7         8     9          10    11         12
/* eslint-disable max-len */

const makeSortable = (objectNumber) => {
  const tokens = objectNumberPattern.exec(objectNumber);

  if (!tokens) {
    return objectNumber;
  }

  return (
    [3, 6, 8, 10, 12]
      .map((i) => tokens[i])
      .map((token) => (isNumber(token) ? token.padStart(6, '0') : token))
      .filter((part) => !!part)
      .join(' ')
      .trim()
  );
};

export const computeSortableObjectNumber = ({ data }, Immutable) => {
  const commonData = data.get('ns2:collectionobjects_common');
  const objectNumber = commonData.get('objectNumber');

  return Immutable.fromJS({
    'ns2:collectionobjects_pahma': {
      sortableObjectNumber: makeSortable(objectNumber),
    },
  });
};

export const transformSortableObjectNumberSearch = ({ data: objectNumber }) => makeSortable(objectNumber);
