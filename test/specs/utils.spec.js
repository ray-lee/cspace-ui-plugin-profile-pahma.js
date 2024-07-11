import Immutable from 'immutable';
import { makeSortable, computeSortableObjectNumber } from '../../src/plugins/recordTypes/collectionobject/utils';

chai.should();

describe('utils', () => {
  context('sortableObjectNumber', () => {
    it('should compute the correct sortableObjectNumber', () => {
      const objectNumber = 'TEMP 2021.10';

      const sortableNumber = makeSortable(objectNumber);

      sortableNumber.should.equal('TEMP 002021 000010');
    });

    it('should compute a sortableObjectNumber when a record is saved', () => {
      const data = Immutable.fromJS({
        'ns2:collectionobjects_common': {
          objectNumber: 'TEMP 2021.10',
        },
      });

      const sortableData = Immutable.fromJS({
        'ns2:collectionobjects_pahma': {
          sortableObjectNumber: 'TEMP 002021 000010',
        },
      });

      const computedResult = computeSortableObjectNumber({ data }, Immutable);
      sortableData.should.eql(computedResult);
    });

    it('should re-compute a sortableObjectNumber if objectNumber is changed', () => {
      const data = Immutable.fromJS({
        'ns2:collectionobjects_common': {
          objectNumber: 'NEW 3022.20',
        },
        'ns2:collectionobjects_pahma': {
          sortableObjectNumber: 'TEMP 002021 000010',
        },
      });

      const sortableData = Immutable.fromJS({
        'ns2:collectionobjects_pahma': {
          sortableObjectNumber: 'NEW 003022 000020',
        },
      });

      const computedResult = computeSortableObjectNumber({ data }, Immutable);
      sortableData.should.eql(computedResult);
    });
  });
});
