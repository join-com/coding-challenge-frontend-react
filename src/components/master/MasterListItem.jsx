import React from 'react';

import {
  formatKeyValueByType,
  getLastKeyValueFromObject,
} from '../../global/utils/FormatHelpers';

import defaultBikeImg from '../../media/img/bike.png';

const keys = [
  {
    name: 'media.image_url_thumb',
    type: 'image',
    default: defaultBikeImg,
  },
  {
    name: 'title',
    label: '',
    type: 'string',
  },
  {
    name: 'description',
    label: '',
    type: 'string',
  },
  {
    name: 'occurred_at',
    label: '',
    type: 'date',
    format: 'ddd MMM DD YYYY',
  },
  {
    name: 'updated_at',
    label: 'Reported on:',
    type: 'date',
    format: 'ddd MMM DD YYYY',
  },
  {
    name: 'address',
    label: '–',
    type: 'string',
  },
];

const MasterListItem = ({ item }) => {
  if (item) {
    return (
      <div className="MasterListItem">
        <div className="MasterListItem__container">
          {keys.map(key => {
            const value = getLastKeyValueFromObject(key.name, item);

            return (
              <div className="MasterListItem__property" key={key.name}>
                <div className="MasterListItem__property__name">{key.label}</div>
                <div className="MasterListItem__property__value">
                  {formatKeyValueByType(value, key)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default MasterListItem;
