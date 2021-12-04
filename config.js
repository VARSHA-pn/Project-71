import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDy1_7YEC87EWQc8ve5hryDeHSWLSCBZ_c",
    authDomain: "e-ride-stage-4-58653.firebaseapp.com",
    projectId: "e-ride-stage-4-58653",
    storageBucket: "e-ride-stage-4-58653.appspot.com",
    messagingSenderId: "934501403113",
    appId: "1:934501403113:web:171e32a0e353d79770a378"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


