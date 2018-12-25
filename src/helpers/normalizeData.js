/**
 * Convert array to collection
 * @param {Array} array for transformation
 * @returns {Object}
 */
export const createCollectionFromArray = (array = []) => {
  const collection = {};
  array.forEach(item => {
    collection[item.id] = item;
  });
  return collection;
};
