import React from 'react';
import {connect} from 'react-redux';
import Campuses from '../components/Campuses';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses.campusesList
  };
}

const CampusesContainer = connect(mapStateToProps)(Campuses);

export default CampusesContainer;