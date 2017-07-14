'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory, Route, IndexRedire, IndexRoute } from 'react-router' // (IndexRedire)

import { fetchStudents } from './action-creators/students';
import { fetchStudent } from './action-creators/student';
import { fetchCampuses } from './action-creators/campuses';
import { fetchCampus, fetchMembers } from './action-creators/campus';

import App from './components/App';
import Home from './components/Home';
import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';

import store from './store'

const onStudentsEnter = function() {
  store.dispatch(fetchStudents());
}
const onStudentEnter = function(nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(fetchStudent(studentId));
}
const onCampusesEnter = function() {
  store.dispatch(fetchCampuses());
}
const onCampusEnter = function(nextRouterState) {
  console.log('nextRouterState from onCampusEnter: ', nextRouterState)
  const campusId = nextRouterState.params.campusId;
  store.dispatch(fetchCampus(campusId));
  store.dispatch(fetchMembers(campusId));
}

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ App }  onEnter={onCampusesEnter} >
        <Route path="/students" component={ StudentsContainer } onEnter={onStudentsEnter} />
        <Route path="/students/:studentId" component={StudentContainer} onEnter={onStudentEnter} />
        <Route path="/campuses" component={ CampusesContainer } />
        <Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter} />
        <IndexRoute component={CampusesContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)