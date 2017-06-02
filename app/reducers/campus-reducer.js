import {
  GET_CAMPUS,
  GET_MEMBERS
} from '../constants';

const initialCampusState = {
  currentCampus: {},
  campusMembers: []
}

export default function (state = initialCampusState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_CAMPUS:
      newState.currentCampus = action.currentCampus;
      break;

    case GET_MEMBERS:
      newState.campusMembers = action.campusMembers;
      break;

    default:
      return state;

  }

  return newState;
}

