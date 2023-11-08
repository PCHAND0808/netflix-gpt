// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Pu-rcwLwfsZ83PFgQfrSprQP5gzvqVk",
  authDomain: "netflixclone-9e042.firebaseapp.com",
  projectId: "netflixclone-9e042",
  storageBucket: "netflixclone-9e042.appspot.com",
  messagingSenderId: "873533410481",
  appId: "1:873533410481:web:c3d44eaa5eb909b68a2690",
  measurementId: "G-B6ZJR6P10C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
