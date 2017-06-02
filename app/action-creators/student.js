import { GET_USER } from '../constants';
import axios from 'axios';

export const getStudent = student => ({
  type: GET_USER,
  currentStudent: student
})

export const fetchStudent = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
    .then(result => result.data)
    .then(result => {
      dispatch(getStudent(result))
    });
  };
}