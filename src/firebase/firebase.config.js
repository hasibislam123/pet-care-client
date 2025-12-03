// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Log the config to help with debugging (remove sensitive data in production)
console.log("Firebase config keys present:", {
  hasApiKey: !!import.meta.env.VITE_apiKey,
  hasAuthDomain: !!import.meta.env.VITE_authDomain,
  hasProjectId: !!import.meta.env.VITE_projectId,
  hasStorageBucket: !!import.meta.env.VITE_storageBucket,
  hasMessagingSenderId: !!import.meta.env.VITE_messagingSenderId,
  hasAppId: !!import.meta.env.VITE_appId,
});

// Initialize Firebase with error handling
let app;
try {
  // Check if required config values are present
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn("⚠️ Firebase config is incomplete. Google authentication will not work.");
    console.warn("Missing required config values. Please check your .env file.");
    // Initialize with empty config for offline mode
    app = initializeApp({});
  } else {
    app = initializeApp(firebaseConfig);
    console.log("✅ Firebase initialized successfully");
  }
} catch (error) {
  console.error("❌ Firebase initialization error:", error);
  // Initialize with a default config if env vars are missing
  app = initializeApp({});
}

export default app;