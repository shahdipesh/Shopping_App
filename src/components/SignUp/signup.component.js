import React, { Component } from 'react'
import './signup.scss';
import SignUpForm from '../Forms/signUpForm.component';
export default class SignUp extends Component {
    render() {
        return (
            <div >
                <div className="text">
                 <span className="signup-header">Don't Have an account account?</span>
                 <br></br>
                 <span className="signup-text"> Sign up with your email </span>
                </div>
                 <SignUpForm></SignUpForm>
           </div>
        
        )
    }
}
