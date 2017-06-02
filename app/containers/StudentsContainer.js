import React from 'react';
import {connect} from 'react-redux';
import Students from '../components/Students';

const mapStateToProps = (state) => {
  return {
    students: state.students.studentsList
  };
}

const StudentsContainer = connect(mapStateToProps)(Students);

export default StudentsContainer;