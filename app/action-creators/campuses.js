import { GET_CAMPUSES } from '../constants';
import axios from 'axios';

export const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campusesList: campuses
})

export const fetchCampuses = () => {
  return dispatch => {
    axios.get('/api/campuses')
    .then(results => results.data)
    .then(results => {
      dispatch(getCampuses(results))
    });
  };
}