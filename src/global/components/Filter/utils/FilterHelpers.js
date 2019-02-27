import { formatKeyValueByType } from '../../../utils/FormatHelpers';
import { dateToTimestamp } from '../../../utils/DatetimeHelpers';

export function initFiltersValues(filters) {
  return filters.reduce((filtersValues, filter) => {
    const filterKey = filter.name;

    switch (filter.type) {
      case 'date':
        return {
          ...filtersValues,
          [`${filterKey}From`]: '',
          [`${filterKey}To`]: '',
        };

      default:
        return {
          ...filtersValues,
          [filterKey]: '',
        };
    }
  }, {});
}

export function formatDataFiltersParamsToValues(params, filters) {
  return filters.reduce((filtersValues, filter) => {
    const filterKey = filter.name;

    switch (filter.type) {
      case 'date':
        return {
          ...filtersValues,
          [`${filterKey}From`]: formatKeyValueByType({ ...filter, name: filter.from }, params),
          [`${filterKey}To`]: formatKeyValueByType({ ...filter, name: filter.to }, params),
        };

      default:
        return {
          ...filtersValues,
          [filterKey]: formatKeyValueByType(filter, params),
        };
    }
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

    switch (filter.type) {
      case 'date':
        const filterKeyValueFrom = values[`${filterKey}From`];
        const filterKeyValueTo = values[`${filterKey}To`];

        return {
          ...filtersParams,
          ...(filterKeyValueFrom
            ? { [filter.from]: formatFilterValueToParamByType(filter, filterKeyValueFrom) }
            : {}
          ),
          ...(filterKeyValueTo
            ? { [filter.to]: formatFilterValueToParamByType(filter, filterKeyValueTo) }
            : {}
          ),
        };

      default:
        const filterKeyValue = values[filterKey];

        return {
          ...filtersParams,
          [filterKey]: formatFilterValueToParamByType(filter, filterKeyValue),
        };
    }
  }, {});
}

const FilterHelpers = {
  initFiltersValues,
  formatDataFiltersParamsToValues,
  formatFiltersValuesToDataParams,
};

export default FilterHelpers;
