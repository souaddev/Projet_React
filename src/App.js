import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

import CreateBook from "./components/create-book.component";
import BookList from "./components/book-list.component";

import Login from "./components/loginForm.component";
import Login2 from "./components/login.component";
import CreateAdmin from "./components/create-admin.component";
import MyNavBar from "./components/navbar.component";
import { Component } from "react";

export default class App extends React.Component {
  state={
      isLogged:false
  }
  HandleConnect=()=>{
      this.setState({isLogged:true});
  }
  render(){
  return (<Router>
    <div className="App">
     {!this.state.isLogged?<MyNavBar/>:''}
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
                <Route path="/create-book" component={CreateBook} />
                <Route path="/book-list" component={BookList} />
                <Route path="/login" render={(props)=> <Login Connected={this.HandleConnect} ></Login>} />
                <Route path="/login2" component={Login2} />
                <Route path="/create-admin" component={CreateAdmin} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Router>)}
    
}
