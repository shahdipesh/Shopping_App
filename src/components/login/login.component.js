import React, { Component } from 'react'
import './login.scss';
import LoginForm from '../Forms/loginform.component';
export default class login extends Component {
    render() {
        return (
            <div className="login">
                <div className="text">
                 <span className="login-header">Already Have an account?</span>
                 <br></br>
                 <span className="login-text"> Sign in with your email and password</span>
                </div>
                <div className="form">
                 <LoginForm></LoginForm>
            </div>
        </div>
        )
    }
}
