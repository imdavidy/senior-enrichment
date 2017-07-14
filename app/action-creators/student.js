import { GET_USER, CREATE_USER } from '../constants';
import axios from 'axios';
import { fetchStudents } from './students'

export const getStudent = student => ({
  type: GET_USER,
  currentStudent: student
})
export const createUser = newUser => ({
  type: CREATE_USER,
  currentStudent: newUser
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

export const removeStudent = studentId => {
  return dispatch => {
    axios.delete(`/api/students/${studentId}`)
    .then(result => result.data)
    .then(result => {
      dispatch(fetchStudents())
    })
  }
}

export const addUser = user => {
  return dispatch => {
    axios.post(`/api/student`, user)
    .then(res => res.data)
    .then(newUser => {
      dispatch(fetchStudents())
    })
  }
}