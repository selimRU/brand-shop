import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { useLoaderData } from 'react-router-dom';


export const Context = createContext()
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

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
        createUser,
        logIn,
        logOut,
        user,
        brands,
        products,
        loading
    }

    return (
        <Context.Provider value={authValue}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;