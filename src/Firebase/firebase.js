// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjzp0PB-qkfFbitpHuyFFyRt2pheDJMZQ",
  authDomain: "adv-salonproj.firebaseapp.com",
  projectId: "adv-salonproj",
  storageBucket: "adv-salonproj.appspot.com",
  messagingSenderId: "246950483773",
  appId: "1:246950483773:web:9c022e733582a345285754",
  measurementId: "G-M1PBRTHM1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { app, auth, db };
