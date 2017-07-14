import {
  GET_USERS,
  DELETE_USER
} from '../constants';

const initialStudentsState = {
  studentsList: []
}

export default function (state = initialStudentsState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_USERS:
      newState.studentsList = action.studentsList;
      break;

    case DELETE_USER:
      newState.studentsList = action.studentsList;
      break;

    default:
      return state;

  }

  return newState;
}

