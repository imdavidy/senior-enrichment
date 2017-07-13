import React, {Component} from 'react';
import {Link} from 'react-router';

import Campuses from './Campuses'


export default function Home (props) {
  return (
    <div id="navbar" className="container-fluid">
      <div className="nav">

      </div>
      <div className="body">
        <Campuses />
      </div>
      <div className="col-xs-10">

      </div>
    </div>
  );
}