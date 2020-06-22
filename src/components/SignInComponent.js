import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyA-3klPzjTw7M7M62LTEdpfdo5ETDrm-9w",
  authDomain: "transport-booking-app-mrs.firebaseapp.com",
  databaseURL: "https://transport-booking-app-mrs.firebaseio.com",
  projectId: "transport-booking-app-mrs",
  storageBucket: "transport-booking-app-mrs.appspot.com",
  messagingSenderId: "508205781740",
  appId: "1:508205781740:web:0a546cfaad7e723e858bc9",
  measurementId: "G-QQ3K8285LC"
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default SignIn;