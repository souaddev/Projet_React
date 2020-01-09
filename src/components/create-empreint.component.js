import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentFirstName = this.onChangeStudentFirstName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentLastName = this.onChangeStudentLastName.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onChangeStudentCin = this.onChangeStudentCin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      idEtudiant: '',
      dateEmpreint: '',
      lastName: '',
      phone :'',
      cin:''
    }
  }

  onChangeStudentFirstName(e) {
    this.setState({ firstName: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentLastName(e) {
    this.setState({ lastName: e.target.value })
  }
 onChangeStudentPhone(e) {
    this.setState({ phone: e.target.value })
  }
  onChangeStudentCin(e) {
    this.setState({ cin: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      firstName: this.state.firstName,
      cin: this.state.cin,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    };

    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      firstName: '',
      email: '',
      lastName: '',
      phone :'',
      cin:''


    });
  }

  render() {
    return (<div style={{paddingLeft:90,paddingRight:80 ,marginTop:30,width:800}}>
      <Form onSubmit={this.onSubmit}>
        
      <h1>Creer un étudiant :</h1><br></br>
        <Form.Group controlId="Name">
          <Form.Label>CIN</Form.Label>
          <Form.Control required="true" type="text" value={this.state.cin} onChange={this.onChangeStudentCin} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>First Name</Form.Label>
          <Form.Control required="true" type="text" value={this.state.firstName} onChange={this.onChangeStudentFirstName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required="true" type="text" value={this.state.lastName} onChange={this.onChangeStudentLastName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control required="true" type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required="true" type="text" value={this.state.phone} onChange={this.onChangeStudentPhone} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}
