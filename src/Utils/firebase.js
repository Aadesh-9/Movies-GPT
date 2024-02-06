// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVEhUV8HimN6g8eq69eW1ButWnDtK99Pc",
  authDomain: "netflix---gpt.firebaseapp.com",
  projectId: "netflix---gpt",
  storageBucket: "netflix---gpt.appspot.com",
  messagingSenderId: "16374580446",
  appId: "1:16374580446:web:8aa4e8f2b4281dce5f6e4f",
  measurementId: "G-3V34MHF824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
