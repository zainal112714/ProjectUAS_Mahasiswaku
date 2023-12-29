import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCLPks3nLDQ4JaaQsrd1UIyW36PujbFIl0",
  authDomain: "pab-uas.firebaseapp.com",
  projectId: "pab-uas",
  storageBucket: "pab-uas.appspot.com",
  messagingSenderId: "391247239663",
  appId: "1:391247239663:web:1cf057e72a6b167c91fe1a",
  measurementId: "G-VJBEHTTDC8"
});

const FIREBASE = firebase;

export default FIREBASE;