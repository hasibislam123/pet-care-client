// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey || "",
  authDomain: import.meta.env.VITE_authDomain || "",
  projectId: import.meta.env.VITE_projectId || "",
  storageBucket: import.meta.env.VITE_storageBucket || "",
  messagingSenderId: import.meta.env.VITE_messagingSenderId || "",
  appId: import.meta.env.VITE_appId || "",
};

// Initialize Firebase with error handling
let app;
try {
  // Only initialize Firebase if we have a valid config
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  } else {
    console.warn("Firebase config not found, running in offline mode");
    // Initialize with empty config for offline mode
    app = initializeApp({});
  }
} catch (error) {
  console.warn("Firebase initialization error:", error);
  // Initialize with a default config if env vars are missing
  app = initializeApp({});
}

export default app;