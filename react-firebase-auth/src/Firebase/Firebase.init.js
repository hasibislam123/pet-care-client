// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMC9Zkf3bnrARXLzQO8J8MYNn2rrWVhTw",
  authDomain: "react-firebase-auth-init.firebaseapp.com",
  projectId: "react-firebase-auth-init",
  storageBucket: "react-firebase-auth-init.firebasestorage.app",
  messagingSenderId: "412800384295",
  appId: "1:412800384295:web:6d38c8b9737601c7717d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);