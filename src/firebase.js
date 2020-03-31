import firebase from "firebase";
require("firebase/firestore");

// Initialize Firebase
const firebaseConfig = {
  
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db };
