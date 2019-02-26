import React from 'react';

import {
  formatKeyValueByType,
  getLastKeyValueFromObject,
} from '../../global/utils/FormatHelpers';

import defaultBikeImg from '../../media/img/bike.png';

import './css/MasterListItem.css';

const keys = [
  {
    name: 'title',
    label: '',
    type: 'link',
    href: '/bikes/{{linkParam}}',
    linkParam: 'id',
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
    name: 'address',
    label: '–',
    type: 'string',
  },
  {
    name: 'updated_at',
    label: 'Reported on: ',
    type: 'date',
    format: 'ddd MMM DD YYYY',
  },
];

const imgKey = {
  name: 'media.image_url_thumb',
  type: 'image',
  format: 'thumbnail',
  default: defaultBikeImg,
};

const MasterListItem = ({ item }) => {
  if (item) {
    const imgSrc = getLastKeyValueFromObject(imgKey.name, item);

    return (
      <div className="MasterListItem">
        <div className="MasterListItem__container">
          <div className="MasterListItem__img" key={imgKey.name}>
            <img
              alt={imgSrc || 'default'}
              className={`Image Image--${imgKey.format}`}
              src={imgSrc || imgKey.default}
            />
          </div>
          <div className="MasterListItem__infos">
            {keys.map(key => (
              <div
                className={`MasterListItem__property MasterListItem__property--${key.name}`}
                key={key.name}
              >
                {key.label
                  && <div className="MasterListItem__property__label">{key.label}</div>
                }
                <div className="MasterListItem__property__value">
                  {formatKeyValueByType(key, item)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MasterListItem;
