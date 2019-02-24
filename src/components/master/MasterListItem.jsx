import React from 'react';

const MasterListItem = ({ item }) => {
  if (item) {
    return (
      <div className="MasterListItem">
        <div className="MasterListItem__container">
          {Object.keys(item).map(key => (
            typeof item[key] !== 'object'
              && (
                <div className="MasterListItem__property" key={key}>
                  <div className="MasterListItem__property__name">{key}</div>
                  <div className="MasterListItem__property__value">{item[key]}</div>
                </div>
              )
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default MasterListItem;
