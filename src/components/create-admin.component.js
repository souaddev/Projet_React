import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAdminPassword = this.onChangeAdminPassword.bind(this);
    this.onChangeAdminEmail = this.onChangeAdminEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      password: '',
      email: '',
    }
  }

  onChangeAdminPassword(e) {
    this.setState({ password: e.target.value })
  }

  onChangeAdminEmail(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const adminObject = {
        password: this.state.password,
        email: this.state.email,
    };

    axios.post('http://localhost:4000/admin/create-admin', adminObject)
      .then(res => console.log(res.data));

    this.setState({
        password: '',
         email: '',
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeAdminEmail} />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" value={this.state.password} onChange={this.onChangeAdminPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Administrator
        </Button>
      </Form>
    </div>);
  }
}
