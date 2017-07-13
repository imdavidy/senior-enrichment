import React, {Component} from 'react';
import CampusesContainer from '../containers/CampusesContainer';

export default function App (props) {
  return (
    <div className="col-lg-12">
      <nav id="main" className="navbar navbar-nav">
        <h4> Welcome to Margaret Hamilton Interplanetary Academy of JavaScript</h4>
        <button> Home </button>
        <button> Students </button>
      </nav>
      <div>
        { props.children }
      </div>
    </div>
  );
}
