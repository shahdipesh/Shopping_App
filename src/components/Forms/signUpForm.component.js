import React from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import {createUserProfileDocument,auth} from '../../firebase/firebase.util';
export default class SignUp extends React.Component {
  constructor(){
    super();
    this.msg=null;
    this.state={
      displayName:'',
      email: '',
      password: '',
      confirmPassword: '',
      passwordMatch:true,
      displayMessage: false,
    };
  }

  handleNameChange=(e)=>{this.setState({displayName:e.target.value})}
  
  handleEmailChange=(e)=>{this.setState({email: e.target.value})};

  checkPasswordMatches=()=>{
    if(this.state.password!==this.state.confirmPassword){
      this.setState({passwordMatch:false});
      return false;
    }
    else{
      this.setState({passwordMatch:true});
      return true;
    }
  }

  handlePassFieldChange=(e)=>{
    this.setState({password: e.target.value},()=>this.checkPasswordMatches());
    
  }

  handleConfirmPassFieldChange=(e)=>{
    this.setState({confirmPassword: e.target.value},()=>this.checkPasswordMatches()); 
    }

    showMessage(text,status){
      this.msg=(<Alert  variant={status}>{text}</Alert>);
      this.setState({displayMessage:true})
      setTimeout(()=>this.setState({displayMessage:false}), 3000)
    }

    handleSubmit=async(e)=>{
    e.preventDefault();
    if(!this.checkPasswordMatches()){
      this.showMessage("Password does not match","danger");
      return;
    }
    try{
    const userObj= await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
    createUserProfileDocument({displayName:this.state.displayName,uid:userObj.user.uid,email:this.state.email});
    this.showMessage("Success","success");
    }
    catch(e){
      this.showMessage(e.message,"danger");
    };
 
  }

  render() {
    return (
        <div>
        {this.state.displayMessage?this.msg:null}
        <Form onSubmit={(e)=>this.handleSubmit(e)}>
        <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control  placeholder="Enter Name" onChange={(e)=>this.handleNameChange(e)} />
    {this.state.displayName}
  </Form.Group>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control key="1" type="email"  placeholder="Enter email" onChange={(e)=>this.handleEmailChange(e)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control key="2" type="password"  placeholder="Password" onChange={(e)=>this.handlePassFieldChange(e)}/>
   </Form.Group>
   <Form.Group controlId="formBasicPassword">
     {!this.state.passwordMatch?<p style= {{color:"red"}}>Password does not match</p>:null}
   <Form.Label>Confirm Password</Form.Label>
   <Form.Control key="3" type="password"  placeholder="Password" onChange={(e)=>this.handleConfirmPassFieldChange(e)} />
   </Form.Group>
  <div>
  <Button variant="primary" type="submit" >
    Sign Up
  </Button>
  
  </div>
</Form>
      </div>
    )
}
}
