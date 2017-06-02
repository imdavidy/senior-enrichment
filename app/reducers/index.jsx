import { combineReducers } from 'redux';

import studentsReducer from './students-reducer';
import studentReducer from './student-reducer';
import campusesReducer from './campuses-reducer';
import campusReducer from './campus-reducer';

export default combineReducers({
  students: studentsReducer,
  student: studentReducer,
  campuses: campusesReducer,
  campus: campusReducer
})
