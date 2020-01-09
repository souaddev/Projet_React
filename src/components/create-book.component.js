import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBook extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: ''
    }
  }

  onChangeBookTitle(e) {
    this.setState({ title: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bookObject = {
      title: this.state.title,
    };

   

    this.setState({
      title: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Book title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeBookTitle} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create book
        </Button>
      </Form>
    </div>);
  }
}
