// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9yJdO7rT8VVqobx1CBbYKI8cBt85bUvQ",
  authDomain: "pet-care-app-1d8d1.firebaseapp.com",
  projectId: "pet-care-app-1d8d1",
  storageBucket: "pet-care-app-1d8d1.firebasestorage.app",
  messagingSenderId: "423232513123",
  appId: "1:423232513123:web:f4304224f2407f11ca4456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app