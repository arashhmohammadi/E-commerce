import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  const config= {
    apiKey: "AIzaSyBLBPc7sPGj1RWUyGLwyEX9oH_Rpf_0TPY",
    authDomain: "crown-db-5e7a9.firebaseapp.com",
    databaseURL: "https://crown-db-5e7a9.firebaseio.com",
    projectId: "crown-db-5e7a9",
    storageBucket: "crown-db-5e7a9.appspot.com",
    messagingSenderId: "961207638570",
    appId: "1:961207638570:web:7858f2b50dae6eee2d0153",
    measurementId: "G-FXG11H3GFH"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;