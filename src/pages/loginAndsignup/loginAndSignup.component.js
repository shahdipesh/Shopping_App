import React from 'react'
import Login from '../../components/login/login.component';
import './loginAndSignup.scss';
import SignUp from '../../components/SignUp/signup.component';
export default function loginAndSignup() {
    return (
        <div className="container">
            <div className="login">
               <Login />
            </div>
            <div className="signup">
                <SignUp />
                </div>
        </div>
    )
}
