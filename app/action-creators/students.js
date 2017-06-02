import { GET_USERS } from '../constants';
import axios from 'axios';

export const getStudents = students => ({
  type: GET_USERS,
  studentsList: students
})

export const fetchStudents = () => {
  return dispatch => {
    axios.get('/api/students')
    .then(results => results.data)
    .then(results => {
      dispatch(getStudents(results))
    });
  };
}