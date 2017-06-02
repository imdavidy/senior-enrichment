import React from 'react';
import {connect} from 'react-redux';
import Student from '../components/Student';

const mapStateToProps = (state) => {
  console.log('hey~~~ from StudentContainer: ', state)
  return {
    currentStudent: state.student.currentStudent
  };
}

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;