import React, {Component} from 'react';
import CampusesContainer from '../containers/CampusesContainer';
import {Link} from 'react-router';


export default function App (props) {
  return (
    <div className="col-lg-12">
      <div className="col-lg-12">
        <h4> Welcome to Margaret Hamilton Interplanetary Academy of JavaScript</h4>

        <Link to={'/'}> Home </Link>
        <span> | </span>
        <Link to={'/students'}> Students </Link>
      </div>
      <div>
        { props.children }
      </div>
    </div>
  );
}
