// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWQRozYTikM4v2abp2MaSuo2PjDz7TanY",
    authDomain: "brand-shop-assignment-be609.firebaseapp.com",
    projectId: "brand-shop-assignment-be609",
    storageBucket: "brand-shop-assignment-be609.appspot.com",
    messagingSenderId: "406155833154",
    appId: "1:406155833154:web:386dbb0a230c4d979662db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth