// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import * as firebase from "firebase/app"
import { useNavigate } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLQ21mrHwTvrVexWPHYPCuVxyA8K5yKE",
  authDomain: "powerslide-5ff01.firebaseapp.com",
  databaseURL: "https://powerslide-5ff01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "powerslide-5ff01",
  storageBucket: "powerslide-5ff01.appspot.com",
  messagingSenderId: "913746332400",
  appId: "1:913746332400:web:2279c5d837fedbd1369035"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




export default firebase;
