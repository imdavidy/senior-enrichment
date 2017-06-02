import {
  GET_USER
} from '../constants';

const initialStudentState = {
  currentStudent: {}
}

export default function (state = initialStudentState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_USER:
      newState.currentStudent = action.currentStudent;
      break;

    default:
      return state;

  }

  return newState;
}

