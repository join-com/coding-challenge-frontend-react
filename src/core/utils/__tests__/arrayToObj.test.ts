import { arrayToObj } from '../arrayToObj';
import { arrayOfItems, indexedObject } from '../__mocks__/arrayToObj';

it('convert array to object with index id', (): void => {
    Object.is(arrayToObj(arrayOfItems, 'id'), indexedObject);
});
