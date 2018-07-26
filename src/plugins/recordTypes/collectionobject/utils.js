/* global document */
const isNumber = n =>
  !isNaN(parseFloat(n)) && isFinite(n);

/* eslint-disable */
const objectNumberPattern = /^([cC](ons|ONS)?[\-\. ]?)?([A-Za-z]+(-[A-Za-z]+)?)?([\-\. ])?(\d+)([\-\. ])?(\d+)?([\.\- ]+)?(\d+)?([\.\- ]+)?(.*)$/;
//                          1    2                   3         4              5         6    7         8     9          10    11         12
/* eslint-enable */

const pad = (s, len) =>
  (len - s.length > 0 ? s.padStart(5, '0') : s);

export const computeSortableObjectNumber = ({ data }, Immutable) => {
  const commonData = data.get('ns2:collectionobjects_common');

  let sortableObjectNumber = commonData.get('objectNumber');
  const objectNumber = commonData.get('objectNumber');

  const tokens = objectNumberPattern.exec(objectNumber);

  if (tokens) {
    const parts = [tokens[3], tokens[6], tokens[8], tokens[10], tokens[12]]
                .map(token => (isNumber(token) ? pad(token, 6) : token))
                .filter(part => !!part)
                .join(' ')
                .trim();
    sortableObjectNumber = parts;
  }

  return Immutable.fromJS({
    'ns2:collectionobjects_pahma': {
      sortableObjectNumber,
    },
  });
};

export const transformSortableObjectNumberSearch = ({ data }) =>
  computeSortableObjectNumber(data);

