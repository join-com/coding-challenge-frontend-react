import axios from 'axios';

export default axios.create({
  baseURL: 'https://bikewise.org:443/api/v2/',
});
