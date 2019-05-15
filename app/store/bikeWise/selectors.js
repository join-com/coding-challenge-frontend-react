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

const makeSelectPage = () => createSelector(
  selectRoot,
  (rootState) => rootState.get('page')
);

export {
  selectRoot,
  makeSelectItemsError,
  makeSelectItemsData,
  makeSelectPage,
};
