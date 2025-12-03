import React, { useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { AuthContext } from "../Contexts/AuthContext";

// Firebase Auth instance with error handling
let auth;
let googleProvider;
try {
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
  // Add required scopes for Google Auth
  googleProvider.addScope('profile');
  googleProvider.addScope('email');
  // Set custom parameters
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });
  console.log("✅ Firebase Auth initialized successfully");
} catch (error) {
  console.error("❌ Firebase Auth initialization error:", error);
  auth = null;
  googleProvider = null;
}

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // Create new user
   const createUser = (email, password) => {
      if (!auth) {
        console.warn("Authentication not available");
        return Promise.reject(new Error("Authentication not available"));
      }
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Email/Password Sign In
   const signIn = (email, password) => {
      if (!auth) {
        console.warn("Authentication not available");
        return Promise.reject(new Error("Authentication not available"));
      }
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   //  Google Sign In
   const signInWithGoogle = () => {
      if (!auth || !googleProvider) {
        const errorMsg = "Google authentication not available - Auth or Provider missing";
        console.warn(errorMsg);
        return Promise.reject(new Error(errorMsg));
      }
      setLoading(true);
      console.log("🚀 Attempting Google sign in...");
      return signInWithPopup(auth, googleProvider)
        .then((result) => {
          console.log("✅ Google sign in successful:", result.user);
          return result;
        })
        .catch((error) => {
          console.error("❌ Google sign in error:", error);
          console.error("Error code:", error.code);
          console.error("Error message:", error.message);
          
          // Provide more specific error messages
          let errorMessage = "Google Sign-In failed. Please try again.";
          
          if (error.code === 'auth/popup-blocked') {
            errorMessage = "Popup blocked by browser. Please allow popups for this site.";
          } else if (error.code === 'auth/cancelled-popup-request') {
            errorMessage = "Authentication popup was closed.";
          } else if (error.code === 'auth/popup-closed-by-user') {
            errorMessage = "Google sign in was cancelled.";
          } else if (error.code === 'auth/internal-error') {
            errorMessage = "Internal error occurred. Please try again.";
          } else if (error.code === 'auth/network-request-failed') {
            errorMessage = "Network error. Please check your connection and try again.";
          } else if (error.code === 'auth/operation-not-allowed') {
            errorMessage = "Google Sign-In is not enabled. Please contact the administrator.";
          } else if (error.code === 'auth/invalid-API-key') {
            errorMessage = "Invalid API key. Please check your configuration.";
          } else if (error.code === 'auth/unauthorized-domain') {
            errorMessage = "This domain is not authorized for OAuth operations. Please contact the administrator.";
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          throw new Error(errorMessage);
        });
   };

   // Update profile
   const updateUser = (updatedData) => {
      if (!auth) {
        console.warn("Authentication not available");
        return Promise.reject(new Error("Authentication not available"));
      }
      return updateProfile(auth.currentUser, updatedData);
   };

   // Logout function
   const logout = () => {
      if (!auth) {
        console.warn("Authentication not available");
        // Resolve immediately if auth is not available
        setLoading(false);
        return Promise.resolve();
      }
      setLoading(true);
      return signOut(auth);
   };

   // Track user state change
   useEffect(() => {
      if (!auth) {
        console.warn("Auth not available, setting loading to false");
        setLoading(false);
        return;
      }
      
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("👤 Auth state changed:", currentUser ? currentUser.email : "No user");
         setUser(currentUser);
         setLoading(false);
      });

      return () => unsubscribe();
   }, []);

   // Auth context data
   const authData = {
      user,
      setUser,
      createUser,
      logout,
      loading,
      setLoading,
      signIn,
      updateUser,
      signInWithGoogle, 
   };

   return (
      <AuthContext.Provider value={authData}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;