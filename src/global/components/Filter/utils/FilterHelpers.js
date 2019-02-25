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
      [filterKey]: paramFilterName,
    };
  }, {});
}

export function formatFiltersValuesToDataParams(values, filters) {
  return filters.reduce((filtersParams, filter) => {
    const filterKey = filter.name;
    const filterKeyValue = values[filterKey];

    return {
      ...filtersParams,
      [filterKey]: filterKeyValue,
    };
  }, {});
}

const FilterHelpers = {
  initFiltersValues,
  formatDataFiltersParamsToValues,
  formatFiltersValuesToDataParams,
};

export default FilterHelpers;
