import React from 'react';

import I18n from '../../utils/I18n';

import MasterListItem from './MasterListItem';

const MasterList = ({ data, dataLoading }) => {
  if (data && !dataLoading) {
    return (
      <div className="MasterList">
        <div className="MasterList__container">
          {data.length
            ? data.map((item) => (
              item && item.id
                ? <MasterListItem key={item.id} item={item} />
                : null
              ))
            : (
              <div className="MasterList__list MasterList__list--empty">
                <h4 className="MasterList__states">
                  {I18n.t('en.data.states.empty')}
                </h4>
              </div>
            )
          }
        </div>
      </div>
    );
  }

  return null;
};

export default MasterList;
