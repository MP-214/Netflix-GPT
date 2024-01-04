// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWiExubmK-5W0JBf--fYJ_omgvZFgpsBY",
  authDomain: "netflixgtp-92a0f.firebaseapp.com",
  projectId: "netflixgtp-92a0f",
  storageBucket: "netflixgtp-92a0f.appspot.com",
  messagingSenderId: "323940930717",
  appId: "1:323940930717:web:7232f2858434942da0b074",
  measurementId: "G-KG8LYXJHY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
