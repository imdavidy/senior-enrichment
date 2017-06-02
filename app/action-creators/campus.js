import { GET_CAMPUS, GET_MEMBERS } from '../constants';
import axios from 'axios';

export const getCampus = campus => ({
  type: GET_CAMPUS,
  currentCampus: campus
})

export const getMembers = members => ({
  type: GET_MEMBERS,
  campusMembers: members
})

export const fetchCampus = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
    .then(result => result.data)
    .then(result => {
      dispatch(getCampus(result))
    });
  };
}
export const fetchMembers = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}/students`)
    .then(result => result.data)
    .then(result => {
      console.log('results: ', result)
      dispatch(getMembers(result))
    });
  };
}