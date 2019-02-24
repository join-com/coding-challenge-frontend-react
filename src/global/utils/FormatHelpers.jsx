import React from 'react';
import { timestampToDate } from './DatetimeHelpers';

export function formatKeyValueByType(value, key) {
  if (key) {
    switch (key.type) {
      case 'date':
        return value ? timestampToDate(value, key.format) : '';

      case 'image':
        return (
          <img
            alt={value || 'default'}
            className="Image"
            src={value || key.default}
          />
        );

      default:
        return value;
    }
  }
  return value;
}

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

const FormatHelpers = {
  formatKeyValueByType,
  getLastKeyValueFromObject,
};

export default FormatHelpers;
