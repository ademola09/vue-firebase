import firebase from "firebase";
require("firebase/firestore");

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDW9MaX5qghA8W_7PF3tMqPIZVLkaQrZm8",
  authDomain: "vue-shop-302c9.firebaseapp.com",
  databaseURL: "https://vue-shop-302c9.firebaseio.com",
  projectId: "vue-shop-302c9",
  storageBucket: "vue-shop-302c9.appspot.com",
  messagingSenderId: "652965166624",
  appId: "1:652965166624:web:6b3e74b287e82453194645",
  measurementId: "G-376QKWBTY6"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db };
