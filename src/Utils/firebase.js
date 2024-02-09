// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwPKnXboB6-8sToorpvgS1YZgOZoRErbo",
  authDomain: "netflixgpt-95242.firebaseapp.com",
  projectId: "netflixgpt-95242",
  storageBucket: "netflixgpt-95242.appspot.com",
  messagingSenderId: "96999428461",
  appId: "1:96999428461:web:a5cbd41c0d1733ee928a64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
