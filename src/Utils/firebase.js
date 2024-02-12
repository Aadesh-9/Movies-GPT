// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcrDZBBYoesvg7_R_nRAW2Qf7JIriTLpU",
  authDomain: "netflix--gpt-836cd.firebaseapp.com",
  projectId: "netflix--gpt-836cd",
  storageBucket: "netflix--gpt-836cd.appspot.com",
  messagingSenderId: "111431764328",
  appId: "1:111431764328:web:718920c520ae1994de6edd",
  measurementId: "G-22GGR2BRBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
