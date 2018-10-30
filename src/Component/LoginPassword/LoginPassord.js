import React, { Component } from 'react';

import { Config } from '../../Config'; // eslint-disable-next-line
import './LoginPassword.css'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class LoginPassword extends Component{
  state = { isSignedIn: false}
  uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      sigInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user})
      console.log("user", user);
    });
  }

  render() {
    return(
      <div className= "LogInStyle">
        
        
        {this.state.isSignedIn ? (
        <div clasName="inside-count">
          <div className = "user-loged">
            <h3>Hoy será una gran día de trabajo</h3>
            <h4>Hola:{firebase.auth().currentUser.displayName}</h4>
            {firebase.auth().currentUser.photoURL===null ?
            (<img className = "photo-user" alt = "foto de usuario" src="https://github.com/YocelinGR/here-hack/blob/master/src/assets/QR2.png?raw=true" />) :
            (<img className = "photo-user" alt = "foto de usuario" src= {firebase.auth().currentUser.photoURL} />)}
            <button className = "btn btn-floating lighten-1 btn-user" onClick={() => firebase.auth().signOut()}>Salir</button>
          </div>
        </div>
        ) : (
        <div className="btns-login">
          <h3>Bienvenido Conductor: Empieza bien tu  día </h3>
            <StyledFirebaseAuth uiConfig= {this.uiConfig} firebaseAuth = {firebase.auth()} />
        </div>
        )}
      </div>
    )
  }
}
export default LoginPassword;