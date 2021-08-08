import './App.scss';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Checkout from './components/checkout/checkout.component';
import HatsPage from './pages/hatsPage/hatsPage.component';
import JacketsPage from './pages/jacketsPage/jacketsPage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import Login from './pages/loginAndsignup/loginAndSignup.component';
import {createUserProfileDocument,auth} from './firebase/firebase.util';
import setCurrentUser from './redux/user/user.actions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

 class App extends React.Component  {
  
  componentDidMount() {
   auth.onAuthStateChanged(async (userAuth)=>{
      if(userAuth){
       this.props.setCurrentUser(userAuth);
        await createUserProfileDocument(userAuth);
      }
    })
  }
  

  render(){
  return (
    <div className="App">     
  <Router>
  <Header ></Header>
  <Route path="/shop/hats" exact component={HatsPage}></Route>
  <Route path="/shop/jackets" exact component={JacketsPage}></Route>
  <Route path="/shop" exact component={ShopPage}></Route>
  <Route path="/checkout" exact component={Checkout}></Route>
  <Route path="/login" exact> {this.props.user?<Redirect to="/" />:<Login></Login>}
  </Route>
  <Route path="/" exact component={HomePage}></Route>
 </Router>
 </div>
  );
}
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentUser: (userAuth) => {
      dispatch(setCurrentUser(userAuth))
    }
  }
}
const mapStateToProps=(state) => {
  return{
    user:state.user.currentUser
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

