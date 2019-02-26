import { formatKeyValueByType } from '../../../utils/FormatHelpers';
import { dateToTimestamp } from '../../../utils/DatetimeHelpers';

export function initFiltersValues(filters) {
  return filters.reduce((filtersValues, filter) => {
    const filterKey = filter.name;

    return {
      ...filtersValues,
      [filterKey]: '',
    };
  }, {});
}

export function formatDataFiltersParamsToValues(params, filters) {
  return filters.reduce((filtersValues, filter) => {
    const filterKey = filter.name;
    const paramFilterName = params[filterKey];

    return {
      ...filtersValues,
      [filterKey]: formatKeyValueByType(filter, paramFilterName),
    };
  }, {});
}

function formatFilterValueToParamByType(filter, value) {
  switch (filter.type) {
    case 'date':
      return dateToTimestamp(value, 'YYYY-MM-DD');

    default:
      return value;
  }
}

export function formatFiltersValuesToDataParams(values, filters) {
  return filters.reduce((filtersParams, filter) => {
    const filterKey = filter.name;
    const filterKeyValue = values[filterKey];

    return {
      ...filtersParams,
      [filterKey]: formatFilterValueToParamByType(filter, filterKeyValue),
    };
  }, {});
}

const FilterHelpers = {
  initFiltersValues,
  formatDataFiltersParamsToValues,
  formatFiltersValuesToDataParams,
};

export default FilterHelpers;
