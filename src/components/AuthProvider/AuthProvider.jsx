import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import './Auth.css'


export const Context = createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [brands, setBrands] = useState([])
    const [products, setProducts] = useState([])
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((pre) => (pre === "light" ? "dark" : "light"))
    }
    useEffect(() => {
        fetch('../brand.json')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://brand-shop-assignment-server-side-3xu1ymexo.vercel.app/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
        theme,
        toggleTheme,
        user,
        brands,
        products,
        setProducts,
        loading
    }

    return (
        <Context.Provider value={authValue}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;