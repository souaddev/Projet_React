import React, { Component } from "react";
import { Alert } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText,Button } from 'reactstrap';
import "../index.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);

      // Setting up functions
      this.onChangeAdminEmail = this.onChangeAdminEmail.bind(this);
      this.onChangeAdminPassword = this.onChangeAdminPassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.props.Connected();
      this.state = {
        email: '',
        password: '',
        error:''
      };
  
  }

  
  onChangeAdminEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangeAdminPassword= (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmit= (e) => {
    e.preventDefault()

// const email=this.state.email;
// const password=this.state.email;
//     fetch("http://localhost:3002/login",{
//       headers:{
//         'Content-Type':'applications/json'
//       },
//       method : 'post',
//       body:JSON.stringify({
//         email,password
//       })
//     })
//     .then(res=>res.json())
//     .then(res=> console.log(res.data))
//     .then(res=>{
//       if(res.sucess)
//       {
//         alert("welcome")
//       }
//       else{
//         alert("Email  is incorrect")
//       }
//     })
const adminObject = {
  email: this.state.email,
  password: this.state.password
};



    axios.post('http://localhost:4000/admin/login', adminObject)
      .then(res => 
     { if(!res.data.error){
     
          window.location="/"
     }else{
      this.setState({error:res.data.msg})
     }
     }
     );

    this.setState({
      email: '',
      password: '',
    });
  }
    render() { 
     
        return ( 
            <div className="loginForm">
                <img className="image-login" src="https://live.staticflickr.com/6015/6012326771_b50ba0fa37_b.jpg" alt="book"></img>
            <div className="login-info">
            <div className="login-title">LOGIN</div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup controlId="Email">
                <Label>Email</Label>
                <Input value={this.state.email}  onChange={this.onChangeAdminEmail}
                  id="email" type="email" />
              </FormGroup>

              <FormGroup controlId="Password">
                <Label>Password</Label>
                <Input 
                  value={this.state.password} onChange={this.onChangeAdminPassword}
                 
                  id="password"
                  type="password" />
              </FormGroup>
               {
               this.state.error?
                  <Alert color="danger">
                  {this.state.error} <a href="#" className="alert-link"></a>
                 </Alert> : ""
               }
             
                <br></br>
              <Button outline color="danger" size="lg" block="block" type="submit">
               Login
              </Button>
            </Form>
            </div>
          </div>
            
         );
    }
}
 
export default Login;