import React from 'react';
import { Link } from 'react-router-dom';
import { timestampToDate } from './DatetimeHelpers';

export function getLastKeyValueFromObject(key, item) {
  const keys = key && key.split('.');

  function getObjectPropertyKeyValue(keyNames, object) {
    if (keyNames && keyNames.length) {
      const keyName = keyNames.shift();
      const value = object && object[keyName];

      if (Array.isArray(value) || typeof value !== 'object' || value === null) {
        return value;
      }

      return getObjectPropertyKeyValue(keyNames, value);
    }

    return undefined;
  }

  return getObjectPropertyKeyValue(keys, item);
}

export function formatKeyValueByType(key, item) {
  if (key && key.type && key.name) {
    const value = getLastKeyValueFromObject(key.name, item);

    switch (key.type) {
      case 'link':
        const href = key.href.replace('{{linkParam}}', key.linkParam
          ? item[key.linkParam]
          : item.id);

        return <Link to={href}>{value || ''}</Link>;

      case 'date':
        return value ? timestampToDate(value, key.format) : '';

      default:
        return value;
    }
  }

  return '';
}

export function getItemById(id, items) {
  return items && items.find(item => item.id === id);
}

const FormatHelpers = {
  formatKeyValueByType,
  getLastKeyValueFromObject,
  getItemById,
};

export default FormatHelpers;
