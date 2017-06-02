import React, {Component} from 'react';
import {Link} from 'react-router';


export default function Student (props) {
  console.log('PROPS on Student: ', props)
  const currentStudent = props.currentStudent;
  // const student = props.student;
  const studentId = props.params.studentId;
  return (
    <div id="student" className="container-fluid">
      <div className="col-xs-2">
        <h2>Student Information</h2>
        <div>
          <h4>{currentStudent.id}  {currentStudent.name}</h4>
        </div>
      </div>
      <div className="col-xs-10">

      </div>
    </div>
  );
}