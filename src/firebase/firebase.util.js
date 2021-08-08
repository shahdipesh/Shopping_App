import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAVjDsQ662ridmsOg2hTSXKAa6n5ZDnPwc",
    authDomain: "react-1adde.firebaseapp.com",
    projectId: "react-1adde",
    storageBucket: "react-1adde.appspot.com",
    messagingSenderId: "938363397902",
    appId: "1:938363397902:web:46106b6925c34541b4995f",
    measurementId: "G-LC6QZHD0EZ"
  };
 export const createUserProfileDocument=async(userObj)=>{
    var userRef= await firebase.firestore().doc(`users/${userObj.uid}`);
    var getUser = await userRef.get();
    if(!getUser.exists){
      //If the document does exist, its contents will be overwritten with the newly provided data
      await userRef.set({
        displayName:userObj.displayName,
        email:userObj.email,
        createdAt:new Date(),
      })
    }
    return userRef;
  }
  
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle=()=>{return firebase.auth().signInWithPopup(provider)};

  export default firebase;
  
