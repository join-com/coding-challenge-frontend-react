import {
  bool,
  number,
  string,
  objectOf,
  oneOfType,
} from 'prop-types';

const filtersValues = objectOf(oneOfType([
  string,
  number,
  objectOf(bool),
]));

export default filtersValues;
