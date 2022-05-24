// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-GWHgd235YGj81Xhm0x2lvUtlgV98Irc",
    authDomain: "innovationassignment.firebaseapp.com",
    projectId: "innovationassignment",
    storageBucket: "innovationassignment.appspot.com",
    messagingSenderId: "221778477656",
    appId: "1:221778477656:web:44f7fb61b6ac790988002d",
    measurementId: "G-YLL8R0DT91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);