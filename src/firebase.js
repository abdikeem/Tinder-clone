// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);