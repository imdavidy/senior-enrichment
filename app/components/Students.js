import React, {Component} from 'react';
import {Link, Redirect} from 'react-router';


export default class Students extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      userType: 'Student',
      password: '',
      locationId: []
    };

    this.removeStudent = this.removeStudent.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  removeStudent(event) {
    event.preventDefault();
    const studentId = event.target.value
    this.props.removeStudent(studentId)
  }

  handleNameChange(event) {
      this.setState({ name: event.target.value });
      console.log("NAME", this.state.name)
    }
  handleEmailChange(event) {
      this.setState({ email: event.target.value });
      console.log("EMAIL", this.state.email)
    }
  handleTypeChange(event) {
      this.setState({ type: event.target.value });
      console.log("TYPE", this.state.type)
    }
  handlePasswordChange(event) {
      this.setState({ password: event.target.value });
      console.log("PASSWORD", this.state.password)
    }
  handleLocationChange(event) {
    console.log("=====================> ", event.target.value)
      this.setState({ locationId: event.target.value });
      console.log("LOCATION", this.state)
    }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    console.log('SUBMIT', this.state)
    this.props.addUser(this.state)
  }

 render(){
   console.log('PROPS: ', this.props)
   const students = this.props.students;
   console.log('student: ', students)
   const campuses = this.props.campuses;
   console.log('campuses: ', campuses)

   return (
     <div id="students" className="container-fluid">
       <div className="col-lg-6">
         <h3>Students</h3>
         <div>
           <h3 onClick={() => this.setState({showForm: !this.state.showForm})}>+</h3>
         </div>
         { this.state.showForm ?
           <div>
             <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>name:</label>
                <input
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              <br/>
              <label htmlFor='email'>email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              <br/>
              <label htmlFor='userType'>user type:</label>
              <select
                onChange={this.handleTypeChange}
                >
                <option>Student</option>
                <option>Instructor</option>
                <option>Administrator</option>
              </select>
              <br/>
              <label htmlFor='password'>password:</label>
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              <br/>
              <select onChange={this.handleLocationChange}>
                {
                  campuses.map(campus => (
                    <option value={`${campus.id}`} key={`${campus.id}`}>{campus.name}</option>
                  ))
                }
              </select>
              <br/>
              <button type="submit">Submit</button>
              </form>
           </div>
         : null}
         <hr></hr>
         <div>
           {students.map(student => {
             return (
               <li key={student.id}>
                 <Link to={`/students/${student.id}`}>
                   <span>{student.name}&nbsp;&nbsp;</span>
                 </Link>
                 <button value={`${student.id}`} onClick={this.removeStudent}> x </button>
                 <span className="campuses">
                   <Link to={`/campuses/${student.locationId}`}>
                     {students.locationId}
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
}