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
  console.log("Firebase Auth initialized successfully");
} catch (error) {
  console.warn("Firebase Auth initialization error:", error);
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
        console.warn("Google authentication not available");
        return Promise.reject(new Error("Google authentication not available"));
      }
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
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