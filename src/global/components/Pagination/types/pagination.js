import {
  shape,
  number,
} from 'prop-types';

const pagination = shape({
  totalElements: number,
  totalPages: number,
  page: number,
});

export default pagination;
