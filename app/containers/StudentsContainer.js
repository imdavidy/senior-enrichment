import React from 'react';
import {connect} from 'react-redux';
import Students from '../components/Students';
import {removeStudent} from '../action-creators/student'

const mapStateToProps = (state) => {
  return {
    students: state.students.studentsList,
    campuses: state.campuses.campusesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeStudent: (studentId) => {
      dispatch(removeStudent(studentId));
    }
  }
}

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default StudentsContainer;