import React, {Component} from 'react';
import {Link} from 'react-router';


export default function Campus (props) {
  console.log('PROPS on Campus: ', props)
  const currentCampus = props.currentCampus;
  const campusId = props.params.campusId;
  const students = props.campusMembers
  console.log('Members: ', students)
  return (
    <div id="campus" className="container-fluid">
      <div className="col-xs-2">
        <h2>Campus Information</h2>
        <div>
          <h4>{currentCampus.id}  {currentCampus.name}</h4>
        </div>
        <div>
        {students.map(student => {
          return (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                <span>{student.name}</span>
              </Link>
            </li>
          );
        })}
      </div>
      </div>
      <div className="col-xs-10">

      </div>
    </div>
  );
}