import React from 'react';

import { formatKeyValueByType } from '../../global/utils/FormatHelpers';

import I18n from '../../utils/I18n';

import './css/DetailInfos.css';

const keys = [
  {
    name: 'title',
    label: '',
    type: 'string',
  },
  {
    name: 'occurred_at',
    label: I18n.t('en.data.attribute.occurredAt.label'),
    type: 'date',
    format: 'ddd MMM DD YYYY',
  },
  {
    name: 'address',
    label: I18n.t('en.data.attribute.address.label'),
    type: 'string',
  },
  {
    name: 'description',
    label: I18n.t('en.data.attribute.description.label'),
    type: 'string',
  },
];

const DetailInfos = ({ item }) => {
  if (item) {
    return (
      <div className="DetailInfos">
        <div className="DetailInfos__container">
          <div className="DetailInfos__infos">
            {keys.map(key => (
              <div
                className={`DetailInfos__property DetailInfos__property--${key.name}`}
                key={key.name}
              >
                {key.label
                  && <div className="DetailInfos__property__label">{key.label}</div>
                }
                <div className="DetailInfos__property__value">
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

export default DetailInfos;
