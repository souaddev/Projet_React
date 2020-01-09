import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <header className="App-header">
        <Navbar expand="lg" bg="danger" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
        <div style={{fontSize:20,fontWeight:700,color:"#fcb110"}}> <img
        alt="image"
        src="https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     BIBLIOTHEQUE</div> 
    </Navbar.Brand>
          <Container>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>

              <Nav>
                <Link to={"/create-book"} className="nav-link">
                  Create Book
                </Link>
              </Nav>

              <Nav>
                <Link to={"/book-list"} className="nav-link">
                  List Book
                </Link>
              </Nav>
              <Nav>
                <Link to={"/login"} className="nav-link">
                 Login
                </Link>
              </Nav>

              <Nav>
                <Link to={"/login2"} className="nav-link">
                 Login2
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/create-admin"} className="nav-link">
                 Create admin
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

            </div>
        );
    }
}
 
export default NavBar;