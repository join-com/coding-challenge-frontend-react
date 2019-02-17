import React from 'react';
import { Link } from 'react-router-dom';
import { toHumanReadableFormat } from '../utils/date';
import './ListView.css';

const listView = props => (
  <ul className="incidents__list">
    {props.items.map(item => (
      <li key={item.id} className="incidents__item">
        <img
          src={
            item.media.image_url_thumb
              ? item.media.image_url_thumb
              : process.env.PUBLIC_URL + '/bike-image-missing.jpg'
          }
          alt={item.title}
          onError={e => {
            e.target.onerror = null;
            e.target.src = process.env.PUBLIC_URL + '/bike-image-missing.jpg';
          }}
        />
        <div className="incidents__item--description">
          <Link to={`/case/${item.id}`} style={{ marginBottom: '1rem' }}>
            <h3>{item.title}</h3>
          </Link>
          <div>
            {item.description ? item.description : 'DESCRIPTION MISSING'}
          </div>
          <div>
            {toHumanReadableFormat(item.occurred_at)} - {item.address}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default listView;
