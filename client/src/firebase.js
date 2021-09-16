// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNcINCLatH1lsFmOopU0uNbGrz15iglQY",
    authDomain: "fashion-ecommerce-b0002.firebaseapp.com",
    projectId: "fashion-ecommerce-b0002",
    storageBucket: "fashion-ecommerce-b0002.appspot.com",
    messagingSenderId: "726980867281",
    appId: "1:726980867281:web:f825acf8916e0dfe7bc1f0",
    measurementId: "G-MY6CTSRX8G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();