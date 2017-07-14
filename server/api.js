'use strict'
const api = require('express').Router()
const db = require('../db')
const { User, Location } = require('../db/models')
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
//==============  GET Routes =================
api.get('/campuses', (req, res, next) => {
  Location.findAll()
  .then( locations => {
    res.send(locations)
  })
  .catch(next);
})
api.get('/campuses/:campusId', (req, res, next) => {
  Location.findOne({
    where: {
      id: req.params.campusId
    }
  })
  .then(campuses => {
    res.send(campuses);
  })
  .catch(next);
})
api.get('/campuses/:campusId/students', (req, res, next) => {
  User.findAll({
    where: {
      locationId: req.params.campusId,
      userType: 'Student'
    }
  })
  .then(users => {
    res.send(users);
  })
  .catch(next);
})
api.get('/students', (req, res, next) => {
  User.findAll({
    where: {userType: 'Student'}
  })
  .then( locations => {
    res.send(locations)
  })
  .catch(next);
})
api.get('/students/:studentId', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.studentId
    }
  })
  .then(student => {
    res.send(student);
  })
  .catch(next);
})
api.get('/students/:studentId/campuses', (req, res, next) => {
  // added route for listing all campuses one might have in addition
  User.find({
    where: {
      id: req.params.studentId
    }
  })
  .then(user => {
    res.send(user.locations);
  })
  .catch(next);
})

//==============  POST Routes =================

api.post('/student', (req, res, next) => {
  User.create({
  name: req.body.name,
  email: req.body.email,
  userType: req.body.userType,
  details: req.body.details,
  password: req.body.password,
  locationId: req.body.locationId
})
.then(createdStudent => {
  res.status(201).send(createdStudent);
})
.catch(next);
})

api.post('/campus', (req, res, next) => {
  Location.create({
  name: req.body.name,
  photo: req.body.photo,
  details: req.body.details,
  locationType: req.body.locationType
})
.then(createdLocation => {
  res.status(201).send(createdLocation);
})
.catch(next);
})

//==============  PUT Routes =================

api.put('/campus/:campusId', (req, res, next) => {
  Location.update(
  {
    name: req.body.name,
    photo: req.body.photo,
    details: req.body.details,
    locationType: req.body.locationType
  },
  {where: {id: req.params.campusId},
  returning: true }
)
.then(updatedCampus => {
  // console.log('>>===> ', updatedCampus[1][0].id) // depth of object to get key name
  if(updatedCampus) res.send(updatedCampus)
  else res.sendStatus(404);
})
.catch(next);
})
api.put('/student/:studentId', (req, res, next) => {
  User.update(
  {
    name: req.body.name,
    email: req.body.email,
    userType: req.body.userType,
    details: req.body.details,
    password: req.body.password
  },
  {where: {id: req.params.studentId},
  returning: true }
)
.then(updatedStudent => {
  if(updatedStudent) res.send(updatedStudent)
  else res.sendStatus(404);
})
.catch(next);
})
api.put('/student/:studentId/:campusId', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.studentId
    }
  })
  .then(student => student.setLocation(req.params.campusId))
  .then(updatedStudent => {
    if(updatedStudent) res.send(updatedStudent)
    else res.sendStatus(404);
  })
  .catch(next);

})

//==============  DELETE Routes =================

api.delete('/campuses/:campusId', (req, res, next) => {
  Location.destroy({
  where: {
    id: req.params.campusId
  }
})
.then(destroyedLocation => {
  if(destroyedLocation) res.status(204).redirect('/')
  else res.sendStatus(404);
})
.catch(next);
})
api.delete('/students/:studentId', (req, res, next) => {
  User.destroy({
  where: {
    id: req.params.studentId
  }
})
.then(destroyedUser => {
  if(destroyedUser) res.sendStatus(204)
  else res.sendStatus(404);
})
.catch(next);
})


module.exports = api