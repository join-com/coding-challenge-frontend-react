import {
  shape,
  string,
} from 'prop-types';

const filter = shape({
  name: string,
  title: string,
  type: string,
  placeholder: string,
});

export default filter;
