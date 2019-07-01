import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const selectIncidentsDomain = prop('incidents');

export const selectListDomain = createSelector(
  selectIncidentsDomain,
  prop('list')
);

export const selectLoadingDomain = createSelector(
  selectIncidentsDomain,
  prop('loading')
);

export const selectIncidentsErrorDomain = createSelector(
  selectIncidentsDomain,
  prop('error')
);

export const selectSelectedBikeDomain = createSelector(
  selectIncidentsDomain,
  prop('selected')
);
