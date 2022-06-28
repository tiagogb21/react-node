import axios from 'axios';
import {BASE_URL} from './constants';

export const axiosApi = () => axios.get(BASE_URL)
  .then(response => {
    return response.data.results;
});
