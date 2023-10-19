import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';



export const Context = createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [brands, setBrands] = useState([])
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('../brand.json')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    // auth value
    const authValue = {
        googleLogin,
        createUser,
        profileUpdate,
        logIn,
        logOut,
        user,
        brands,
        products,
        loading,
    }

    return (
        <Context.Provider value={authValue}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;