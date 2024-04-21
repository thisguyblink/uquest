// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEx9c-GKsEtO3XBQktvcIZmYXPMvoXfVw",
    authDomain: "uquest-75a99.firebaseapp.com",
    projectId: "uquest-75a99",
    storageBucket: "uquest-75a99.appspot.com",
    messagingSenderId: "1034575205201",
    appId: "1:1034575205201:web:ac04b9be9af36dccc37970",
    measurementId: "G-05KM80350B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
