import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,
   updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";



// Create Context
export const AuthContext = createContext();

// Firebase Auth instance
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // Create new user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   //   SignOut
   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth , email, password)
   }

   const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser , updatedData)
   }

   // Logout function
   const logout = () => {
      setLoading(true);
      return signOut(auth);
   };

   // Track user state change
   useEffect(() => {
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
   };

   return (
      <AuthContext.Provider value={authData}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
