import React from 'react';
import {connect} from 'react-redux';
import Campus from '../components/Campus';

const mapStateToProps = (state) => {
  return {
    currentCampus: state.campus.currentCampus,
    campusMembers: state.campus.campusMembers
  };
}

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;