import React, {Component} from 'react';
import {Link} from 'react-router';


export default function Student (props) {
  console.log('PROPS on Student: ', props)
  const currentStudent = props.currentStudent;
  // const student = props.student;
  const studentId = props.params.studentId;
  return (
    <div id="student" className="container-fluid">
      <div className="col-lg-12">
        <h3>Student Information</h3>
        <div>
          <h4>
            <div>Student ID: {currentStudent.id} </div>
            <div>Name: <span>{currentStudent.name}</span></div>
            <div>School id: {currentStudent.locationId}</div>
            <div>School name: {currentStudent.locationId}</div>
          </h4>
        </div>
      </div>
      <div className="col-xs-10">

      </div>
    </div>
  );
}