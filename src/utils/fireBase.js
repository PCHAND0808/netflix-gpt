// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE8Jc7pA26Bbjpu8eYXXndWzRJ3RPWg_E",
  authDomain: "netflixgpt-22f8a.firebaseapp.com",
  projectId: "netflixgpt-22f8a",
  storageBucket: "netflixgpt-22f8a.appspot.com",
  messagingSenderId: "348499307776",
  appId: "1:348499307776:web:93c0a74eb1eca21788d7e5",
  measurementId: "G-4KWGXNY14Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
