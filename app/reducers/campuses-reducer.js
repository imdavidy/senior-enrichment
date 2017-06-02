import {
  GET_CAMPUSES
} from '../constants';

const initialCampusesState = {
  campusesList: []
}

export default function (state = initialCampusesState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_CAMPUSES:
      newState.campusesList = action.campusesList;
      break;

    default:
      return state;

  }

  return newState;
}

