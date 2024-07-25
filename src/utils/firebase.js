// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFdmzn7fggoc4LZ6Zg_Yq_tsQbmYW9Pqw",
  authDomain: "netflixgpt-49e9a.firebaseapp.com",
  projectId: "netflixgpt-49e9a",
  storageBucket: "netflixgpt-49e9a.appspot.com",
  messagingSenderId: "848054177861",
  appId: "1:848054177861:web:077e54234658f8a3ef532c",
  measurementId: "G-0RMNDGDS4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth();