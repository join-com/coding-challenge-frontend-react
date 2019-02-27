import React from 'react';

import PropTypes from 'prop-types';
import filterType from './types/filter';
import filtersValuesType from './types/filtersValues';

import { bemCls } from '../../utils/ClassNameHelpers';

import FilterClearButton from './FilterClearButton';
import FilterSubmitButton from './FilterSubmitButton';
import FilterText from './FilterText';
import FilterDateRange from './FilterDateRange';

import './css/Filter.css';

const Filter = ({
  filters, filtersValues, className,
  handleFiltersChange, handleClearFilters, handleSubmitFilters,
}) => (
  <form
    name="Filter"
    className={`Filter ${className}`}
    onSubmit={handleSubmitFilters}
  >
    <div className={bemCls(`Filter ${className}`, '__container')}>
      <div className="FilterInputs">
        {filters.map((filter) => {
          const { name } = filter;

          const filterProps = {
            key: name,
            filter,
            value: filtersValues[name],
            handleFiltersChange: handleFiltersChange,
            className: bemCls(className, 'Input'),
          };

          switch (filter.type) {
            case 'date':
              return (
                <FilterDateRange
                  {...filterProps}
                  value={{
                    from: filtersValues[`${name}From`],
                    to: filtersValues[`${name}To`],
                  }}
                />
              );

            default:
              return <FilterText {...filterProps} />;
          }
        })}
      </div>

      <div className="FilterActions">
        <FilterSubmitButton
          handleSubmitFilters={handleSubmitFilters}
          className={bemCls(className, '__submitButton')}
        />

        <FilterClearButton
          handleClearFilters={handleClearFilters}
          className={bemCls(className, '__clearButton')}
        />
      </div>
    </div>
  </form>
);

export default Filter;

Filter.propTypes = {
  filters: PropTypes.arrayOf(filterType),
  filtersValues: filtersValuesType,
  className: PropTypes.string,
  handleFiltersChange: PropTypes.func,
  handleClearFilters: PropTypes.func,
  handleSubmitFilters: PropTypes.func,
};

Filter.defaultProps = {
  filters: [{}],
  filtersValues: {},
  className: '',
  handleFiltersChange: () => {},
  handleClearFilters: () => {},
  handleSubmitFilters: () => {},
};
