import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap';
import {signInWithGoogle} from '../../../src/firebase/firebase.util';
import firebase from 'firebase/app';


export default class LoginForm extends Component {
constructor(){
  super();
  this.state={
    email: '',
    password: '',
    authenticated:null,
    loggedIn:false
  };
}

logout=()=>{
  this.setState({loggedIn:false});
}

handleEmailFieldChange=(e)=>{
  this.setState({email: e.target.value});
}

handlePassFieldChange=(e)=>{
  this.setState({password: e.target.value});
  }

  submit=(e)=>{
   e.preventDefault();
     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
     .then((user)=>{
       console.log(user);
       alert(`Welcome ${user.user.displayName}`);
       this.setState({authenticated:true})
    }).catch(e=>{
     this.setState({authenticated:false});
    });
  }

googleLogin=()=>{
    signInWithGoogle().then((result) => {
      alert(`Welcome ${result.user.displayName}`);
      this.setState({authenticated:true})
    }
    ).catch(e=>{
      this.setState({authenticated:false});
     })
  }




  render() {
    return (
      <div>
        {this.state.authenticated===false?<p style={{color:"red"}}>Invalid Username/Password</p>:null}
    <Form onSubmit={(e)=>this.submit(e)}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"  placeholder="Enter email" onChange={(e)=>this.handleEmailFieldChange(e)}/>
      <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  placeholder="Password" onChange={(e)=>this.handlePassFieldChange(e)}/>
  </Form.Group>
  <div>
  <Button variant="primary" type="submit" >
    Login
  </Button>
  <Button style={{float:"right"}} variant="dark"  onClick={()=>this.googleLogin()}>Sign In with Google</Button>
  </div>
</Form>
      </div>
    )
  }
}
