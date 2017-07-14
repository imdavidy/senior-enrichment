import React from 'react';
import {connect} from 'react-redux';
import Student from '../components/Student';



const mapStateToProps = (state) => {
  console.log('StudentContainer state: ', state)
  // const currentLocation = state.campus
  // console.log('currentLocation: ', currentLocation)

  return {
    currentStudent: state.student.currentStudent
  };
}

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;