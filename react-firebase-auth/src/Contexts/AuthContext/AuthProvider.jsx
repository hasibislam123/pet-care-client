import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null)
    const [loading , setLoading] = useState (null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return  signOut(auth)
    }
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            console.log('inside observer',currentUser)
        }
        else{
            console.log('inside observer ', currentUser)
        }

    })

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current user in auth statge change ',currentUser )
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
         createUser,
         SignInUser,
         signOutUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;