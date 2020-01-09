import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BookTableRow from './BookTableRow';


export default class BookList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/book/')
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.books.map((res, i) => {
      return <BookTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}