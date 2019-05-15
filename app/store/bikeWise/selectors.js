import { createSelector } from 'reselect';

const selectRoot = (state) => state.get('bikeWise');


const makeSelectItems = () => createSelector(
  selectRoot,
  (rootState) => rootState.get('items')
);

const makeSelectItemsData = () => createSelector(
  makeSelectItems(),
  (itemsState) => itemsState.get('data')
);

const makeSelectItemsError = () => createSelector(
  makeSelectItems(),
  (itemsState) => itemsState.get('error')
);


export {
  selectRoot,
  makeSelectItemsError,
  makeSelectItemsData,
};
