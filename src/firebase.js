import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCVkn72ZfOnCmurCWw1bWBDHF5IEGO5lI",
  authDomain: "tender-app-clone.firebaseapp.com",
  projectId: "tender-app-clone",
  storageBucket: "tender-app-clone.appspot.com",
  messagingSenderId: "43466840018",
  appId: "1:43466840018:web:5ebe77cea4c7d05c2f9a0b",
  measurementId: "G-7VQ56JKG4S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();