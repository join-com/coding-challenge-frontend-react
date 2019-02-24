import React from 'react';
import PropTypes from 'prop-types';

import { bemCls } from '../../utils/ClassNameHelpers';

const DataStateNotifier = ({
  resetDataError,
  dataError,
  dataLoading,
  children,
}) => {
  if (dataError) {
    return (
      <div className="DataStateNotifier DataStateNotifier--error">
        <div className="DataStateNotifier__container">
          <div className="DataStateNotifier__states">
            <h4 className="DataStateNotifier__error">{dataError}</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="DataStateNotifier">
      {(dataLoading)
        && (
        <h4 className="DataStateNotifier__actions">
          {dataLoading}
        </h4>
        )
      }

      <div className={`DataStateNotifier__container ${
        bemCls('DataStateNotifier__container', '--loading', dataLoading)}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DataStateNotifier;

DataStateNotifier.propTypes = {
  resetDataError: PropTypes.func,
  dataError: PropTypes.string,
  dataLoading: PropTypes.string,
  children: PropTypes.node,
};

DataStateNotifier.defaultProps = {
  resetDataError: () => {},
  dataError: '',
  dataLoading: '',
  children: <div />,
};
