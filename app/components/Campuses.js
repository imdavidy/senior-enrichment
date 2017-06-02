import React, {Component} from 'react';
import {Link} from 'react-router';


export default function Campuses (props) {
  console.log('PROPS from Campuses: ', props)
  const campuses = props.campuses;
  console.log('Campuses: ', campuses)
  return (
    <div id="campuses" className="container-fluid">
      <div className="col-xs-2">
        <h2>Campuses</h2>
        <div>
          {campuses.map(campus => {
            return (
              <li key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <img src='ugaArch.jpg' height="240"/>
                  <span>{campus.name}</span>
                </Link>
                <span className="campuses">
                  <Link to={`/campuses/${campus.locationId}`}>
                    {campus.locationId}
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