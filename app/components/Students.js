import React, {Component} from 'react';
import {Link} from 'react-router';


export default function Students (props) {
  console.log('PROPS: ', props)
  const students = props.students;
  console.log('student: ', students)
  return (
    <div id="students" className="container-fluid">
      <div className="col-xs-2">
        <h2>Students</h2>
        <div>
          {students.map(student => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <span>{student.name}</span>
                </Link>
                <span className="campuses">
                  <Link to={`/campuses/${student.locationId}`}>
                    {student.locationId}
                  </Link>
                </span>
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